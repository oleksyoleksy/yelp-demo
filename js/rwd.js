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
import {state} from 'js/state.js';
import {rgb} from 'jsx/colors';
// REPO-JSX
// REPO-UI
// REPO-SCSS









const size = (px, scale, upto) => {

  let fontsize;

  if (scale === 'fix') {
    fontsize = math(`${px}`);
  }

  if (scale === 'cal') {
    fontsize = math(
      `${px} * ${state.width} / ${upto}`
    );
  }

  return fontsize
};









export {
  size
}
