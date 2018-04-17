import React from 'react';
import PropTypes from 'prop-types';

const FormItem = props => (
  <div>
    <form>
      <input onChange={props.onChange} value={props.value} />
      <button type="button" onClick={props.onSubmit}>
        Add Todo
      </button>
    </form>
  </div>
);
FormItem.defaultProps = {
  value: '',
};
FormItem.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormItem;
