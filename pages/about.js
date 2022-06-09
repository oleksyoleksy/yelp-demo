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
import About from 'pages-jsx/About';
// REPO-UI
// REPO-SCSS









const AboutPage = () => {









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
          DEMO | A few words about this project
        </title>
      </Head>
      <About/>
    </>
  );
}

export default AboutPage;