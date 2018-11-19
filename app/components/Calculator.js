// @flow
import React, { Component } from 'react';
import styles from './Calculator.css';
import Numpad from './Numpad';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    const { calculator } = this.props;
    return (
      <div data-tid="container">
        <div className={styles.currentInput}>{calculator}</div>
        <Numpad {...this.props} />
      </div>
    );
  }
}
