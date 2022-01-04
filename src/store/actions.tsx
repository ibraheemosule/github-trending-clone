import axios from "axios";
import * as action from "./actionTypes";

export const fetchRepos = (data: any) => ({
  type: action.FETCH_REPOS,
  payload: data,
});

export const fetchDevs = (data: any) => ({
  type: action.FETCH_DEVS,
  payload: data,
});

export const fetchingData = () => ({
  type: action.FETCHING_DATA,
});

export const errorMessage = (error: any) => ({
  type: action.ERROR,
  payload: error,
});

export const fetchData = (dataName: string, url: string) => {
  return async (dispatch: any) => {
    dispatch(fetchingData());
    try {
      const res = await axios.get(url);
      if (dataName === "repos") dispatch(fetchRepos(res.data));
      if (dataName === "devs") dispatch(fetchDevs(res.data));
    } catch (err: any) {
      dispatch(errorMessage(err.message));
    } finally {
      dispatch(fetchingData());
    }
  };
};
