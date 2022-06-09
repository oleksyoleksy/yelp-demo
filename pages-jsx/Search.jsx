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
import {rgb, keywords} from 'jsx/colors';
// REPO-JSX
// REPO-UI
import Button from 'ui-elements/Button';
import ReadMore from 'ui-parts/ReadMore';
// REPO-SCSS









const Search = ({data, qs}) => {









  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);

  const router = useRouter();

  // portrait/landscape ratio
  const ratio = (state.width / state.height).toFixed(3);









  const redirecting = () => {
    state.submitting.town = '';
    state.submitting.food = '';
    router.push(`/`);
  };









  const upto_88888 = css`

    width: 1366px;
    min-width: 320px;
    margin: 0 auto;
    //background-color: #b2ffaf;

    h1, h2, .yelp-api-disclaimer {
      width: ${size(math(`1366 - 20 - 20`), 'fix')}px;
      min-width: 320px;
      margin: 0 auto;
      text-align: center;
      font-weight: 400;
      //padding-bottom: 20px;
      //background-color: #eeffaf;
    }

    h1 {
      padding-top: 40px;
      font-size: ${size(40, 'fix')}px;
      line-height: ${size(40 * 1.2, 'fix')}px;
      padding-bottom: 20px;
    }

    h2 {
      font-size: ${size(30, 'fix')}px;
      line-height: ${size(20 * 1.2, 'fix')}px;
      padding-bottom: 10px;
    }

    .yelp-api-disclaimer {
      font-size: ${size(16, 'fix')}px;
      line-height: ${size(16 * 1.2, 'fix')}px;
      padding-bottom: 40px;
    }

    #search-results-grid-${state.grid_idName} {
      width: ${size(math(`1366 - 20 - 20`), 'fix')}px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 
        ${size(math(`(1366 - 20 - 20 - 20) / 2`), 'fix')}px 
        ${size(math(`(1366 - 20 - 20 - 20) / 2`), 'fix')}px
      ;
      grid-column-gap: ${size(20, 'fix')}px;
      grid-template-rows: repeat(${`${state.how_many_rows}`}, auto);
      grid-row-gap: ${size(20, 'fix')}px;
      //background-color: #9cf4fe;
    }

    #search-results-grid-${state.grid_idName} {
      .a-single-record {
        width: ${size(
          math(
            `(1366 - 20 - 20 - 20) / 2`
          ), 
          'fix'
        )}px;
      }
    }

    #search-results-grid-odd {
      .iter-${state.how_many_restaurants} {
        grid-column-end: span 2;
        justify-self: center;
      }
    }

    .a-single-record {
      //transition: all 0.3s ease-in-out;
      border: 0px;
      border-radius: ${size(20, 'fix')}px;
      box-shadow: inset 0px 0px 0px 1px ${rgb.gray8};
    }

    /* .a-single-record:hover {
      //transform: scale(1.05);
      background-color: white;
    } */

    .a-single-record {
      a {
        padding: ${size(20, 'fix')}px;
        display: grid;
        grid-template-columns: 
          ${size(160, 'fix')}px 
          auto
        ;
        grid-column-gap: ${size(20, 'fix')}px;
      }
    }

    .a-single-record {
      a {
        .img-parent {
          border-radius: ${size(12, 'fix')}px;
          width: ${size(160, 'fix')}px;
          height: ${size(160, 'fix')}px;
          overflow: hidden;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 0px 0px;
        }
      }
    }

    .h3-p-parent {
      h3 {
        font-size: 22px;
        margin-bottom: 11px;
      }
      p {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 11px;
        .specialties,
        .ratings {
          font-size: 18px;
          font-weight: 400;
        }
      }
    }

    .button-tag {
      margin-top: 100px;
      margin-left: ${math(`(1366 - 300) / 2`)}px;
      margin-bottom: 100px;
    }

    #read-more {
      padding-bottom: 50px;
    }

  `;

  const upto_88888_mobile = css`
    .a-single-record:active {
      background-color: white;
    }
  `;

  const upto_88888_desktop = css`

    .a-single-record {
      // https://css-tricks.com/different-transitions-for-hover-on-hover-off/
      transition: transform 0.25s;
      transition-timing-function: ease-out;
    }
  
    .a-single-record:hover {
      transform: scale(1.04);
      transition: transform 0.333s;
      transition-timing-function: ease-in;
    }
    .a-single-record:active {
      //transform: scale(1.05);
      background-color: white;
    }
  
  `;









  const upto_1366 = css`

    width: ${math(`${state.width} * 1`)}px;
    //background-color: #ff000023;

    h1, h2, .yelp-api-disclaimer {
      width: ${size(math(`1366 - 20 - 20`), 'cal', 1366)}px;
    }

    #search-results-grid-${state.grid_idName} {
      width: ${size(math(`1366 - 20 - 20`), 'cal', 1366)}px;
      grid-template-columns: 
        ${size(math(`(1366 - 20 - 20 - 20) / 2`), 'cal', 1366)}px 
        ${size(math(`(1366 - 20 - 20 - 20) / 2`), 'cal', 1366)}px
      ;
      grid-column-gap: ${size(20, 'cal', 1366)}px;
      grid-row-gap: ${size(20, 'cal', 1366)}px;
    }

    #search-results-grid-${state.grid_idName} {
      .a-single-record {
        width: ${size(
          math(
            `(1366 - 20 - 20 - 20) / 2`
          ), 
          'cal',
          1366
        )}px;
      }
    }

    .a-single-record {
      a {
        padding: ${size(20, 'cal', 1366)}px;
        grid-column-gap: ${size(20, 'cal', 1366)}px;
      }
    }

    .button-tag {
      margin-left: ${math(`(${state.width} - 300) / 2`)}px;
    }

  `;









  const upto_768 = css`

    h1 {
      font-size: ${size(40, 'cal', 768)}px;
      line-height: ${size(40 * 1.2, 'cal', 768)}px;
    }

    h2 {
      font-size: ${size(30, 'cal', 768)}px;
      line-height: ${size(20 * 1.2, 'cal', 768)}px;
    }

    .yelp-api-disclaimer {
      font-size: ${size(16, 'cal', 768)}px;
      line-height: ${size(16 * 1.2, 'cal', 768)}px;
    }

    #search-results-grid-${state.grid_idName} {
      margin-left: ${size(11.2445, 'fix')}px;
      margin-right: ${size(11.2445, 'fix')}px;

      grid-template-columns: 
        ${size(
          math(`${state.width} - (2 * 11.2445)`), 
          'fix'
        )}px; 
      ;

      grid-column-gap: 0px;
      grid-row-gap: ${size(11.2445, 'fix')}px;
    }

    #search-results-grid-${state.grid_idName} {
      .a-single-record {
        width: ${size(
          math(`${state.width} - (2 * 11.2445)`), 
          'fix'
        )}px;
      }
    }

    #search-results-grid-odd {
      .iter-${state.how_many_restaurants} {
        grid-column-end: span 1;
      }
    }

    .a-single-record {
      a {
        padding: ${size(11.2445, 'fix')}px;
        grid-column-gap: ${size(11.2445, 'fix')}px;
      }
    }

  `;

  const upto_768_desktop = css`
  
    .a-single-record {
      // https://css-tricks.com/different-transitions-for-hover-on-hover-off/
      transition-duration: 0.5s;
    }

    .a-single-record:hover {
      background-color: #ffffff45;
      transition-duration: 0.5s;
    }

    .a-single-record:active {
      background-color: white;
    }
  
  `;









  const upto_576 = css`
  
    h1 {
      font-size: ${size(30, 'fix')}px;
      line-height: ${size(30 * 1.2, 'fix')}px;
    }

    h2 {
      font-size: ${size(22.5, 'fix')}px;
      line-height: ${size(18, 'fix')}px;
    }

    .yelp-api-disclaimer {
      font-size: ${size(12, 'fix')}px;
      line-height: ${size(12 * 1.2, 'fix')}px;
    }
    
  `;









  const upto_428 = css`

    h1 {
      font-size: ${size(30, 'cal', 428)}px;
      line-height: ${size(30 * 1.2, 'cal', 428)}px;
    }

    h2 {
      font-size: ${size(22.5, 'cal', 428)}px;
      line-height: ${size(18, 'cal', 428)}px;
    }

    .a-single-record {
      a {
        grid-template-columns: 
          ${size(160, 'cal', 428)}px
          auto
        ;
      }
    }

    .a-single-record {
      a {
        .img-parent {
          width: ${size(160, 'cal', 428)}px;
          height: ${size(160, 'cal', 428)}px;
        }
      }
    }

    .h3-p-parent {
      h3 {
        font-size: ${size(22, 'cal', 428)}px;
        margin-bottom: ${size(11, 'cal', 428)}px;
      }
      p {
        font-size: ${size(16, 'cal', 428)}px;
        margin-bottom: ${size(11, 'cal', 428)}px;
        .specialties,
        .ratings {
          font-size: ${size(18, 'cal', 428)}px;
        }
      }
    }

  `;









  const upto_320 = css`

    h1 {
      font-size: ${size(22.4299, 'fix')}px;
      line-height: ${size(26.9167, 'fix')}px;
    }

    h2 {
      font-size: ${size(16.8224, 'fix')}px;
      line-height: ${size(13.45, 'fix')}px;
    }
  
    #search-results-grid-even,
    #search-results-grid-odd {
      min-width: 310.633px;
    }

    #search-results-grid-odd {
      .iter-${state.how_many_restaurants} {
        justify-self: left;
      }
    }

    .a-single-record {
      a {
        grid-template-columns: 
          119.633px
          144.133px
        ;
      }
    }

    .a-single-record {
      min-width: 297.517px;
      min-height: 142.133px;
      a {
        min-width: 275.017px;
        .img-parent {
          min-width: 119.633px;
          min-height: 119.633px;
        }
      }
    }
    
    .h3-p-parent {
      h3 {
        font-size: 16.4486px;
        margin-bottom: 8.2243px;
      }
      p {
        font-size: 11.9626px;
        margin-bottom: 8.2243px;
        .specialties,
        .ratings {
          font-size: 13.4579px;
        }
      }
    }

  `;









  const upto_926_landscape = css`

    h1, h2, .yelp-api-disclaimer {
      width: ${math(`${state.width} - (2 * 60)`)}px;
    }
  
    //background-color: #ffff9f;
    width: ${math(`${state.width} - (2 * 60)`)}px;

    #search-results-grid-${state.grid_idName} {
      width: ${math(`${state.width} - (2 * 60)`)}px;
      grid-template-columns: 
        ${size(
          math(`${state.width} - (2 * 60)`), 
          'fix'
        )}px; 
      ;
    }

    #search-results-grid-${state.grid_idName} {
      .a-single-record {
        width: ${size(
          math(`${state.width} - (2 * 60)`), 
          'fix'
        )}px;
      }
    }

    #search-results-grid-odd {
      .iter-${state.how_many_restaurants} {
        grid-column-end: span 1;
      }
    }
  
  `;










  const upto_568_landscape = css`
  
    //background-color: #ffaa609f;
    width: ${math(`${state.width} * 1`)}px;

    #search-results-grid-${state.grid_idName} {
      width: ${math(`${state.width} * 1`)}px;
      grid-template-columns: 
        ${size(
          math(`${state.width} - 20`), 
          'fix'
        )}px; 
      ;
    }

    #search-results-grid-${state.grid_idName} {
      .a-single-record {
        width: ${size(
          math(`${state.width} - 20`), 
          'fix'
        )}px;
      }
    }

    #search-results-grid-odd {
      .iter-${state.how_many_restaurants} {
        grid-column-end: span 1;
      }
    }

  `;









  let how_many_iterations = 0;

  const fetching = data.map(i => {
    how_many_iterations++;
    return(
      <div key={uuidv4()} className={`a-single-record iter-${how_many_iterations}`}>
        <Link href={`/${i.alias}`}>
          <a>

            <div className="img-parent">
              {
                i.image_url === '' &&
                <img src="restaurant.jpg" alt="" />
              }
              <img src={i.image_url} alt="" />
            </div>

            <div className="h3-p-parent">

              <h3>{i.name}</h3>

              <p>
                <span className="uppercase specialties">
                  specialties:
                </span>
                <br/>
                {i.categories.map((ii, idx) => (
                  <span key={uuidv4()}>
                    {ii.alias}{idx < i.categories.length - 1 ? ', ' : '.'}
                  </span>
                ))}
              </p>

              <p>
                <span className="uppercase ratings">
                  ratings:
                </span>
                <br/> 
                {i.rating.toFixed(1)}/5&nbsp;&#40;
                {i.review_count}&nbsp;
                {i.review_count === 1 ? 'review' : 'reviews'}&#41;
              </p>

            </div>

          </a>
        </Link>
      </div>
    )
  });

  // assigning number of iterations into valtio's proxy-state
  // for injecting it in CSS:
  // #search-results-grid-odd { .iter-${state.how_many_restaurants} {...
  state.how_many_restaurants = how_many_iterations;









  // determining if the number of iterations even or odd
  // and applying proper id's name to <div> with `display: grid;`
  // #search-results-grid-${state.grid_idName} {...
  let grid_idName;

  if (how_many_iterations % 2 === 0) {
    //console.log(`${how_many_iterations} (even)`);
    grid_idName = 'even';
  } else {
    //console.log(`${how_many_iterations} (odd)`);
    grid_idName = 'odd';
  }

  // const upto_88888 = css`#search-results-grid-${grid_idName} {...
  // ReferenceError: Cannot access 'grid_idName' before initialization
  // so I need to assign it to valtio's proxy-state:
  // const upto_88888 = css`#search-results-grid-${state.grid_idName} {...
  state.grid_idName = grid_idName;









  // calculating number of rows I need to specify in CSS
  let how_many_rows;
  if (state.how_many_restaurants % 2 !== 0) {
    how_many_rows = Math.ceil(state.how_many_restaurants / 2);
  } else {
    how_many_rows = Math.floor(state.how_many_restaurants / 2);
  }
  state.how_many_rows = how_many_rows;









  return (
    <div id="search-jsx" className={cx(
      upto_88888,
      {[upto_88888_mobile]: isMobile === true},
      {[upto_88888_desktop]: state.width > 768 && isMobile == false},
      {[upto_1366]: state.width <= 1366},
      {[upto_768]: state.width <= 768},
      {[upto_768_desktop]: state.width <= 768 && isMobile == false},
      {[upto_576]: state.width <= 576},
      {[upto_428]: state.width <= 428},
      {[upto_320]: state.width <= 320},
      {[upto_926_landscape]: state.width <= 926 && ratio >= 1.6},
      {[upto_568_landscape]: state.width <= 568 && ratio >= 1.6},
    )}>

      <div id="h1-h2-parent">

        <h1>
          You are looking for <br />
          <span className="bold-700">{qs.term}</span>
          &nbsp;in&nbsp;
          <span className="bold-700">{qs.location}</span>
        </h1>

        <h2>
          <span className="bold-700">
            {how_many_iterations}&nbsp; 
          </span> 
          {how_many_iterations === 1 ? `location has` : `locations have`} been found 
        </h2>

        <p className="yelp-api-disclaimer">
          This request is limited <span className="bold-700">up to {qs.limit}</span> {how_many_iterations === 1 ? `record` : `records`}, {state.width <= 768 && <span className="br"></span>}Yelp's API limitation is <span className="bold-700">up to 50</span> records.
        </p>

      </div>

      <div id={`search-results-grid-${state.grid_idName}`}>
        {fetching}
      </div>

      <Button
        buttonTxt="begin new search"
        buttonClassNames="go-forward"
        //buttonClassNames="go-back"
        onClickEvent={redirecting}
      />

      <ReadMore/>

    </div>
  );
}

export default Search;