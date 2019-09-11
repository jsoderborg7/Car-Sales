import React from 'react';
import {connect} from 'react-redux';
import {Reducer} from '../reducers/Reducer';


const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    priceOnProps: state.car.price,
    additionalPriceOnProps: state.additionalPrice
  };
};

export default connect(mapStateToProps, {Reducer})(Total);
