import React from 'react';

import './post.scss';
import Static from '../static/static.jsx';
import Loader from '../loader/loader.jsx';
import Hero from '../hero/hero.jsx';

export default function Post(props) {
  const {post} = props;
  if (!post) {
    return <Loader/>;
  }
  const {markdown, title, image, html, subtitle} = post;
  return (
    <div className='post'>
      <Hero
        title={title}
        subtitle={subtitle}
        image={image}
      />
      <Static markdown={markdown} html={html}/>
    </div>
  );
}
