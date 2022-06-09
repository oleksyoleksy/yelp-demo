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









const Err500 = () => {









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
    <div id="err500-jsx">
      <div id="in-grid">
        <div id="info-txt">
          <h1>500</h1>
          {
            state.width > 900 &&
            <>
              <h2>The server was unable to complete your request</h2>
              <p>You may have incorrectly changed URL or entered wrong data</p>
            </>
          }
          {
            state.width > 700 && state.width <= 900 &&
            <>
              <h2>The server was unable to complete <br/> your request</h2>
              <p>You may have incorrectly changed URL <br/> or entered wrong data</p>
            </>
          }
          {
            state.width <= 700 &&
            <>
              <h2>The server <br/> was unable to complete <br/> your request</h2>
              <p>You may have <br/> incorrectly changed URL <br/> or entered wrong data</p>
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

export default Err500;