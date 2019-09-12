export const addFeature = add =>{
  return{
    type: "ADD_FEATURES",
    payload: add
  };
};

export const removeFeature = item =>{
  return{
    type: "REMOVE_FEATURE",
    payload: item
  };
};

export const addPrice = price =>{
  return{
    type: "ADD_PRICE",
    payload: price
  };
};

export const removePrice = price =>{
  return{
    type: "REMOVE_PRICE",
    payload: price
  };
};

