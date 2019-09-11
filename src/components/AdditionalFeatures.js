import React from 'react';
import {connect} from 'react-redux';
import {Reducer} from '../reducers/Reducer';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.length ? (
        <ol type="1">
          {props.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
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
    store: state.store
  };
};

export default connect(mapStateToProps, {Reducer})(AdditionalFeatures);
