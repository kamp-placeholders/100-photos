import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App.jsx';

/*
if there are not any photos, render 0 photos in text. 
if there are less than 6 photos, render just one photos
if there are more than 9 photos, render all nine and the bottom right hand image will say "+ N more "

in the last case, if there are more than 9 or more photos, 
when a user clicks on one of the photos, it will 
switch displays to the slide show experience. 
*/


ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
