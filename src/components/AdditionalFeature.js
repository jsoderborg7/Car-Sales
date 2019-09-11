import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/Actions';

const AdditionalFeature = props => {

  let addFeature = e =>{
    e.preventDefault();
    props.addItem(props.feature.price);
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state =>{
  return{
    data: state.car.feature
  };
};

export default connect(mapStateToProps, {addItem})(AdditionalFeature);
