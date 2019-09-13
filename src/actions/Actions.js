export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const buyItem = item =>{
  console.log("testing add", item);
  return{
    type: BUY_ITEM,
    payload: item
  };
};

export const removeItem = item =>{
  console.log("testing remove", item);
  return{
    type: REMOVE_ITEM,
    payload: item
  };
};
