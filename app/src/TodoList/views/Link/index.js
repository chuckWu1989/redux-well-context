import React from 'react';
import PropTypes from 'prop-types';
import { SHOW_ALL } from '../../constants/Config';

const Link = props => (
  <button
    onClick={props.onClick}
    disabled={props.isDisabled(props.active, props.filter)}
    style={{ marginLeft: '4px' }}
  >
    {props.children}
  </button>
);
Link.defaultProps = {
  active: SHOW_ALL,
  children: undefined,
};
Link.propTypes = {
  children: PropTypes.any,
  active: PropTypes.string,
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.func.isRequired,
};

export default Link;
