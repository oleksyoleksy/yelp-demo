// NEXT
import Link from 'next/link';
import {useRouter} from 'next/router';
// REACT
import {useState, useEffect} from 'react';
// YARN
import {cx, css} from '@emotion/css';
import {math} from 'polished';
import {isMobile} from 'react-device-detect';
import { v4 as uuidv4 } from 'uuid';
import {useSnapshot} from 'valtio';
import moment from 'moment';
// REPO-JS
import {size} from 'js/rwd.js';
import {state} from 'js/state.js';
import {rgb} from 'jsx/colors';
// REPO-JSX
// REPO-UI
// REPO-SCSS









const Reviews = ({data_reviews}) => {









  useEffect(() => {
    let date_and_time_1 = moment().subtract(2, 'days').format('yyyy-MM-D HH:mm:ss');
    let date_and_time_2 = moment().subtract(5, 'minutes').format('yyyy-MM-D HH:mm:ss');
    let date_and_time_3 = moment().format('yyyy-MM-D HH:mm:ss');
    state.timestamp.review_1 = date_and_time_1;
    state.timestamp.review_2 = date_and_time_2;
    state.timestamp.review_3 = date_and_time_3;
	}, []);









  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);

  const router = useRouter();

  // portrait/landscape ratio
  const ratio = (state.width / state.height).toFixed(3);









  let reviews;
  let how_many_reviews = 0;
  
  if (state.width > 768 || state.width <= 487) {
    reviews = data_reviews && data_reviews.reviews.map(i => {
      how_many_reviews++;
      //console.log(i.user.image_url); // null
      return (
        how_many_reviews <= 3 && 
        <div 
          className="api-review"
          key={uuidv4()}
        >
          <div className="review-txt-parent">
            <p className="review-txt">{i.text}</p>
          </div>
          <div className="review-data">
            {
              i.user.image_url === null && 
              <div className="img-parent">
                <img /* style={{width: "50px"}} */ src="avatar.jpg" alt="" />
              </div>
            }
            {
              i.user.image_url !== null &&
              <div className="img-parent">
                <img /* style={{width: "50px"}} */ src={i.user.image_url} alt="" />
              </div>
            }
            <p>by <span className="bold-600">{i.user.name}</span></p>
            <p>rating: <span className="bold-600">{i.rating}</span></p>
            <p>published: <span className="bold-600">{i.time_created}</span></p>
          </div>
        </div>
      )
    });
  }
  
  if (state.width <= 768 && state.width > 487) {
    reviews = data_reviews && data_reviews.reviews.map(i => {
      how_many_reviews++;
      return (
        how_many_reviews <= 3 && 
        <div 
          className="api-review-upto768"
          key={uuidv4()}
        >
          {
            i.user.image_url === null && 
            <div className="img-parent">
              <img /* style={{width: "50px"}} */ src="avatar.jpg" alt="" />
            </div>
          }
          {
            i.user.image_url !== null &&
            <div className="img-parent">
              <img /* style={{width: "50px"}} */ src={i.user.image_url} alt="" />
            </div>
          }

          <div className="review-data-upto768">

            <div className="review-txt-parent">
              <p className="review-txt">{i.text}</p>
            </div>
            <div 
              className="by-rating-published"
              style={{fontSize: "12px"}}
            >
              <p>by <span className="bold-600">{i.user.name}</span></p>
              <p>rating: <span className="bold-600">{i.rating}</span></p>
              <p>published: <span className="bold-600">{i.time_created}</span></p>
            </div>
          </div>
        </div>
      )
    });
  }









  // fake-reviews - will use them conditionally, if there is lack of real ones in API
  const [fake_data] = useState([
    {
      text: "First lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tempora soluta fuga, animi illum vel voluptates dignissimos nam dolorum, cupiditate, iusto nulla...",
      rating: "1",
      user: {
        image_url: "avatar.jpg",
        name: "Aaron B.",
        //time_created: "1989-11-11 14:00:11"
      }
    },
    {
      text: "Second lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tempora soluta fuga, animi illum vel voluptates dignissimos nam dolorum, cupiditate, iusto nulla...",
      rating: "2",
      user: {
        image_url: "avatar.jpg",
        name: "Bob C.",
        //time_created: "1989-11-11 14:00:11"
      }
    },
    {
      text: "Third lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tempora soluta fuga, animi illum vel voluptates dignissimos nam dolorum, cupiditate, iusto nulla...",
      rating: "3",
      user: {
        image_url: "avatar.jpg",
        name: "Caleb D.",
        //time_created: "1989-11-11 14:00:11"
      }
    }
  ]);









  let fake_reviews;
  let how_many_fake_reviews = 0;

  if (state.width > 768 || state.width <= 487) {
    fake_reviews = fake_data.map(i => {
      how_many_fake_reviews++;
      return (
        how_many_fake_reviews > how_many_reviews && 
        <div 
          className="fake-review"
          key={uuidv4()}
        >
          <div className="review-txt-parent">
            <p className="review-txt">{i.text}</p>
          </div>
          <div className="review-data">
            {
              i.user.image_url === null && 
              <div className="img-parent">
                <img /* style={{width: "50px"}} */ src="avatar.jpg" alt="" />
              </div>
            }
            <div className="img-parent">
              <img /* style={{width: "50px"}} */ src={i.user.image_url} alt="" />
            </div>
            <p>by <span className="bold-600">{i.user.name}</span></p>
            <p>rating: <span className="bold-600">{i.rating}</span></p>
            {
              how_many_fake_reviews === 1 &&
              <p>published: <span className="bold-600">{state.timestamp.review_1}</span></p>
            }
            {
              how_many_fake_reviews === 2 &&
              <p>published: <span className="bold-600">{state.timestamp.review_2}</span></p>
            }
            {
              how_many_fake_reviews === 3 &&
              <p>published: <span className="bold-600">{state.timestamp.review_3}</span></p>
            }
          </div>
        </div>
      )
    });
  }

  if (state.width <= 768 && state.width > 487) {
    fake_reviews = fake_data.map(i => {
      how_many_fake_reviews++;
      return (
        how_many_fake_reviews > how_many_reviews && 
        <div 
          className="fake-review-upto768"
          key={uuidv4()}
        >
          {
            i.user.image_url === null && 
            <div className="img-parent">
              <img /* style={{width: "50px"}} */ src="avatar.jpg" alt="" />
            </div>
          }
          <div className="img-parent">
            <img /* style={{width: "50px"}} */ src={i.user.image_url} alt="" />
          </div>

          <div className="review-data-upto768">

            <div className="review-txt-parent">
              <p className="review-txt">{i.text}</p>
            </div>
            
            <div 
              className="by-rating-published"
              style={{fontSize: "12px"}}
            >
              <p>by <span className="bold-600">{i.user.name}</span></p>
  
              <p>rating: <span className="bold-600">{i.rating}</span></p>
              {
                how_many_fake_reviews === 1 &&
                <p>published: <span className="bold-600">{state.timestamp.review_1}</span></p>
              }
              {
                how_many_fake_reviews === 2 &&
                <p>published: <span className="bold-600">{state.timestamp.review_2}</span></p>
              }
              {
                how_many_fake_reviews === 3 &&
                <p>published: <span className="bold-600">{state.timestamp.review_3}</span></p>
              }
            </div>
          </div>
        </div>
      )
    });
  }









  return (
    <div id="api-and-fake-reviews">
      {how_many_reviews > 0 && reviews}
      {how_many_reviews < 3 && fake_reviews}
    </div>
  );
}

export default Reviews;