import Head from 'next/head';

export default function HeadContent(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Can I call setState() in {props.lifecycle}() ?</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width, user-scalable=0' />
        <meta content="http://canicallsetstate.in/" property="og:url" />
        <meta content="🤔 Can I call setState()" name="title" />
        <meta content="Handy little site to find if you can call setState() in React.js' lifecycles." name="description"/>
        <meta content="reactjs, react, setState, lifecycle, componentDidMount, componentDidUpdate, componentWillMount, constructor, componentWillUnmount, componentWillReceiveProps, componentWillUpdate" name="keywords"/>
        <link rel="icon" type="image/png" href="https://s3.amazonaws.com/canicallsetstate/canisetstate.png" />
        <style>
          {`a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body {background: #fff;}`}
        </style>
      </Head>
    </React.Fragment>
  )
}
