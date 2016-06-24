import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';

import Loader from '../src/components/loader/loader.jsx';

export default function Website({
  title,
  meta_description,
  keywords
}) {
  return (
    <html>
      <head>
        <meta charSet='utf-8'/>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
        <meta name='HandheldFriendly' content='True'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <link href='https://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'/>
        <link href='https://fonts.googleapis.com/css?family=PT+Serif' rel='stylesheet' type='text/css'/>
        <link rel='canonical' href='http://peterszerzo.com/'/>
        <title>{title}</title>
        <link rel='shortcut icon' sizes='16x16 32x32 48x48 64x64' href='/assets/favicon.ico'/>
        <meta name='description' content={meta_description}/>
        <meta name='keywords' content={keywords}/>
        <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Website',
          'publisher': title,
          'url': 'http://peterszerzo.com/',
          'description': meta_description
        })}}/>
      </head>
      <body>
        <div id='site'
          dangerouslySetInnerHTML={{__html: renderToStaticMarkup(<Loader/>)}}
        />
        <script src='/assets/index.js'/>
      </body>
    </html>
  );
}
