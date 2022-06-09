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
import Input from 'ui-elements/Input';
import Button from 'ui-elements/Button';
import ReadMore from 'ui-parts/ReadMore';
// REPO-SCSS









const Index = () => {


  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);


  const router = useRouter();


  // portrait/landscape ratio
  const ratio = (state.width / state.height).toFixed(3);


  useEffect(() => {
    state.submitting.food = '';
    state.submitting.town = '';
	}, []);









  const titleCaseFx = (arg) => {
    arg = arg.toLowerCase().split(' ');
    for (let i = 0; i < arg.length; i++) {
      arg[i] = arg[i].charAt(0).toUpperCase() + arg[i].slice(1); 
    }
    return arg.join(' ');
  };



  const entering_food = (e) => {
    state.entering.food = e.target.value;
    state.submitting.food = '';
  };

  const entering_town = (e) => {
    state.entering.town = e.target.value;
    state.submitting.town = '';
  };









  const food_regex = /^[a-zA-Zà-ž]{3,}$/g;
  const town_regex = /^\s*[a-zA-Zà-žÀ-Ž]{1}[a-zA-Zà-žÀ-Ž][a-zA-Zà-žÀ-Ž '-.=#/]*$/g;



  const submitting = () => {

    // 54a2--changed my mind scenario
    if (state.entering.food === '' && state.submitting.food !== '') {
      state.submitting.food = '';
    }
    if (state.entering.town === '' && state.submitting.town !== '') {
      state.submitting.town = '';
    }



    // LOGICS (check spelling) + MESSAGES (misspelled scenario)
    // food LOGIC: if syntax is correct, entered data is assigned to state.submitting
    if (food_regex.test(state.entering.food) === true) {
      state.submitting.food = state.entering.food.toLowerCase();
    } else {
      // food MESSAGE: misspelled scenario
      state.validationTxt_food = 'you probably misspelled the food';
      state.validationStatus_food = 'negative';
      setTimeout(() => {
        state.validationStatus_food = 'default';
      }, 5000);
    }
    // town LOGIC: if syntax is correct, entered data is assigned to state.submitting
    if (town_regex.test(state.entering.town) === true) {
      state.submitting.town = titleCaseFx(state.entering.town);
    } else {
      // town MESSAGE: misspelled scenario
      state.validationTxt_town = 'you probably misspelled the town';
      state.validationStatus_town = 'negative';
      setTimeout(() => {
        state.validationStatus_town = 'default';
      }, 5000);
    }



    // MESSAGES: did-not-specify scenario
    if (state.entering.food === '') {
      state.validationTxt_food = 'you didn\'t specify the food';
      state.validationStatus_food = 'negative';
      setTimeout(() => {
        state.validationStatus_food = 'default';
      }, 5000);
    }
    if (state.entering.town === '') {
      state.validationTxt_town = 'you didn\'t specify the town';
      state.validationStatus_town = 'negative';
      setTimeout(() => {
        state.validationStatus_town = 'default';
      }, 5000);
    }



    // LOGIC
    // if entered data is assigned, state.entering is emptied
    if (state.submitting.food !== '' && state.submitting.town !== '') {
      state.entering.food = '';
    }
    if (state.submitting.town !== '' && state.submitting.food !== '') {
      state.entering.town = '';
    }



    // REDIRECT
    // if input fields are empty and state.submitting is not empty, I can redirect to endpoint+qs
    if (
      state.entering.food === '' && 
      state.entering.town === '' &&
      state.submitting.food !== '' && 
      state.submitting.town !== ''
    ) {
      router.push(`/search?term=${
        state.submitting.food
      }&location=${
        state.submitting.town
      }&limit=${
        state.endpoints.search.qty
      }`);
    }

  };






  const upto_88888 = css`

    width: ${state.width}px;
    height: ${state.height}px;
    min-height: ${math(`465 + 50`)}px;
    display: grid;
    justify-items: center;
    align-items: center;

    #index {
      width: 900px;
      height: 465px;
    }
  
    h1 {
      text-align: center;
      font-size: ${size(40, 'fix')}px;
      line-height: ${size(40 * 1.2, 'fix')}px;
    }

    #input-input-button {
      margin-top: 50px;
      text-align: center;
      margin-bottom: 50px;
    }

    #enter-food-input-parent,
    #enter-town-input-parent {
      display: grid;
      justify-items: center;
    }

    #enter-food-input,
    #enter-town-input,
    .validation-txt,
    button {
      width: ${size(700, 'fix')}px;
    }
  
  `;









  const upto_900 = css`

    #index {
      width: ${size(900, 'cal', 900)}px;
    }

    #enter-food-input,
    #enter-town-input,
    .validation-txt,
    button {
      width: ${size(700, 'cal', 900)}px;
    }

  `;









  const upto_800 = css`

    min-height: ${math(`515 + 50`)}px;

    #index {
      height: 515px;
    }

  `;









  const upto_500 = css`

    min-height: ${math(`535 + 50`)}px;

    #index {
      height: 535px;
    }

  `;









  const upto_360 = css`

    min-width: 360px;

    #index {
      min-width: 360px;
    }

  `;









  const headline_88888 = 
  <h1>
    DEMO:
    <br/>
    fetching data from Yelp API 
    <br/>
    in Next.js
  </h1>

  const headline_800 = 
  <h1>
    DEMO:
    <br/>
    fetching data 
    <br/>
    from Yelp API 
    <br/>
    in Next.js
  </h1>









  return (
    <div id="index-jsx" className={cx(
      upto_88888,
      {[upto_900]: state.width <= 900},
      {[upto_800]: state.width <= 800},
      {[upto_500]: state.width <= 500},
      {[upto_360]: state.width <= 360},
    )}>

      <div id="index">
        {state.width > 800 && headline_88888}
        {state.width <= 800 && headline_800}
  
        <div id="input-input-button">
          <Input
            parentDivId="enter-food-input-parent"
            name="food"
            placeholder="enter food (e.g. „pizza”)"
            inputId="enter-food-input"
            inputClassNames="enter food name"
            validationTxt={`${state.validationTxt_food}`}
            validationClassNames={`${state.validationStatus_food}`}
            value={state.entering.food}
            onChangeEvent={entering_food}
          />
          
          <Input
            parentDivId="enter-town-input-parent"
            name="town"
            placeholder="enter town (e.g. „New York”)"
            inputId="enter-town-input"
            inputClassNames="enter town name"
            validationTxt={`${state.validationTxt_town}`}
            validationClassNames={`${state.validationStatus_town}`}
            value={state.entering.town}
            onChangeEvent={entering_town}
          />
  
          <Button
            buttonTxt="Search"
            buttonClassNames="go-forward"
            //buttonClassNames="go-back"
            onClickEvent={submitting}
          />
        </div>
  
        <ReadMore/>
      </div>

    </div>
  );
}

export default Index;
