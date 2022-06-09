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
import Err500 from 'pages-jsx/Err500';
// REPO-UI
// REPO-SCSS


const Err500Page = () => {









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
          500 Internal Server Error
        </title>
      </Head>
      <Err500/>
    </>
  );
}

export default Err500Page;