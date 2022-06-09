// NEXT
// REACT
// YARN
import {proxy} from 'valtio';
// REPO-JS
// REPO-JSX
// REPO-UI
// REPO-SCSS

// writing state
const state = proxy({

  width: 0,
  // without FFox y-scrollbar (15px in all major browsers)

  height: 0,
  // without iPhone/iPad ui-elements 
  // on iPhone SE: 
  // 70px on top, 44px at bottom in horizontal position
  // 50px on top, 44px at bottom in landscape position

  static_height: 0,
  // same as `height` but static

  screen_height: 0,
  // 100vh, static

  how_many_restaurants: 0,
  how_many_rows: 0,
  // refers to fetching data from API
  // need to know how many iterations have been done

  entering: {
    food: '',
    town: ''
  },
  submitting: {
    food: '',
    town: ''
  },
  // entering/submitting pizza/Berlin

  endpoints: {
    search: {
      req: 'https://api.yelp.com/v3/businesses/search',
      qty: 20,
    },
    // https://www.yelp.com/developers/documentation/v3/business_search
  },

  grid_idName: '',
  // determining if the number of food/town iterations is even or odd
  // and applying proper id's name to <div> with `display: grid;`

  //how_many_reviews: 0,
  // counting iterations when fetching reviews

  timestamp: {
    review_1: '',
    review_2: '',
    review_3: '',
  },
  // timestapms for „lorem-ipsum” fake-reviews at `ui-elements/Reviews.jsx`

  validationTxt_food: 'validation message placeholder food',
  validationTxt_town: 'validation message placeholder town',
  validationStatus_food: 'default', // 'dev' 'default' 'positive' 'negative'
  validationStatus_town: 'default', // 'dev' 'default' 'positive' 'negative'
  // validation messages

});

export {state};
