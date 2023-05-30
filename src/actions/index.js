export const addHobby = (hobby) => {
  return {
    type: "ADD_HOBBY",
    payload: hobby,
  };
};
export const removeHobby = (id) => {
  return {
    type: "REMOVE_HOBBY",
    payload: id,
  };
};
export const activeHobby = (hobby) => {
  return {
    type: "ACTIVE_HOBBY",
    payload: hobby,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "SEARCH_FILTER_CHANGE",
    payload: text,
  };
};
