import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../actions/Actions';

const AddedFeature = props => {

  let removeFeature = e =>{
    e.preventDefault();
    props.removeItem(props.feature.price);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state =>{
  return{
    data: state.store.feature
  };
};
export default connect(mapStateToProps, {removeItem})(AddedFeature);
