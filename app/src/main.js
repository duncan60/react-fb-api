/*
*require css
*/
import 'bootstrap.css';
import '../assets/styles/style';
import '../assets/styles/compass.style';


/*
*require react
*/

import React from 'react';
import App from './app';

window.fbAsyncInit = function() {
    FB.init({
     	appId      : '980005962010140',
      	xfbml      : true,
      	version    : 'v2.3'
    });
 };


/* jshint ignore:start */
React.render(<App />, document.getElementById('app'));
/* jshint ignore:end */
