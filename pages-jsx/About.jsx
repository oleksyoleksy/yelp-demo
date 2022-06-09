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
import CodeSnippet from 'ui-elements/CodeSnippet';
import Button from 'ui-elements/Button';
// REPO-SCSS









const About = () => {


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
    min-width: 360px;
    margin: 0 auto;
    //background-color: #0000001b;

    section {
      margin: 0 auto;
      margin-top: 100px;
      width: ${size(900, 'fix')}px;
      min-width: 360px;
      //background-color: #60eaff30;
    }

    #about-section {
      margin-top: 0px;
    }

    h1 {
      padding-top: ${size(40, 'fix')}px;
      font-size: ${size(40, 'fix')}px;
      line-height: ${size(40 * 1.2, 'fix')}px;
      text-align: center;
      font-weight: 400;
      //padding-bottom: ${size(20, 'fix')}px;
    }

    h2 {
      font-size: ${size(30, 'fix')}px;
      line-height: ${size(30 * 1.2, 'fix')}px;
      min-width: 320px;
      margin: 0 auto;
      text-align: center;
      font-weight: 400;
      //padding-bottom: ${size(20, 'fix')}px;
    }

    section {
      p {
        width: ${size(500, 'fix')}px;
        margin: 0 auto;
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: ${size(16, 'fix')}px;
        line-height: ${size(16 * 1.4, 'fix')}px;
        font-weight: 400;
      }
    }

    .mono {
      font-family: 'Fira Code', monospace;
      font-weight: 500;
    }
    .blue {
      color: #0066ff;
    }
    .yellowish {
      color: #636a00;
    }
    .orange {
      color: #d18800;
    }
    .black {
      color: black;
    }

    .dir {
      margin-top: 20px;
      width: ${size(600, 'fix')}px;
      //margin-left: 0px;
      padding: 2px;
      font-family: 'Fira Code', monospace;
      font-weight: 500;
      font-style: italic;
      font-size: 12px;
      line-height: 12px;
      margin-bottom: 0px;
      span {
        background-color: #ffea00;
      }
    }

    .snippets {
      width: ${size(600, 'fix')}px;
      margin: 0 auto;
      pre {
        .token-line {
          padding-left: 15px;
          padding-right: 15px;
          font-size: 12px;
          line-height: 17px;
          white-space: pre-wrap;
          white-space: -moz-pre-wrap;
          white-space: -pre-wrap;
          white-space: -o-pre-wrap;
          word-wrap: break-word;
        }
      }
    }

    .language-jsx,
    .language-scss {
      //font-family: monospace;
      margin: 0px;
      padding: 0px;
    }

    #valtio-section {
      .snippets {
        margin-bottom: 40px;
      }
    }

    #details-section,
    #urls-section {
      a {
        font-weight: 400;
        text-decoration: none;
        color: rgb(0, 128, 255);
        text-align: center;
        :hover {
          color: rgb(0, 64, 255);
        }
        width: 100%;
      }
    }


    .go-back {
      margin-right: ${size(100, 'fix')}px;
    }
    #buttons {
      margin-top: 90px;
      text-align: center;
      padding-bottom: 100px;
    }
  
  `;









  const upto_1366 = css`
  
    width: ${math(`${state.width} * 1`)}px;
  
  `;









  const upto_900 = css`

    section {
      width: ${math(`${state.width} * 1`)}px;
    }
  
    .button-tag {
      width: ${size(700, 'cal', 900)}px;
    }
    .go-back {
      margin-right: 0px;
      margin-bottom: 24px;
    }
  
  `;









  const upto_700 = css`

    section {
      margin-top: ${size(100, 'cal', 700)}px;
    }

    h1 {
      padding-top: ${size(40, 'cal', 700)}px;
      font-size: ${size(40, 'cal', 700)}px;
      line-height: ${size(40 * 1.2, 'cal', 700)}px;
    }

    h2 {
      font-size: ${size(30, 'cal', 700)}px;
      line-height: ${size(30 * 1.2, 'cal', 700)}px;
    }

    section {
      p {
        margin-top: ${size(40, 'cal', 700)}px;
        width: ${size(500, 'cal', 700)}px;
        margin-bottom: ${size(40, 'cal', 700)}px;
      }
    }

    .dir {
      width: ${size(600, 'cal', 700)}px;
    }

    .snippets {
      width: ${size(600, 'cal', 700)}px;
    }

  `;









  const upto_576 = css`

    section {
      margin-top: ${size(82.2857, 'fix')}px;
    }

    h1 {
      padding-top: ${size(32.9143, 'fix')}px;
      font-size: ${size(32.9143, 'fix')}px;
      line-height: ${size(32.9143 * 1.2, 'fix')}px;
    }

    h2 {
      font-size: ${size(24.6857, 'fix')}px;
      line-height: ${size(24.6857 * 1.2, 'fix')}px;
    }

    section {
      p {
        width: ${size(411.433, 'fix')}px;
      }
    }

    .dir {
      width: ${size(493.717, 'fix')}px;
    }

    .snippets {
      width: ${size(493.717, 'fix')}px;
    }

  `;









  const upto_494 = css`

    section {
      margin-top: ${size(82.2857, 'cal', 494)}px;
    }

    h1 {
      padding-top: ${size(32.9143, 'cal', 494)}px;
      font-size: ${size(32.9143, 'cal', 494)}px;
      line-height: ${size(32.9143 * 1.2, 'cal', 494)}px;
    }

    h2 {
      font-size: ${size(24.6857, 'cal', 494)}px;
      line-height: ${size(24.6857 * 1.2, 'cal', 494)}px;
    }

    section {
      p {
        font-size: ${size(16, 'cal', 494)}px;
        line-height: ${size(16 * 1.4, 'cal', 494)}px;
      }
    }

    .dir {
      width: ${size(493.717, 'cal', 494)}px;
      font-size: ${size(12, 'cal', 494)}px;
    }

    .snippets {
      width: ${size(493.717, 'cal', 494)}px;
      pre {
        .token-line {
          font-size: ${size(12, 'cal', 494)}px;
          line-height: ${size(17, 'cal', 494)}px;
        }
      }
    }

  `;









  const upto_438 = css`

    section {
      p {
        width: ${size(411.433, 'cal', 438)}px;
      }
    }

    .dir {
      padding: 0px;
    }

  `;









  const upto_360 = css`

  section {
    margin-top: ${size(59.9653, 'fix')}px;
    width: ${size(360, 'fix')}px;
  }

  h1 {
    padding-top: ${size(23.9861, 'fix')}px;
    font-size: ${size(23.9861, 'fix')}px;
    line-height: ${size(23.9861 * 1.2, 'fix')}px;
  }

  h2 {
    font-size: ${size(17.9896, 'fix')}px;
    line-height: ${size(17.9896 * 1.2, 'fix')}px;
  }

  section {
    p {
      margin-top: ${size(20.5714, 'fix')}px;
      width: ${size(338.167, 'fix')}px;
      font-size: ${size(11.6599, 'fix')}px;
      line-height: ${size(11.6599 * 1.4, 'fix')}px;
      margin-bottom: ${size(20.5714, 'fix')}px;
    }
  }

  .dir {
    width: ${size(359.8, 'fix')}px;
    font-size: ${size(8.74494, 'fix')}px;
  }

  .snippets {
    width: ${size(359.8, 'fix')}px;
    pre {
      .token-line {
        font-size: ${size(8.74494, 'fix')}px;
      }
    }
  }

