// NEXT
import Link from 'next/link';
import {useRouter} from 'next/router';
// REACT
import {useEffect} from 'react';
// YARN
import {cx, css} from '@emotion/css';
import {math} from 'polished';
import {isMobile} from 'react-device-detect';
import { v4 as uuidv4 } from 'uuid';
import {useSnapshot} from 'valtio';
// REPO-JS
import {size} from 'js/rwd.js';
import {state} from 'js/state.js';
import {rgb} from 'jsx/colors';
// REPO-JSX
// REPO-UI
// REPO-SCSS









const Input = (props) => {









  const upto_88888 = css`

    input {
      width: 300px;
      min-width: 300px;
      height: 50px;
      min-height: 50px;
      margin: 0px 0px 0px 0px;
      padding: 0px 0px 0px 0px;

      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      color: ${rgb.gray1};
      ::placeholder {
        color: ${rgb.gray5};
      }

      border-radius: 50px;
      border: 0px;
      box-shadow: inset 0px 0px 0px 1px ${rgb.gray8};
      appearance: none; // inside dropshadow on iPhone is off
      -moz-appearance: none;
      -webkit-appearance: none;
      :focus {
        outline: none; // no browser's default bluish outline
        box-shadow: inset 0px 0px 0px 1px ${rgb.gray5};
      }

      background-color: rgba(0, 0, 0, 0);
    }

    p {
      margin-top: 2px;
      width: 300px;
      min-width: 300px;

      font-weight: 300;
      font-size: 12px;
      //color: ${rgb.gray5};
      text-align: center;

      margin-bottom: 10px;

      &.dev {
        color: rgba(80, 80, 80, 1);
      }

      &.default {
        color: rgba(80, 80, 80, 0);
        //transition-duration: 1s;
      }

      &.positive {
        color: green;
        //transition-duration: 1s;
      }

      &.negative {
        color: red;
        //transition-duration: 1s;
        animation-name: negative;
        animation-duration: 5.0s;
        @keyframes negative {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      }
    }

  `;









  return (
    <div id={props.parentDivId} className={cx(
      upto_88888,
      'input-field--and--validation-txt',
    )}>

      <input 
        id={props.inputId} 
        className={cx(
          `${props.inputClassNames}`,
          'input-tag',
        )}
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChangeEvent}
      />

      <p className={cx(
        'validation-txt',
        `${props.validationClassNames}`,
      )}>
        {props.validationTxt}
      </p>

    </div>
  );
}

export default Input;