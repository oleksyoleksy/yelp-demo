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









const Footer = () => {









  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);









  const upto_88888 = css`

    height: ${math(`${state.height} * 0.25`)}px;
    min-height: 223px;
    background-color: ${rgb.gray3};

    h1, p {
      color: ${rgb.gray8};
    }

  `;









  return (
    <footer id="Footer-jsx" className={cx(
      upto_88888,
    )}>
        <h1>Footer</h1>
    </footer>
  );
}

export default Footer;
