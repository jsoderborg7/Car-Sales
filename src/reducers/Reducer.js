const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const appReducer = (state=initialState, action) =>{
  const updatePrice = [state.additionalPrice]

  switch (action.type){
    case "ADD_FEATURES":
      const storeFilter = state.store.filter(feature => feature !== action.payload)
      return{
        ...state,
        car: {...state.car, features:[...state.car.features, action.payload]},
        store: storeFilter
      };

    case "REMOVE_FEATURE":
      const newStore = [...state.store, action.payload];
      return{
        ...state,
        car: {...state.car, features: state.car.features.filter(feature =>{return feature !== action.payload})},
        store: newStore
      };

    case "ADD_PRICE":
      const addReducer = ((num, total) =>{return num + total})
      return{
        ...state,
        additionalPrice: updatePrice.reduce(addReducer, action.payload)
      };

    case "REMOVE_PRICE":
      const removeReducer = ((num, total) =>{return total - num})
      return{
        ...state,
        additionalPrice: updatePrice.reduce(removeReducer, action.payload)
      };

      default:
        return state;
  }
};

