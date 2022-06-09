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
import Search from 'pages-jsx/Search';
// REPO-UI
// REPO-SCSS









export const getServerSideProps = async (context) => {

  const qs = context.query;
  //console.log(qs); // { term: 'pizza', location: 'Berlin' }

  const url = `${
    state.endpoints.search.req
  }?term=${qs.term}&location=${qs.location}&limit=${qs.limit}`; 
  //console.log(url); // http://localhost:3000/search?term=pizza&location=Berlin

  const api_key = process.env.YELP_API_KEY;

  const fetching = await fetch(url, {
    headers: {
      Authorization: `Bearer ${api_key}`
    }
  });

  const fetched = await fetching.json();
  //console.log(fetched);

  return {
    props: {
      data: fetched.businesses,
      qs: qs, 
    }
  }
};









const SearchPage = ({data, qs}) => {

  //console.log(data);









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
          {`DEMO | You are looking for ${qs.term} in ${qs.location}`}
        </title>
      </Head>
      <Search data={data} qs={qs}/>
    </>
  );
}

export default SearchPage;