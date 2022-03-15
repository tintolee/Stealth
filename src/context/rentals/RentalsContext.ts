import client from '../../api/graphql/apollo';
import {
  AddressInput,
  Maybe,
  RentalUnit,
  CreateRentalDocument,
  CreateRentalMutation,
  CreateRentalInput,
  SetRentalUnitsMutation,
  SetRentalUnitsMutationVariables,
  SetRentalUnitsDocument,
  GetUserRentalsQuery,
  GetUserRentalsQueryVariables,
  GetUserRentalsDocument,
  
 
} from '../../api/graphql/generated/graphql';
import { GenericCallback } from '../../components/util';
import { RENTALS } from '../../constants/store';
import createDataContext from '../createDataContext';
import { Action } from '../types';
import Toast from 'react-native-toast-message'



const rentalsReducer = (
  state = {
    rentalsLoaded: false,
    rentals: [],
    isLoading: false,
    newRental: {},
    newRentalSaving: false,
   
  },
  action: Action,
) => {
  switch (action.type) {
    case RENTALS.LOADUSERRENTALSATTEMPTED:
      return { ...state, isLoading: true };
    case RENTALS.LOADUSERRENTALSFAILED:
      return { ...state, isLoading: false};
    case RENTALS.LOADUSERRENTALSSUCCEEDED:
      return {
        ...state,
        rentals: action.payload,
        isLoading: false,
        rentalsLoaded: true,
      };
    case RENTALS.UPDATEWIZARDRENTAL:
      return { ...state, newRental: { ...state.newRental, ...action.payload } };
    case RENTALS.UPDATERENTALFAILED:
      return{...state,};
    case RENTALS.UPDATERENTALSUCCESS:
      return{...state,
        rentals: action.payload.rentalUpdate
      }
  
      case RENTALS.CREATERENTALATTEMPTED:
      return { ...state, newRentalSaving: true };
    case RENTALS.CREATERENTALSUCCESS:
      return {
        ...state,
        newRental: {},
        newRentalSaving: false,
        rentals: [...state.rentals, action.payload.rentalUpdate],
        toastMessage: action.payload.toast
      };
    case RENTALS.CREATERENTALFAILED:
      return { ...state, newRentalSaving: false };
    case RENTALS.UPDATERENTALFAILED:
      return {... state};
    case RENTALS.UPDATEWIZARDRENTALFAILED:
      return {...state}
    default:
      return state;
  }
};

export const setWizardRentalType =
  (dispatch: React.Dispatch<any>) =>
  async (
    { rentalType }: { rentalType: string },
    callback: GenericCallback,
  ): Promise<void> => {
    try{
      dispatch({ type: RENTALS.UPDATEWIZARDRENTAL, payload: { rentalType } });
    callback();
    }
    catch(e){
      dispatch({type: RENTALS.UPDATERENTALFAILED
      }); throw new Error ('update failed')
    }
    
  };

export const setWizardRentalUnits =
  (dispatch: React.Dispatch<any>) =>
  async (
    { noOfUnits }: { noOfUnits: string },
    callback: GenericCallback,
  ): Promise<void> => {

    try{
      dispatch({ type: RENTALS.UPDATEWIZARDRENTAL, payload: { noOfUnits } });
    callback();
    }
    catch(error){
          dispatch({type: RENTALS.UPDATERENTALFAILED
      }); throw new Error ('update failed')
    }
    
  };

export const setWizardRentalAddress =
  (dispatch: React.Dispatch<any>) =>
  async (
    { address }: { address: AddressInput },
    callback: GenericCallback,
  ): Promise<void> => {
    try{
      dispatch({ type: RENTALS.UPDATEWIZARDRENTAL, payload: { address } });
    callback()
    }
    catch(e){
      dispatch({ type: RENTALS.UPDATEWIZARDRENTALFAILED})
    }
    ;
  };

export const loadMyRentals =
  (dispatch: React.Dispatch<any>) =>
  async ({ id }: { id: string }, callback: GenericCallback): Promise<void> => {
    dispatch({ type: RENTALS.LOADUSERRENTALSATTEMPTED });
    try {
      const myRentals = await client.query<
        GetUserRentalsQuery,
        GetUserRentalsQueryVariables
      >({
        query: GetUserRentalsDocument,
        variables: {
          id,
        },
        fetchPolicy: 'network-only',
      });
      if (myRentals?.data?.rentals?.length) {
        dispatch({
          type: RENTALS.LOADUSERRENTALSSUCCEEDED,
          payload: myRentals?.data?.rentals,
        });
      }
    } catch (error) {
  
      dispatch({ type: RENTALS.LOADUSERRENTALSFAILED});
    }
    if (callback) {
      callback();
    }
  };

export const setWizardRentalUnitsInfo =
  (dispatch: React.Dispatch<any>) =>
  async (
    { units }: { units: Maybe<Array<RentalUnit>> },
    state: Record<string, any>,
    callback: GenericCallback,
  ): Promise<void> => {
    dispatch({ type: RENTALS.UPDATEWIZARDRENTAL, payload: { units } });
    dispatch({ type: RENTALS.CREATERENTALATTEMPTED });

    try {
      const createRentalResponse = await client.mutate<
        CreateRentalMutation,
        { args: CreateRentalInput }
      >({
        mutation: CreateRentalDocument,
        variables: {
          args: {
            name: state.newRental.address.line,
            address: state.newRental.address,
            rentalType: state.newRental.rentalType,
          },
        },
      });

      if (!createRentalResponse?.data?.rental?.create?.id) {
        dispatch({ type: RENTALS.CREATERENTALFAILED });
        return;
      }
      const setRentalUnits = await client.mutate<
        SetRentalUnitsMutation,
        SetRentalUnitsMutationVariables
      >({
        mutation: SetRentalUnitsDocument,
        variables: {
          id: createRentalResponse?.data?.rental?.create?.id,
          units,
        },
      });
      if (!setRentalUnits?.data?.rental?.update?.id) {
        dispatch({ type: RENTALS.CREATERENTALFAILED });
        return;
      }
    
      const rentalUpdate =setRentalUnits.data.rental.update
      dispatch({
        type: RENTALS.CREATERENTALSUCCESS,
        payload: {rentalUpdate:rentalUpdate}
      });
    } catch (error) {
      dispatch({ type: RENTALS.CREATERENTALFAILED});
    }
          
    if (callback) {
      callback();
    }
  };

  export const updateRentalAdressInfo =
  (dispatch: React.Dispatch<any>) =>
  async (
    { address }: { address: AddressInput },
    state: Record<string, any>,
    callback: GenericCallback,
  ): Promise<void> => {

    try {
      UpdateRentalAdressMutation,
      { args: UpdateRentalInput }
    >({
      mutation: UpdateRentalDocument,
      variables: {
        args: {
          name: state.newRental.address.line,
          address: state.newRental.address,
          rentalType: state.newRental.rentalType,
        },
      },
    });

      }
      
  catch(e){
    
  }
}

export const { Provider, Context } = createDataContext(
  rentalsReducer,
  {
    setWizardRentalType,
    setWizardRentalUnits,
    setWizardRentalAddress,
    setWizardRentalUnitsInfo,
    updateRentalAdressInfo,
    loadMyRentals,
  },
  {
    rentalsLoaded: false,
    rentals: [],
    isLoading: false,
  },
);
