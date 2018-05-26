import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Explore extends Component {
  componentWillMount() {
    this.props.initialize(this.props.appName);
  }
  componentWillUnmount() {
    this.props.dispose(this.props.appName);
  }
  render() {
    const {
      value,
      handleKeyUp,
      handleGoClick,
      saveValue,
      githubRepo,
      appName,
      history,
    } = this.props;
    return (
      <div>
        <p>Type a username or repo full name and hit 'Go':</p>
        <input
          size="45"
          defaultValue={value}
          onChange={e => saveValue(e, appName)}
          onKeyUp={e => handleKeyUp(e, appName, history)}
        />
        <button onClick={() => handleGoClick(appName, history)}>
          Go!
        </button>
        <p>
          Code on <a href={githubRepo} target="_blank" rel="noopener noreferrer">Github</a>.
        </p>
      </div>
    );
  }
}
Explore.defaultProps = {
  value: '',
  githubRepo: 'https://github.com/reactjs/redux',
};
Explore.propTypes = {
  value: PropTypes.string,
  githubRepo: PropTypes.string,
  appName: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  initialize: PropTypes.func.isRequired,
  saveValue: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  handleGoClick: PropTypes.func.isRequired,
};

export default Explore;
