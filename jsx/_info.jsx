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
// REPO-SCSS









const Info = () => {









  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);









  const info_width = 80;
  const info_height = 45;





  const upto_88888 = css`
  
    z-index: 100;
    position: fixed;
    width: ${info_width}px;
    height: ${info_height}px;

    background-color: rgba(255, 213, 0, 1);

    p {
      font-family: 'Menlo', Courier, monospace;
      font-weight: normal;
      font-size: 14px;
      line-height: 12px;
      color: red;
      padding-top: 2px;
      padding-left: 2px;
    }
  
  `;





  //const where = 'left-top';
  //const where = 'middle-top';
  //const where = 'right-top';

  //const where = 'left-middle';
  const where = 'middle-middle';
  //const where = 'right-middle';

  //const where = 'left-bottom';
  //const where = 'middle-bottom';
  //const where = 'right-bottom';





  const left_top = css`
    top: 0px;
    left: 0px;
  `;

  const middle_top = css`
    top: 0px;
    left: ${math(`${state.width} / 2 - ${info_width} / 2`)}px;
  `;

  const right_top = css`
    top: 0px;
    left: ${math(`${state.width} - ${info_width}`)}px;
  `;





  const left_middle = css`
    top: ${math(`${state.height} / 2 - ${info_height} / 2`)}px;
    left: 0px;
  `;

  const middle_middle = css`
    top: ${math(`${state.height} / 2 - ${info_height} / 2`)}px;
    left: ${math(`${state.width} / 2 - ${info_width} / 2`)}px;
  `;

  const right_middle = css`
    top: ${math(`${state.height} / 2 - ${info_height} / 2`)}px;
    left: ${math(`${state.width} - ${info_width}`)}px;
  `;





  const left_bottom = css`
    top: ${math(`${state.height} - ${info_height}`)}px;
    left: 0px;
  `;

  const middle_bottom = css`
    top: ${math(`${state.height} - ${info_height}`)}px;
    left: ${math(`${state.width} / 2 - ${info_width} / 2`)}px;
  `;

  const right_bottom = css`
    top: ${math(`${state.height} - ${info_height}`)}px;
    left: ${math(`${state.width} - ${info_width}`)}px;
  `;









  return (
    <div id="info-jsx" className={cx(
      upto_88888,

      {[left_top]: where === 'left-top'},
      {[middle_top]: where === 'middle-top'},
      {[right_top]: where === 'right-top'},

      {[left_middle]: where === 'left-middle'},
      {[middle_middle]: where === 'middle-middle'},
      {[right_middle]: where === 'right-middle'},

      {[left_bottom]: where === 'left-bottom'},
      {[middle_bottom]: where === 'middle-bottom'},
      {[right_bottom]: where === 'right-bottom'},
    )}>
        <p>w: {state.width}px</p>
        <p>h: {state.height}px</p>
        <p>r: {(state.width/state.height).toFixed(3)}</p>
        {/* <p>static h: {state.static_height}px</p>
        <p>screen h: {state.screen_height}px</p> */}
        {/* <p>entering food: "{state.entering.food}"</p>
        <p>entering town: "{state.entering.town}"</p>
        <p>---------------</p>
        <p>submitting food: "{state.submitting.food}"</p>
        <p>submitting town: "{state.submitting.town}"</p> */}
    </div>
  );
}

export default Info;
