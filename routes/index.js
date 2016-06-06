var express = require('express');
var router = express.Router();
var stuff = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Profiles!' });
});

/* GET profile-one page */
router.get('/profile-one', function(request, response) {
  response.render('profiles', { title: stuff.titles[0],
                                image: stuff.images[0],
                                name: stuff.names[0],
                                description: stuff.descriptions[0],
                                back: '/',
                                next: '/profile-two'
                              });
});

/* GET profile-two page */
router.get('/profile-two', function(request, response) {
  response.render('profiles', { title: stuff.titles[1],
                                image: stuff.images[1],
                                name: stuff.names[1],
                                description: stuff.descriptions[1],
                                back: '/profile-one',
                                next: '/profile-three'
                              });
});

/* GET profile-three page */
router.get('/profile-three', function(request, response) {
  response.render('profiles', { title: stuff.titles[2],
                                image: stuff.images[2],
                                name: stuff.names[2],
                                description: stuff.descriptions[2],
                                back: '/profile-two',
                                next: '/profile-three'
                              });
});


module.exports = router;