`;









  const upto_926_landscape = css``;









  const upto_568_landscape = css``;









  return (
    <div id="about-jsx"  className={cx(
      upto_88888,
      {[upto_1366]: state.width <= 1366},
      {[upto_900]: state.width <= 900},
      {[upto_700]: state.width <= 700},
      {[upto_576]: state.width <= 576},
      {[upto_494]: state.width <= 494},
      {[upto_438]: state.width <= 428},
      {[upto_360]: state.width <= 360},
      {[upto_926_landscape]: state.width <= 926 && ratio >= 1.6},
      {[upto_568_landscape]: state.width <= 568 && ratio >= 1.6},
    )}>









      <section id="about-section">
      <h1>A few words {state.width <= 700 && <br/>} about this DEMO</h1>
      <p>The main purpose of this project is to demonstrate my recent coding skills and briefly describe the way I like to work with code. Connecting to public API and rendering fetched data in the browser is a good way to do that. So, without further ado:</p>
      </section>









      <section id="nextjs-section">
      <h2>getServerSideProps</h2>
      <p>Development framework of my choice is <span className="bold-700">Next.js</span>. I&nbsp;like to split each page/subpage code into <span className="mono yellowish">js</span> and <span className="mono blue">jsx</span> files. In <span className="mono yellowish">js</span> file I&nbsp;keep metadata content, e.g. attributes of <span className="mono orange">&#60;meta&#62;</span> and <span className="mono orange">&#60;title&#62;</span> tags, or things related to data fetching, such as <span className="mono black">getServerSideProps</span> function. I&nbsp;consider the relation between <span className="mono yellowish">js</span> file and its counterpart <span className="mono blue">jsx</span> to be parent-child connection, so I'm passing down fetched data as <span className="mono black">props</span> from <span className="mono yellowish">js</span> to <span className="mono blue">jsx</span>...</p>

      <p className="dir"><span>~/pages/search.js</span></p>
      <div  className="snippets">
        <CodeSnippet code={`
  const SearchPage = ({data, qs}) => {
    return (
      <Search data={data} qs={qs}/>
    );
  }

  export default SearchPage;
        `} codelang="jsx"/>
      </div>

      <p>...in there, I loop over passed data and render it.</p>

      <p className="dir"><span>~/pages-jsx/Search.jsx</span></p>
      <div  className="snippets">
      <CodeSnippet code={`
  const Search = ({data, qs}) => {
    const fetching = data.map(i => {
      return(
        <div key={uuidv4()}>
          {/* looping */}
        </div>
      )
    });

    return (
      <div id="search-jsx">
        {fetching}
      </div>
    );
  }

  export default Search;
          `}codelang="jsx"/>
      </div>
      </section>









      <section id="valtio-section">
      <h2>proxy-state</h2>
      <p>I'm a big fan of <span className="bold-700">Valtio</span> library and <span className="mono blue">proxy-state</span>. I&nbsp;don't like useState hook, I&nbsp;hate to worry if some data will be available somewhere else, or am&nbsp;I smart enough to pass props from child to parent. So I&nbsp;keep all <span className="mono blue">states</span> I&nbsp;need in <span className="mono">~/js/state.js</span> file.</p>

      <p className="dir"><span>~/js/state.js</span></p>
      <div  className="snippets">
        <CodeSnippet code={`
  const state = proxy({
    width: 0,
    height: 0,
  });
  
  export {state};
          `} codelang="jsx"/>
      </div>

      <p className="dir"><span>~/pages-jsx/_template.jsx</span></p>
      <div  className="snippets">
        <CodeSnippet code={`
  useEffect(() => {

    // after browser is reloaded:
    state.width = document.documentElement.clientWidth;
    state.height = window.innerHeight;

    // after browser is resized:
    const resizeWatcher = () => {
      state.width = document.documentElement.clientWidth;
      state.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeWatcher);

  }, []);
          `} codelang="jsx"/>
      </div>

      <p className="dir"><span>~/js/state.js</span></p>
      <div  className="snippets">
        <CodeSnippet code={`
  const upto_1366 = css\`
    width: \${state.width}px;
    .button-tag {
      margin-left: \${math(\`(\${state.width} - 300) / 2\`)}px;
    }
  \`;
          `} codelang="jsx"/>
      </div>
      </section>









      <section id="css-section">
      <h2>@emotion/css, polished.js</h2>
      <p>I choose <span className="bold-700">CSS-in-JS</span> approach over CSS frameworks/libraries, love to inject some dynamic data into CSS code, do some math, observe what happens. <br /> <br /> For example I defined <span className="mono yellowish">size</span> function... </p>

      <p className="dir"><span>~/js/rwd.js</span></p>
      <div  className="snippets">
        <CodeSnippet code={`
  const size = (px, scale, upto) => {

    let fontsize;

    if (scale === 'fix') {
      fontsize = math(\`\${px}\`);
    }

    if (scale === 'cal') {
      fontsize = math(
        \`\${px} * \${state.width} / \${upto}\`
      );
    }

    return fontsize
  };
          `} codelang="jsx"/>
      </div>

      <p>...which I use for <span className="bold-700">responsive design</span>. E.g., I can quickly decide whether to scale down the typeface as the browser width narrows, or keep font-size static:</p>

      <p className="dir"><span>~/pages-jsx/*.jsx</span></p>
      <div  className="snippets">
        <CodeSnippet code={`
  // browser's width is equal to 768px, 
  // font-size is equal to 40px;
  // as browser's width narrows, 
  // font-size will be scaled down: 
  const upto_768 = css\`
    h1 {
      font-size: \${size(40, 'cal', 768)}px;
      line-height: \${size(40 * 1.2, 'cal', 768)}px;
    }
  \`;

  // font-size was scaled down to 30px and from here, 
  // font-size will stay static
  const upto_576 = css\`
    h1 {
      font-size: \${size(30, 'fix')}px;
      line-height: \${size(30 * 1.2, 'fix')}px;
    }
  \`;

  // from this point I will scale down font-size again
  const upto_428 = css\`
    h1 {
      font-size: \${size(30, 'cal', 428)}px;
      line-height: \${size(30 * 1.2, 'cal', 428)}px;
    }
  \`;

  return (
    <div className={cx(
      {[upto_768]: state.width <= 768},
      {[upto_576]: state.width <= 576},
      {[upto_428]: state.width <= 428},
    )}>
          `} codelang="jsx"/>
      </div>
      </section>




      <section id="details-section">

      <h2>a bunch of details {state.width <= 600 && <br/>} worth mentioning</h2>

      <p>If fetched restaurant doesn't have profile foto, a replacement will be rendered. Try search for <span className="mono black">pizza</span> in <span className="mono black">Sochaczew</span>, or click <a href={`https://yelp-demo.vercel.app/search?term=pizza&location=Sochaczew&limit=20`} target="_blank" rel="noopener">this link</a> with query string</p>

      <p className="dir"><span>~/pages-jsx/Search.jsx</span></p>
      <div  className="snippets">
        <CodeSnippet code={`
  <div className="img-parent">
    {
      i.image_url === '' &&
      <img src="restaurant.jpg" alt="" />
    }
    <img src={i.image_url} alt="" />
  </div>
          `} codelang="jsx"/>
      </div>

      <p>If number of fetched restaurants will be odd, in 768px &#40;or wider&#41; screens, last restaurant will be centered. Search for anything and change value of <span className="mono black">limit</span> in <span className="mono black">URL</span> for odd number.</p>

      <p className="dir"><span>~/pages-jsx/Search.jsx</span></p>
      <div  className="snippets">
        <CodeSnippet code={`
  if (how_many_iterations % 2 === 0) {
    grid_idName = 'even';
  } else {
    grid_idName = 'odd';
  }
          `} codelang="jsx"/>
      </div>

      <p>If author of review in restaurant's profile subpage didn't provide avatar photo, a replacement will be rendered. Try <a href="https://yelp-demo.vercel.app/simela-berlin-3" target="_blank" rel="noopener">Simela in Berlin</a>.</p>

      <p className="dir"><span>~/ui-elements/Reviews.jsx</span></p>
      <div  className="snippets">
        <CodeSnippet code={`
  <div className="review-data">
  {
    i.user.image_url === null && 
    <div className="img-parent">
      <img src="avatar.jpg" alt="" />
    </div>
  }
  {
    i.user.image_url !== null &&
    <div className="img-parent">
      <img src={i.user.image_url} alt="" />
    </div>
  }
          `} codelang="jsx"/>
      </div>

      <p>If Yelp API provides less than three reviews &#40;and sometimes does!&#41;, a replacement with fake data will be rendered. Try <a href="https://yelp-demo.vercel.app/calice-d-oro-berlin" target="_blank" rel="noopener">Calice d&#180;Oro in Berlin</a> with one replacement, <a href="https://yelp-demo.vercel.app/palayok-milano" target="_blank" rel="noopener">Palayok in Milano</a> with two replacements or <a href="https://yelp-demo.vercel.app/leo-e-pepe-berlin" target="_blank" rel="noopener">leo e pepe in Berlin</a> with even three replacements.</p>

      <p className="dir"><span>~/ui-elements/Reviews.jsx</span></p>
      <div  className="snippets">
        <CodeSnippet code={`
  // fake-reviews - will use them conditionally, 
  // if there is lack of real ones in API
  const [fake_data] = useState([
    {
      text: "First lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tempora soluta fuga, animi illum vel voluptates dignissimos nam dolorum, cupiditate, iusto nulla...",
      rating: "1",
      user: {
        image_url: "avatar.jpg",
        name: "Aaron B.",
      }
    },
    {
      text: "Second lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tempora soluta fuga, animi illum vel voluptates dignissimos nam dolorum, cupiditate, iusto nulla...",
      rating: "2",
      user: {
        image_url: "avatar.jpg",
        name: "Bob C.",
      }
    },
    {
      text: "Third lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tempora soluta fuga, animi illum vel voluptates dignissimos nam dolorum, cupiditate, iusto nulla...",
      rating: "3",
      user: {
        image_url: "avatar.jpg",
        name: "Caleb D.",
      }
    }
  ]);



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
                <img src="avatar.jpg" alt="" />
              </div>
            }
            <div className="img-parent">
              <img src={i.user.image_url} alt="" />
            </div>
            <p>
              by <span className="bold-600">
                {i.user.name}
              </span>
            </p>
            <p>
              rating: <span className="bold-600">
                {i.rating}
              </span>
            </p>
            {
              how_many_fake_reviews === 1 &&
              <p>
                published: <span className="bold-600">
                  {state.timestamp.review_1}
                </span>
              </p>
            }
            {
              how_many_fake_reviews === 2 &&
              <p>
                published: <span className="bold-600">
                  {state.timestamp.review_2}
                </span>
              </p>
            }
            {
              how_many_fake_reviews === 3 &&
              <p>
                published: <span className="bold-600">
                  {state.timestamp.review_3}
                </span>
              </p>
            }
          </div>
        </div>
      )
    });
          `} codelang="jsx"/>
      </div>

      </section>
      









      <section id="urls-section">
      <p>
        Entire code from this DEMO {state.width <= 612 && <br/> } is uploaded to my GitHub: 
        <br /> 
        <a 
          href="https://github.com/oleksyoleksy/yelp-demo" 
          target="_blank" rel="noopener"
        >
          https://github.com/oleksyoleksy/yelp-demo
        </a> 
      </p>
      <p>
        More info about me: 
        <br /> 
        <a 
          href="https://marcin-oleksiak.netlify.app/" 
          target="_blank" rel="noopener"
        >
          marcin-oleksiak.netlify.app
        </a> 
      </p>

      <div id="buttons">
        <Button
          buttonTxt="go to previous page"
          buttonClassNames="go-back"
          onClickEvent={goback}
        />
  
        <Button
          buttonTxt="go to homepage"
          buttonClassNames="go-forward"
          onClickEvent={redirecting}
        />
      </div>
      </section>
    </div>
  );
}

export default About;