'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Home Page'});
};
