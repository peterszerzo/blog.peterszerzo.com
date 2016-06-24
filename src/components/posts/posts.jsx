import React from 'react';

import Loader from '../loader/loader.jsx';
import Hero from '../hero/hero.jsx';
import PostLink from '../post_link/post_link.jsx';

import './posts.scss';

export default function Posts({post, posts, activeTag}) {

  if (!post || !posts) {
    return <Loader/>;
  }

  const list = posts
    .filter(({tags}) => tags.indexOf(activeTag) > -1)
    .map((post, i) => <PostLink key={i} post={post} index={i}/>);

  return (
    <div className='posts'>
      <Hero
        title={post.title}
        image={post.image}
      />
      <div className='posts__list'>
        {list}
      </div>
    </div>
  );
}
