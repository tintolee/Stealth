
import createDataContext from "../createDataContext";
import { Action } from '../types';
import { ERRORS } from '../../constants/store'
import Toast from 'react-native-toast-message'





const errorsReducer = (
  state = {
    errorMessages: []
  },
  action: Action
) => {
  switch (action.type) {
    case ERRORS.ERRORSHOWN:
      return { ...state, errorMessages:action.payload};
      case ERRORS.ERRORHIDDEN:
        return { ...state};
    default:
      return state
  }
}



export const showError =
  (dispatch: React.Dispatch<any>) => (message: any) => {
    
    dispatch({ type: ERRORS.ERRORSHOWN, payload:message});
    ;
    Toast.show({
      type: 'error',
      text2: `${message}`,
      onHide: (()=> dispatch({ type: ERRORS.ERRORHIDDEN})),
    })
  }


  

export const { Provider, Context } = createDataContext(
  errorsReducer,
  {
    showError
  },
  {
    errorMessages: []
  },
);


