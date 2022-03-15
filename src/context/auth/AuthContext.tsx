import AsyncStorage from '@react-native-async-storage/async-storage';
import { client} from '../../api/graphql/apollo';

import {
  LoginDocument,
  LoginInput,
  LoginMutation,
  
  LogoutDocument,
  LogoutMutation,
  ServiceTypes,
  useRegisterMutation,
  useVerifyAccountMutation,
  useVerifyActivationLinkMutation,
} from '../../api/graphql/generated/graphql';
import { omit } from '../../components/util';
import { AUTH } from '../../constants/store';
import { clearAuthUser, getAuthToken, setAuthToken } from '../../storage/auth';
import createDataContext from '../createDataContext';
import { Action } from '../types';
import Toast from 'react-native-toast-message'






const authReducer = (
  state = {
    activationLink: undefined,
    signupForm: {},
    signupFormIsSubmitting: false,
    me: null,
    token: null,
    isHydrated: false,
    toastMessage:''
  },
  action: Action,
) => {
  switch (action.type) {
    case AUTH.SIGNINATTEMPTED:
      return { ...state, isSubmitting: true };
    case AUTH.SIGNINSUCCESS:
      return {
        ...state,
        isSubmitting: false,
        me: action.payload.user,
        token: action.payload.tokens,
        
      };
      case AUTH.SIGNINFAILED:
      return { ...state};
    case AUTH.SIGNUPATTEMPTED:
      return { ...state, signupFormIsSubmitting: true };
    case AUTH.SIGNUPSUCCESS:
      return {
        ...state,
        activationLink: action.payload,
        signupFormIsSubmitting: false,
      };
    case AUTH.SIGNUPFAILED:
      return {
        ...state,
        signupFormIsSubmitting: false,
      };
    case AUTH.SIGNUPEMAILVALIDATED:
      return {
        ...state,
        signupForm: { email: action.payload },
      };
    case AUTH.SIGNUPFORMUPDATED:
      return {
        ...state,
        signupForm: { ...state.signupForm, ...action.payload },
      };
    case AUTH.HYDRATESUCCESS:
      return {
        ...state,
        ...action.payload,
        isHydrated: true,
        
      };
    case AUTH.SIGNOUTSUCCESS:
      return {
        ...state,
        me: null,
        tokens: null,
        toastMessage:action.payload,
        

      };
    default:
      return state;
  }
};

type GenericCallback = () => void;

export const validateEmail =
  (dispatch: React.Dispatch<any>) =>
  async (email: string, callback: GenericCallback): Promise<void> => {
    dispatch({ type: AUTH.SIGNUPEMAILVALIDATED, payload: email });
    callback();
  };

type RegisterMutationTuple = ReturnType<typeof useRegisterMutation>;
type VerifyAccountMutationTuple = ReturnType<typeof useVerifyAccountMutation>;
type VerifyActivationLinkMutationTuple = ReturnType<
  typeof useVerifyActivationLinkMutation
>;

export const validateAccountPincode =
  (dispatch: React.Dispatch<any>) =>
  async ({
    verifyActivationLink,
    verifyAccount,
    values,
    state,
  }: {
    verifyActivationLink: VerifyActivationLinkMutationTuple[0];
    verifyAccount: VerifyAccountMutationTuple[0];
    values: any;
    state: any;
  }): Promise<void> => {
    
    dispatch({ type: AUTH.VALIDATEACCOUNTATTEMPTED });
    const response = await verifyActivationLink({
      variables: {
        token: state.activationLink,
      },
    });

    if (!response?.data?.account?.verifyActivationLink) {
      dispatch({ type: AUTH.VALIDATEACCOUNTFAILED });
      throw new Error('Incorrect Pincode');
    }
    if (response.data.account.verifyActivationLink.pincode !== values.pincode) {
      dispatch({ type: AUTH.VALIDATEACCOUNTFAILED });
      throw new Error('Incorrect Pincode');
    }

    const verifyAccountResponse = await verifyAccount({
      variables: {
        ...(omit(response.data.account.verifyActivationLink, [
          '__typename',
        ]) as { email: string; pincode: string }),
      },
    });

    if (verifyAccountResponse?.data?.account?.verifyAccount?.success) {
      const toast=()=>{ Toast.show({
        type: 'success',
        text1: 'account validated👋'
      });}
      dispatch({ type: AUTH.VALIDATEACCOUNTSUCCESS, payload: toast() });

      await logUserIn(state.signupForm, dispatch);
    }
  };

