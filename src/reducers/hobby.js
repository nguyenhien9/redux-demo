const initialState = {
  hobbyList: [],
  activeID: null,
  filter: {
    search: "",
  },
  text: "",
};

const hobbyReducer = (state = initialState, action) => {
  let newList;
  switch (action.type) {
    case "ADD_HOBBY":
      newList = [...state.hobbyList];
      newList.push(action.payload);
      return {
        ...state,
        hobbyList: newList,
      };
    case "REMOVE_HOBBY":
      newList = [...state.hobbyList];
      newList = newList.filter((hobby) => hobby.id !== action.payload);
      console.log(newList);
      return {
        ...state,
        hobbyList: newList,
      };
    case "ACTIVE_HOBBY":
      return {
        ...state,
        activeID: action.payload,
      };

    case "SEARCH_FILTER_CHANGE":
      return {
        ...state,
        filter: {
          ...state.filter,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};
export default hobbyReducer;
