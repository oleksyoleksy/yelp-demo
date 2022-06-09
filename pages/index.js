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
import Index from 'pages-jsx/Index';
// REPO-UI
// REPO-SCSS









const IndexPage = () => {









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
          DEMO | fetching data from Yelp API in Next.js
        </title>
      </Head>
      <Index/>
    </>
  );
}

export default IndexPage;
