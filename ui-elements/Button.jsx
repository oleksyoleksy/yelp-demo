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









const Button = (props) => {









  const upto_88888 = css`

    width: 300px;
    min-width: 300px;
    height: 50px;
    min-height: 50px;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: rgb(225, 225, 225);

    border-radius: 50px;
    border: 0px;
    

    &.go-forward {
      box-shadow: inset 0px 0px 0px 1px rgb(3, 187, 43);
      background-color: rgb(3, 187, 43);
      :hover {
        box-shadow: inset 0px 0px 0px 1px rgb(3, 207, 43);
        background-color: rgb(3, 207, 43);
      }
      :active {
        box-shadow: inset 0px 0px 0px 1px rgb(3, 157, 43);
        background-color: rgb(3, 157, 43);
      }
    }
    &.go-back {
      box-shadow: inset 0px 0px 0px 1px rgb(215, 0, 0);
      background-color: rgb(215, 0, 0);
      :hover {
        box-shadow: inset 0px 0px 0px 1px rgb(255, 0, 0);
        background-color: rgb(255, 0, 0);
      }
      :active {
        box-shadow: inset 0px 0px 0px 1px rgb(185, 0, 0);
        background-color: rgb(185, 0, 0);
      }
    }

    :hover {
      cursor: pointer;
      color: rgb(255, 255, 255);
    }
    :active {
      color: rgb(225, 225, 225);
    }

  `;









  return (
    <button 
      className={cx(
        upto_88888,
        `${props.buttonClassNames}`,
        'button-tag',
      )}
      onClick={props.onClickEvent}
    >
      {props.buttonTxt}
    </button>
  );
}

export default Button;