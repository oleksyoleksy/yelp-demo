// NEXT
// REACT
// YARN
import Highlight, { defaultProps } from "prism-react-renderer";
//import nightOwl from 'prism-react-renderer/themes/nightOwl';
//import okaidia from 'prism-react-renderer/themes/okaidia';
//import palenight from 'prism-react-renderer/themes/palenight';
import vsDark from 'prism-react-renderer/themes/vsDark';
// REPO-JS
// REPO-JSX
// REPO-UI
// REPO-SCSS

const CodeSnippet = ({code,codelang}) => {

  return (
    <Highlight 
      {...defaultProps} 
      code={code} 
      language={codelang} 
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default CodeSnippet;