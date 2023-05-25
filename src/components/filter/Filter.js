import PropTypes from 'prop-types';
import React from 'react';

const Filter = props => { 
  const { value, onChange } = props;
  return (
  <div>
    <label htmlFor="filter">Find contacts by name</label>
    <input
      type="text"
      id="filter"
      value={value}
      onChange={onChange}
    />
  </div>)
};

Filter.propTypes = {
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
};

export default Filter;
