import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName, resetName } from '../../actions';

class NameInput extends Component {
  render() {
    return (
      <div class='col-sm py-3 px-lg-5'>
        <form>
          <div class='form-group'>
            <label for='exampleFormControlInput1'>Name</label>
            <input
              type='name'
              value={this.props.name}
              onChange={this.props.setName}
              className='form-control'
              id='name'
              placeholder=''
            />
          </div>
        </form>
        <button onClick={this.props.resetName}>Reset Input</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setName: (event) => dispatch(setName(event.target.value)),
  resetName: () => dispatch(resetName()),
});

const mapStateToProps = (state) => {
  return { name: state.name };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameInput);
