// @flow
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Numpad.css';

type Props = {};

export default class Numpad extends Component<Props> {
  props: Props;

  propTypes: {
    pushChar: PropTypes.func.isRequired,
    popChar: PropTypes.func.isRequired,
    equal: PropTypes.func.isRequired,
    clearNum: PropTypes.func.isRequired
  };
  
  render() {
    const { pushChar, popChar, equal, clearNum } = this.props;
    return (
      <div className={styles.numpad} data-tid="numpad">
        <div className={styles.buttonRow}>
          <button type="button" className={styles.button} onClick={() => pushChar(1)}>
              1
          </button>
          <button type="button" className={styles.button} onClick={() => pushChar(2)}>
              2
          </button>
          <button type="button" className={styles.button} onClick={() => pushChar(3)}>
              3
          </button>
          <button type="button" className={styles.button} onClick={() => pushChar("/")}>
              ÷
          </button>
        </div>
        <div className={styles.buttonRow}>
          <button type="button" className={styles.button} onClick={() => pushChar(4)}>
              4
          </button>
          <button type="button" className={styles.button} onClick={() => pushChar(5)}>
              5
          </button>
          <button type="button" className={styles.button} onClick={() => pushChar(6)}>
              6
          </button>
          <button type="button" className={styles.button} onClick={() => pushChar("*")}>
              &times;
          </button>
        </div>
        <div className={styles.buttonRow}>
          <button type="button" className={styles.button} onClick={() => pushChar(7)}>
              7
          </button>
          <button type="button" className={styles.button} onClick={() => pushChar(8)}>
              8
          </button>
          <button type="button" className={styles.button} onClick={() => pushChar(9)}>
              9
          </button>
          <button type="button" className={styles.button} onClick={() => pushChar("-")}>
              &minus;
          </button>
        </div>
        <div className={styles.buttonRow}>
          <button type="button" className={styles.button} onClick={() => pushChar(".")}>
                .
            </button>
          <button type="button" className={styles.button} onClick={() => pushChar(0)}>
              0
          </button>
          <button type="button" className={styles.button} onClick={() => popChar()}>
              &lt;
          </button>
          <button type="button" className={styles.button} onClick={() => pushChar("+")}>
              +
          </button>
        </div>
        <div className={styles.clearRow}>
          <button type="button" className={styles.clearButton} onClick={() => clearNum()}>
            clear result
          </button>
          <div>&nbsp;</div>
          <button type="button" className={styles.clearButton} onClick={() => equal()}>
            =
          </button>
        </div>
      </div>
    );
  }
}
