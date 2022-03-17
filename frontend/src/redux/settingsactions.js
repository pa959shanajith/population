import * as types from "./actionTypes";

export function setUser(payload) {
  return {
    type: types.USER_LOGIN,
    payload,
  };
}
export function setUserAuth(payload) {
  return {
    type: types.USER_LOGOUT,
    isAuth: payload,
  };
}

export function setCountryData(payload) {
  return {
    type: types.COUNTRY_DATA,
    country_data: payload,
  };
}
export function setCount(payload) {
    return {
      type: types.SET_COUNT,
      count: payload,
    };
}

export function setCurrentPage(payload) {
    return {
      type: types.SET_CURRENT_PAGE,
      current: payload,
    };
}

export function setSearchType(payload) {
    return {
      type: types.SET_SEARCH_TYPE,
      searchType: payload,
    };
}

export function setSearchKey(payload) {
    return {
      type: types.SET_SEARCH_KEY,
      searchKey: payload,
    };
}