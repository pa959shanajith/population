import Appconfig from "../constants/appConfig";
import * as types from "./actionTypes";

const initialSettings = Appconfig.common_state;

const settings = (state = initialSettings, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        user: action.user,
      };
    case types.USER_LOGOUT:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    case types.COUNTRY_DATA:
      return {
        ...state,
        country_data: action.country_data,
      };
    case types.SET_COUNT:
      return {
        ...state,
        count: action.count,
      };
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        current: action.current,
      };
    case types.SET_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.searchType,
      };
    case types.SET_SEARCH_KEY:
      return {
        ...state,
        searchKey: action.searchKey,
      };
    default:
      return state;
  }
};

export default settings;
