export const addItem = add =>{
  return{
    type: "ADD_FEATURES",
    payload: add
  };
};

export const removeItem = remove =>{
  return{
    type: "REMOVE_FEATURES",
    payload: remove
  };
};