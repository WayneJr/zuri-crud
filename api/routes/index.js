const express = require('express'),
      router  = express.Router(),
      { root, createUser, getUsers, findUser, updateUser, deleteUser }   = require('../controllers/index');

router.get('/', root); // Root endpoint on the server

router.get('/users', getUsers); // Endpoint to get all saved users
router.post('/users', createUser); // Endpoint to create a new user
router.get('/users/:email', findUser); // Endpoint to find a particular user

router.put('/users/:id', updateUser); // Endpoint to find and update a particular user based on their id
router.delete('/users/:id', deleteUser);

module.exports = router;      