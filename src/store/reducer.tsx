const initialState = {
  loading: false,
  repositories: [],
  developers: [],
  error: "",
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        loading: !state.loading,
      };
    case "FETCH_REPOS":
      return {
        ...state,
        loading: false,
        repositories: action.payload,
      };

    case "FETCH_DEVS":
      return {
        ...state,
        loading: false,
        developers: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
