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
import Info from 'jsx/_info';
// REPO-UI
// REPO-SCSS









const Template = ({children}) => {









  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);









  // portrait/landscape ratio
  const ratio = (state.width / state.height).toFixed(3);









  useEffect(() => {

    // after browser is reloaded:
    state.width = document.documentElement.clientWidth;
    state.height = window.innerHeight;
    state.static_height = window.innerHeight; // static
    state.screen_height = window.outerHeight; // static

    // after browser is resized:
    const resizeWatcher = () => {
      state.width = document.documentElement.clientWidth;
      state.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeWatcher);

	}, []);









  const upto_88888 = css`

    width: ${math(`${state.width} * 1`)}px;

    #err404-jsx,
    #err500-jsx,
    #error-jsx {

      width: 1366px;
      min-width: 320px;
      margin: 0 auto;
      height: ${math(`${state.height} * 1`)}px;

      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 100%;
      
      #in-grid {
        align-self: center;
      }

      #info-txt {
        text-align: center;
        h1 {
          font-size: ${size(120, 'fix')}px;
          line-height: ${size(120 * 1.2, 'fix')}px;
        }
        h2 {
          font-size: ${size(50, 'fix')}px;
          line-height: ${size(50 * 1.2, 'fix')}px;
          margin-bottom: ${size(17, 'fix')}px;
        }
        p {
          font-size: ${size(34, 'fix')}px;
          line-height: ${size(34 * 1.2, 'fix')}px;
        }
      }

      .go-back {
        margin-right: ${size(100, 'fix')}px;
      }
      #buttons {
        padding-top: 42px;
        text-align: center;
        padding-bottom: 30px;
      }
    }

  `;









  const upto_1366 = css`
  
    #err404-jsx,
    #err500-jsx,
    #error-jsx {
      width: ${math(`${state.width} * 1`)}px;

      #info-txt {
        h2 {
          font-size: ${size(50, 'cal', 1366)}px;
          line-height: ${size(50 * 1.2, 'cal', 1366)}px;
          margin-bottom: ${size(17, 'cal', 1366)}px;
        }
        p {
          font-size: ${size(34, 'cal', 1366)}px;
          line-height: ${size(34 * 1.2, 'cal', 1366)}px;
        }
      }
    }
  
  `;









  const upto_900 = css`
  
    #err404-jsx,
    #err500-jsx,
    #error-jsx {
      #info-txt {
        h2 {
          font-size: ${size(32.9429, 'fix')}px;
          line-height: ${size(32.9429 * 1.2, 'fix')}px;
          margin-bottom: ${size(11.2006, 'fix')}px;
        }
        p {
          font-size: ${size(22.4012, 'fix')}px;
          line-height: ${size(22.4012 * 1.2, 'fix')}px;
        }
      }

      .button-tag {
        width: ${size(700, 'cal', 900)}px;
      }
      .go-back {
        margin-right: 0px;
        margin-bottom: 24px;
      }
    }
  
  `;









  const upto_428 = css`
  
    #err404-jsx,
    #err500-jsx,
    #error-jsx {
      #info-txt {
        h1 {
          font-size: ${size(120, 'cal', 428)}px;
          line-height: ${size(120 * 1.2, 'cal', 428)}px;
        }
        h2 {
          font-size: ${size(32.9429, 'cal', 428)}px;
          line-height: ${size(32.9429 * 1.2, 'cal', 428)}px;
          margin-bottom: ${size(11.2006, 'cal', 428)}px;
        }
        p {
          font-size: ${size(22.4012, 'cal', 428)}px;
          line-height: ${size(22.4012 * 1.2, 'cal', 428)}px;
        }
      }
    }

`;









  const upto_320 = css`
  
    #err404-jsx,
    #err500-jsx,
    #error-jsx {
      #info-txt {
        h1 {
          font-size: ${size(89.7196, 'fix')}px;
          line-height: ${size(89.7196 * 1.2, 'fix')}px;
        }
        h2 {
          font-size: ${size(24.6302, 'fix')}px;
          line-height: ${size(24.6302 * 1.2, 'fix')}px;
          margin-bottom: ${size(8.37428, 'fix')}px;
        }
        p {
          font-size: ${size(16.7486, 'fix')}px;
          line-height: ${size(16.7486 * 1.2, 'fix')}px;
        }
      }
    }

`;









  const upto_926_landscape = css`

    height: auto;

    #err404-jsx,
    #err500-jsx,
    #error-jsx {
      height: auto;
    }
  

  `;









  const upto_568_landscape = css``;









  const gb = css`
  
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -100;
    width: ${state.width}px;
    height: ${state.height}px;
    background: linear-gradient(
      to bottom right, 
      rgb(203, 203, 203),
      rgb(223, 223, 223), 
      rgb(239, 239, 239), 
      rgb(239, 239, 239), 
      rgb(239, 239, 239), 
      rgb(239, 239, 239), 
      rgb(223, 223, 223),
      rgb(203, 203, 203)
    );

  `;









  return (
    <div lang="pl" id="template-jsx">

      {/* <Info/> */}

      <main className={cx(
        upto_88888,
        {[upto_1366]: state.width <= 1366},
        {[upto_900]: state.width <= 900},
        {[upto_428]: state.width <= 428},
        {[upto_320]: state.width <= 320},
        {[upto_926_landscape]: state.width <= 926 && ratio >= 1.6},
        {[upto_568_landscape]: state.width <= 568 && ratio >= 1.6},
      )}>
        {children}
      </main>

      <div className={cx(gb)}></div>

    </div>
  );
}

export default Template;
