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









const ReadMore = () => {









  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);

  const router = useRouter();

  // portrait/landscape ratio
  const ratio = (state.width / state.height).toFixed(3);









  const upto_88888 = css`

    display: grid;
    justify-items: center;
    align-self: start;

    a {
      font-weight: 400;
      font-size: 18px;
      line-height: ${18 * 1.2}px;
      text-decoration: none;
      color: rgb(0, 128, 255);
      text-align: center;
      :hover {
        color: rgb(0, 64, 255);
      }
      width: 100%;
      //background-color: yellow;
    }
  
  `;









  const upto_926_landscape = css`

    padding-bottom: 50px;

  `;









  const upto_568_landscape = css`
  
    padding-bottom: 50px;
  
  `;









  return (
    <div id="read-more" className={cx(
      upto_88888,
      {[upto_926_landscape]: state.width <= 926 && ratio >= 1.6},
      {[upto_568_landscape]: state.width <= 568 && ratio >= 1.6},
    )}>
      <Link href="/about">
        <a>
          You can read more&nbsp; 
          {state.width <= 500 && <br/>}
          about this project&nbsp;here
        </a>
      </Link>
    </div>
  );
}

export default ReadMore;