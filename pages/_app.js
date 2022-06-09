// NEXT
// REACT
// YARN
// REPO-JS
// REPO-JSX
import Template from 'pages-jsx/_template';
// REPO-SCSS
import 'styles/globals.scss';


const MyApp = ({ Component, pageProps }) => {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  )
};

export default MyApp
