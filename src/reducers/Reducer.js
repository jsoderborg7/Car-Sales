import {BUY_ITEM, REMOVE_ITEM} from '../actions/Actions';

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

  switch (action.type){

    case BUY_ITEM:

      if (state.car.features.find(feature => feature.id === action.payload.id)) {
        return state;
      } else{
      
        return{

      ...state,

      car: {
        ...state.car,
        price: state.car.price + action.payload.price,
        features: [...state.car.features, action.payload]
      }
    }
  };

    case REMOVE_ITEM:
      return{
        ...state,
        
        car: {
          ...state.car,
          price: state.car.price - action.payload.price,
          features: state.car.features.filter(
            feature => {
              if(feature.id === action.payload.id){
                return false;
              } else {
                return true;
              }
            })
        }
      };

      default:
        return state;
  }
};

