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
import Reviews from 'ui-elements/Reviews';
import Button from 'ui-elements/Button';
import ReadMore from 'ui-parts/ReadMore';
// REPO-SCSS









const Business = ({data, data_reviews}) => {









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









  const upto_88888 = css`

    width: 1366px;
    min-width: 320px;
    margin: 0 auto;
    //background-color: #a0ffff;

    h1 {
      font-size: 40px;
      
    }

    #h1-img-p {
      padding-top: 50px;
      text-align: center;
      .img-parent {
        margin: 0 auto;
        margin-top: 20px;
        border-radius: 80px;
        width: 160px;
        height: 160px;
        overflow: hidden;
        margin-bottom: 20px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0px 0px;
      }
    }

    .rating-number {
      padding-left: 5px;
      padding-right: 5px;
      background: #ffd900;
    }

    #h1-img-p p,
    .reviews {
      font-size: 20px;
      text-align: center;
    }

    .reviews {
      margin-top: 40px;
    }

    #api-and-fake-reviews {
      margin-top: 20px;
      margin-left: 20px;
      margin-right: 20px;
      display: grid;
      grid-template-columns: 
        ${size(math(`(1366 - 80) / 3`), 'fix')}px 
        ${size(math(`(1366 - 80) / 3`), 'fix')}px 
        ${size(math(`(1366 - 80) / 3`), 'fix')}px 
      ;
      grid-column-gap: ${size(20, 'fix')}px;
      margin-bottom: 50px;
    }

    .api-review,
    .fake-review {
      border: 0px;
      border-radius: ${size(20, 'fix')}px;
      box-shadow: inset 0px 0px 0px 1px ${rgb.gray8}; 
      padding: ${size(20, 'fix')}px;
      padding-top: 0px;
    }

    .review-txt-parent {
      position: relative;
      height: 80px;
    }

    .review-txt {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      font-size: 12px;
      font-weight: 300;
      font-style: italic;
    }

    .review-data {
      .img-parent {
        margin: 0 auto;
        border-radius: 80px;
        width: 80px;
        height: 80px;
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0px 0px;
      }
      p {
        font-size: 12px;
        font-weight: 300;
        font-weight: 400;
        text-align: center;
      }
      p:nth-child(2) {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

    #phone-address {
      p {
        font-size: 20px;
        text-align: center;
      }
      p:nth-child(2) {
        margin-top: 5px;
      }
    }

    iframe {
      margin-top: 20px;
      width: ${size(1366, 'fix')}px;
      height: ${size(state.height * 1, 'fix')}px;
    }

    .go-back {
      margin-right: ${size(100, 'fix')}px;
    }

    #buttons {
      padding-top: 100px;
      text-align: center;
      padding-bottom: 100px;
    }

    #read-more {
      padding-bottom: 50px;
    }

  `;









  const upto_900_buttons = css`

    #buttons {
      padding-top: ${size(100, 'cal', 900)}px;
      padding-bottom: ${size(100, 'cal', 900)}px;
    }

    .button-tag {
      width: ${size(700, 'cal', 900)}px;
    }
  
    .go-back {
      margin-right: 0px;
      margin-bottom: 24px;
    }
  
  `;









  const upto_1366 = css`

    width: ${math(`${state.width} * 1`)}px;

    #api-and-fake-reviews {
      margin-top: 20px;
      margin-left: ${size(20, 'cal', 1366)}px;
      margin-right: ${size(20, 'cal', 1366)}px;
      display: grid;
      grid-template-columns: 
        ${size(math(`(1366 - 80) / 3`), 'cal', 1366)}px 
        ${size(math(`(1366 - 80) / 3`), 'cal', 1366)}px 
        ${size(math(`(1366 - 80) / 3`), 'cal', 1366)}px 
      ;
      grid-column-gap: ${size(20, 'cal', 1366)}px;
      margin-bottom: 50px;
    }

    .api-review,
    .fake-review {
      padding: ${size(20, 'cal', 1366)}px;
      padding-top: 0px;
    }

    iframe {
      width: ${size(1366, 'cal', 1366)}px;
    }

  `;









  const upto_768 = css`
  
    #api-and-fake-reviews {
      display: block;
    }

    .api-review-upto768,
    .fake-review-upto768 {
      border: 0px;
      border-radius: ${size(20, 'fix')}px;
      box-shadow: inset 0px 0px 0px 1px ${rgb.gray8};
      padding: ${size(20, 'cal', 768)}px;
      margin-bottom: 11.25px;
      display: grid;
      grid-template-columns: 80px auto;
      grid-column-gap: ${size(20, 'cal', 768)}px;
      .img-parent {
        margin: 0 auto;
        border-radius: 80px;
        width: 80px;
        height: 80px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 0px 0px;
        }
      }
    }

    .review-data-upto768 {
      display: grid;
      grid-template-rows: auto auto;
      //grid-template-rows: 75% 25%;
      grid-template-rows: 70px 10px;
      .review-txt-parent {
        height: 70px;
      }
      .by-rating-published {
        height: 10px;
      }
    }

    .review-txt {
      font-size: ${size(14, 'fix')}px;
      line-height: ${size(14 * 1.2, 'fix')}px;
      text-align: left;
    }

    .by-rating-published {
      p {
        display: inline;
        padding-right: ${size(20, 'cal', 768)}px
      }
      p:nth-child(3) {
        padding-right: 0px;
      }
    }
  
  `;









  const upto_568 = css`

    .ratings {
      line-height: 50px;
    }

    .review-txt {
      font-size: ${size(14, 'cal', 568)}px;
      line-height: ${size(14 * 1.2, 'cal', 568)}px;
      text-align: left;
    }

  `;









  const upto_487 = css`

    #api-and-fake-reviews {
      div:nth-child(3) {
        margin-bottom: 0px;
      }
      p {
        font-size: ${size(12, 'fix')}px;
      }
      p:nth-child(1),
      p:nth-child(4) {
        line-height: ${size(12 * 1.1, 'fix')}px;
      }
    }

    .api-review,
    .fake-review {
      padding: ${size(20, 'cal', 487)}px;
      padding-top: 0px;
      margin-bottom: 7px;
    }
  
    .review-txt {
      text-align: center;
    }
  
  `;









  const upto_320 = css`

    #api-and-fake-reviews {
      margin-left: 4.68521px;
      margin-right: 4.68521px;
    }
  
    .api-review,
    .fake-review {
      width: 284.333px;
      padding: 13.1417px;
      padding-top: 0px;
    }

    iframe {
      width: 320px;
    }
  
  `;









  const upto_926_landscape = css`

    #api-and-fake-reviews {
      margin-left: ${size(13.5578 * 4, 'cal', 926)}px;
      margin-right: ${size(13.5578 * 4, 'cal', 926)}px;
      grid-template-columns: 
        ${size(math(`(926 - (13.5578 * 10)) / 3`), 'cal', 926)}px 
        ${size(math(`(926 - (13.5578 * 10)) / 3`), 'cal', 926)}px 
        ${size(math(`(926 - (13.5578 * 10)) / 3`), 'cal', 926)}px 
      ;
      grid-column-gap: ${size(13.5578, 'cal', 926)}px;
    }

  `;









  const upto_568_landscape = css`
  
    #api-and-fake-reviews {
      margin-left: ${size(20, 'cal', 1366)}px;
      margin-right: ${size(20, 'cal', 1366)}px;
      grid-template-columns: 
        ${size(math(`(1366 - 80) / 3`), 'cal', 1366)}px 
        ${size(math(`(1366 - 80) / 3`), 'cal', 1366)}px 
        ${size(math(`(1366 - 80) / 3`), 'cal', 1366)}px 
      ;
      grid-column-gap: ${size(20, 'cal', 1366)}px;
    }

  `;









  // ====
  // HTML


  let all_specialties = 0;
  const specialties = data.categories.map(i => {
    all_specialties++;
    return (
      <span className="bold-700" key={uuidv4()}>
        {i.alias}{all_specialties < data.categories.length ? ', ' : '.'} 
      </span>
    )
  });


  let all_address_lines = 0;
  const full_address = data.location.display_address.map(i => {
    all_address_lines++;
    return (
      <span key={uuidv4()}>
        {i}{all_address_lines < data.location.display_address.length ? ', ' : '.'}
      </span>
    )
  });


  return (
    <div id="business-jsx" className={cx(
      upto_88888,
      {[upto_1366]: state.width <= 1366},
      {[upto_768]: state.width <= 768},
      {[upto_568]: state.width <= 568},
      {[upto_487]: state.width <= 487},
      {[upto_320]: state.width <= 320},
      {[upto_926_landscape]: state.width <= 926 && ratio >= 1.6},
      {[upto_568_landscape]: state.width <= 568 && ratio >= 1.6},
      {[upto_900_buttons]: state.width <= 900},
    )}>

      <div id="h1-img-p">
        <h1>{data.name}</h1>
        <div className="img-parent">
          {
            data.image_url === '' &&
            <img src="restaurant.jpg" alt="" />
          }
          <img src={data.image_url} alt="" />
        </div>
        <p>
          <span className="uppercase specialties">
            specialties
          </span>: {state.width <= 568 && <br />} {specialties}{` `}
          {state.width <= 568 && <br />}
          <span className="uppercase ratings">ratings</span>:{` `}
          <span className="bold-700 rating-number">{data.rating.toFixed(1)}</span>/5
        </p>
      </div>
      
      <p className="uppercase reviews">reviews:</p>
      <Reviews data_reviews={data_reviews}/>

      <div id="phone-address">
        <p>
          <span className="uppercase">phone</span>:{` `}
          {state.width <= 568 && <br />}  
          {data.display_phone}
        </p>
        <p>
          <span className="uppercase">address</span>:{` `}
          {state.width <= 568 && <br />}
          {full_address}
        </p>
      </div>

      <iframe 
        src={`https://maps.google.com/maps?&q=${data.alias}&z=14&output=embed`}
      >
      </iframe>

      <div id="buttons">
        <Button
          buttonTxt="back to search results"
          buttonClassNames="go-back"
          onClickEvent={goback}
        />
  
        <Button
          buttonTxt="begin new search"
          buttonClassNames="go-forward"
          onClickEvent={redirecting}
        />
      </div>

      <ReadMore/>

    </div>
  );
}

export default Business;