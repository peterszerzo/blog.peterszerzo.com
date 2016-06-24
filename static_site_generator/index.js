// This is a prototype - not yet functional

import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import fs from 'fs';

import posts from '../build/api/posts/index.json';
import Post from '../src/components/post/post.jsx';
import Website from './website.jsx';

const siteMeta = {
  title: 'Peter Szerzo makes himself a website',
  meta_description: 'Developer, designer, language enthusiast, yogi, cook. Based in Copenhagen, Denmark.',
  keywords: 'Developer, designer, Copenhagen.'
};

fs.writeFile('build/index.html', renderToStaticMarkup(<Website {...siteMeta}/>), (err) => {
  if (err) {
    return console.log(err);
  }
});
