import React from 'react';
import {connect} from 'react-redux';
import AdditionalFeature from './AdditionalFeature';
import {buyItem} from '../actions/Actions';

const AdditionalFeatures = props => {
  console.log(props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    additionalFeatures: state.store
  }
};

export default connect(mapStateToProps, {buyItem})(AdditionalFeatures);