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
import Button from 'ui-elements/Button';
// REPO-SCSS









const Err404 = () => {









  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);









  const router = useRouter();









  // portrait/landscape ratio
  const ratio = (state.width / state.height).toFixed(3);









  const goback = () => {
    router.back();
  };

  const redirecting = () => {
    state.submitting.town = '';
    state.submitting.food = '';
    router.push(`/`);
  };









  return (
    <div id="err404-jsx">
      <div id="in-grid">
        <div id="info-txt">
          <h1>404</h1>
          {
            state.width > 900 &&
            <>
              <h2>The page you were looking for doesn't exist</h2>
              <p>You may have mistyped the address or the page may have moved</p>
            </>
          }
          {
            state.width > 700 && state.width <= 900 &&
            <>
              <h2>The page you were looking for <br/> doesn't exist</h2>
              <p>You may have mistyped the address <br/> or the page may have moved</p>
            </>
          }
          {
            state.width <= 700 &&
            <>
              <h2>The page <br/> you were looking for <br/> doesn't exist</h2>
              <p>You may have <br/> mistyped the address <br/> or the page may have moved</p>
            </>
          }
        </div>
  
        <div id="buttons">
          <Button
            buttonTxt="go to previous page"
            buttonClassNames="go-back"
            onClickEvent={goback}
          />
    
          <Button
            buttonTxt="go to homepage"
            buttonClassNames="go-forward"
            onClickEvent={redirecting}
          />
        </div>
      </div>
    </div>
  );
}

export default Err404;