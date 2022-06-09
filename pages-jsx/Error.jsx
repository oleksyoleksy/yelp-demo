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









const Error = () => {









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
    <div id="error-jsx">
      <div id="in-grid">
        <div id="info-txt">
          <h1>Error</h1>
          {
            state.width > 900 &&
            <>
              <h2>One or move entered values are invalid</h2>
              <p>Please check your spelling or search for something else</p>
            </>
          }
          {
            state.width > 700 && state.width <= 900 &&
            <>
              <h2>One or move entered values <br/> are invalid</h2>
              <p>Please check your spelling <br/> or search for something else</p>
            </>
          }
          {
            state.width <= 700 &&
            <>
              <h2>One or move <br/> entered values <br/> are invalid</h2>
              <p>Please check your spelling <br/> or search for something else</p>
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

export default Error;