export const hydrate =
  (dispatch: React.Dispatch<any>) => async (): Promise<void> => {
    dispatch({ type: AUTH.HYDRATESTARTED });
    const authUser = await AsyncStorage.getItem('@auth_user');
    const me = authUser ? JSON.parse(authUser) : null;
    const token = await getAuthToken();
    dispatch({ type: AUTH.HYDRATESUCCESS, payload: { me, token } });
  };

export const logIn =
  (dispatch: React.Dispatch<any>) =>
  async (credentials: { email: string; password: string }): Promise<void> => {
    ;
   
    try {
      dispatch({ type: AUTH.SIGNINATTEMPTED });
      // log user in
      await logUserIn(credentials, dispatch);
    } catch (error) {      
       
      dispatch({ type: AUTH.SIGNINFAILED});
      
    }
  };
export const logOut =
  (dispatch: React.Dispatch<any>) => async (): Promise<void> => {

    const SucccessMessage=()=>{ Toast.show({
      type: 'success',
      text1: ' Logged out successfully👋'
    });}
  
    
    try {
      dispatch({ type: AUTH.SIGNOUTATTEMPTED });
      const logoutResponse = await client.mutate<LogoutMutation>({
        mutation: LogoutDocument,
      });

     
      
            if (logoutResponse?.data?.account?.logout?.success) {
        await clearAuthUser(client);
        dispatch({ type: AUTH.SIGNOUTSUCCESS , payload:SucccessMessage()});
      }
    } catch (error) {
      dispatch({ type: AUTH.SIGNOUTFAILED });
      throw error;
    }
  };
export const registerUser =
  (dispatch: React.Dispatch<any>) =>
  async (
    {
      registerMutation,
      verifyActivationLink,
      args,
    }: {
      registerMutation: RegisterMutationTuple[0];
      verifyActivationLink: VerifyActivationLinkMutationTuple[0];
      args: any;
    },
    callback: GenericCallback,
  ): Promise<void> => {
    dispatch({ type: AUTH.SIGNUPATTEMPTED });
    try {
      const response = await registerMutation({
        variables: {
          args,
        },
      });

      if (response?.data?.account?.register?.activationLink) {
        dispatch({
          type: AUTH.SIGNUPSUCCESS,
          payload: response.data.account.register.activationLink,
        });
        callback();
        await verifyActivationLink({
          variables: {
            token: response.data.account.register.activationLink,
          },
        });
      }
    } catch (error) {
      dispatch({ type: AUTH.SIGNUPFAILED });
      throw error;
    }
  };

export const updateSignUpForm =
  (dispatch: React.Dispatch<any>) =>
  async (
    formData: Record<string, any>,
    callback: GenericCallback,
  ): Promise<void> => {
    dispatch({ type: AUTH.SIGNUPFORMUPDATED, payload: formData });
    callback();
  };

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    registerUser,
    updateSignUpForm,
    validateEmail,
    validateAccountPincode,
    hydrate,
    logIn,
    logOut,
  },
  { isHydrated: false, me: null, token: null },
);
const logUserIn = async (
  credentials: { email: string; password: string },
  dispatch: React.Dispatch<any>,
) => {
  const loginResponse = await client.mutate<
    LoginMutation,
    { args: LoginInput }
  >({
    mutation: LoginDocument,
    variables: {
      args: {
        service: ServiceTypes.Password,
        params: {
          email: credentials.email,
          password: credentials.password,
        },
      },
    },
  });

  if (loginResponse?.data?.account?.login) {
    await setAuthToken(loginResponse.data.account.login.tokens, client);
    await AsyncStorage.setItem(
      '@auth_user',
      JSON.stringify(loginResponse.data.account.login.user),
    );
  
    try{
      dispatch({
        type: AUTH.SIGNINSUCCESS, payload: loginResponse.data.account.login
      });
    }catch(e){
      dispatch({
        type: AUTH.SIGNINFAILED, 
      });
    }
   
    
    
  }
  
};
