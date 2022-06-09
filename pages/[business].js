// NEXT
import {useRouter} from 'next/router';
import Head from 'next/head';
// REACT
import {useEffect} from 'react';
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'js/state.js';
// REPO-JSX
import FaviconTags from 'pages-jsx/FaviconTags';
import MetaTag from 'pages-jsx/MetaTag';
import Business from 'pages-jsx/Business';
// REPO-UI
// REPO-SCSS











export const getServerSideProps = async (context) => {

  //console.log(context.query); // { alias: 'mozzarella-und-pomodoro-berlin-2' }
  const business = context.query.business;
  //console.log(alias); // mozzarella-und-pomodoro-berlin-2

  const url = `https://api.yelp.com/v3/businesses/${business}`;
  const url_reviews = `https://api.yelp.com/v3/businesses/${business}/reviews`;

  const api_key = process.env.YELP_API_KEY;

  const fetching = await fetch(url, {
    headers: {
      Authorization: `Bearer ${api_key}`
    }
  });
  const fetching_reviews = await fetch(url_reviews, {
    headers: {
      Authorization: `Bearer ${api_key}`
    }
  });

  const fetched = await fetching.json();
  const fetched_reviews = await fetching_reviews.json();
  //console.log(fetched_reviews);

  return {
    props: {
      data: fetched,
      data_reviews: fetched_reviews,
    }
  }
};









const BusinessPage = ({data, data_reviews}) => {

  //console.log(data);
  //console.log(data_reviews);

  const router = useRouter();

  useEffect(() => {
    if (data.id === undefined) {
      router.back();
    }
	}, [data.id, router]);









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
          {`DEMO | ${data.name}`}
        </title>
      </Head>
      {
        data.id !== undefined && 
        <Business 
          data={data} 
          data_reviews={data_reviews}
        />
      }
      </>
  );
}

export default BusinessPage;