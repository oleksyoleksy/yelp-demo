// NEXT
import Head from 'next/head';
// REACT
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'js/state.js';
// REPO-JSX
import FaviconTags from 'pages-jsx/FaviconTags';
import MetaTag from 'pages-jsx/MetaTag';
import Err404 from 'pages-jsx/Err404';
// REPO-UI
// REPO-SCSS


const Err404Page = () => {









  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);









  return (
    <>
      <MetaTag/>
      <FaviconTags/>
      <Head>
        <title>
          {/* {state.width} x {state.height}{` | `} 
          ratio: {(state.width/state.height).toFixed(3)} */}
          404 error, page not found
        </title>
      </Head>
      <Err404/>
    </>
  );
}

export default Err404Page;