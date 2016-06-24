import React from 'react';

import Static from '../static/static.jsx';
import Loader from '../loader/loader.jsx';
import Hero from '../hero/hero.jsx';

export default function Now(props) {
  const {post} = props;
  if (!post) {
    return <Loader/>;
  }
  const {html, title, markdown, image} = post;
  return (
    <div>
      <Hero
        title={title}
        image={image}
      />
      <Static markdown={markdown} html={html}/>
    </div>
  );
}
