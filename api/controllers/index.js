const mongoose = require('mongoose');
const User = require('../models/Users');


// The root function handling what is 
// done when the root endpoint is accessed
function root(req, res) {
    res.send("Hello Server");
}

// function called when post request 
// to create a new user is accessed
async function createUser(req, res) {
    try {
        const { name, email, country } = req.body; // deconstruct the request body to get the data
        const newUser = await User.create({name, email, country}); // use the data to create a new user

        // return response if the actions are successful
        res.json({
            message: "Successfully created new user",
            data: newUser
        });

    } catch(err) {
        res.json({
            message: "There was an error saving the user",
            data: err.message
        });
    }


}

// function to retrieve all current users 
// on the platform
async function getUsers(req, res) {
    try {
        const users = await User.find({}); // Use the model to retrieve all users
        res.json({
            message: "Successfully retrieved all users",
            data: users
        });
    } catch (err) {
        res.json({
            message: "There was an error retrieving users",
            data: err.message
        });
    }
}

// function to retrieve a particular users data
async function findUser(req, res) {
    try {
        const user = await User.find({id: req.params.id});
        if (user) { // If the user is found
            res.json({
                message: "Successfully retrieved user",
                data: user
            });
        } else {
            res.json({
                message: "User not found",
                data: user
            });
        }
    } catch(err) {
        res.json({
            message: "There was an Error finding the user",
            data: err.message
        });
    }
}

async function updateUser(req, res) {
    try {
        const { name, email, country } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, {name, email, country});

        // return response if the actions are successful
        res.json({
            message: "Successfully created new user",
            data: user
        });
    } catch (err) {
        res.json({
            message: "There was an Error finding the user",
            data: err.message
        });
    }
}

async function deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json({
        message: "User deleted"
    }))
    .catch(err => res.json({
        message: "There was an Error finding the user",
        data: err.message
    }));
}

module.exports = { root, createUser, getUsers, findUser, updateUser, deleteUser };