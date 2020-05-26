import React, { Component } from 'react';
import { connect } from 'react-redux';

class WelcomeMessage extends Component {
  render() {
    return <div class='col-sm py-3 px-lg-5'>Welcome {this.props.name}</div>;
  }
}

const mapStateToProps = (state) => {
  return { name: state.name };
};

export default connect(mapStateToProps, null)(WelcomeMessage);
