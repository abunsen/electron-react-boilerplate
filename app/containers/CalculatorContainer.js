// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Calculator from '../components/Calculator';
import * as CalculatorActions from '../actions/calculator';

function mapStateToProps(state) {
  return {
    calculator: state.calculator
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CalculatorActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);





