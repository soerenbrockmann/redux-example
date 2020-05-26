import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Name } from '../../components/name/Name';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div class='col-sm'></div>
        <div class='col-sm'></div>
        <div class='col-sm'>
          <Name name={this.props.name} />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { name: state.name };
};

export default connect(mapStateToProps, null)(Header);
