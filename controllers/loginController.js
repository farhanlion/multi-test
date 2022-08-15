const db = require("../db/models");
const users = db.users;
const uuid = require('uuid');

// Create a new user
exports.create = function (body){
    return new Promise((resolve,reject) => {
        // Validate request
        if (!body) {
            return {
                status: 400,
                message: "Content can not be empty!"
            };
        }

        // Create a User
        const user = {
            id: uuid.v4(),
            username: body.username,
            password: body.password,
            email: body.email,
            dateCreated: Date.now(),
            dateUpdated: Date.now(),
        };

        // Save user in the database
        users.create(user)
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    });
};

// Retrieve all users.
exports.findAll = function (params){
    return function(req, res, next) {
        Matches.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving Users."
                });
            });
    };
};

// Find a specific user
exports.findOne = function (body) {
    return new Promise((resolve, reject) =>
        {
            const Username = body.username;
            const Password = body.password;

            const item = new Promise((resolve, reject) => {
                users.findOne({ where: { username : Username, password: Password } })
                    .then(data => {
                        resolve(data);
                    })
                    .catch(err => {
                        reject(err);
                    });
            })

            item.then((data) => {
                try {
                    resolve(data);
                } catch (err) {
                    reject(err)
                }
            })
        }
    )
}

// Update a user
exports.update = function (params) {
    return function(req, res, next) {

        // Validate request
        if (!req.body.data && !req.query.id) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        // Create user instance
        const user = {
            username: req.body.data.username,
            password: req.body.data.password,
            dateCreated: req.body.data.dateCreated,
            dateCreated: new Date().getTime(),
        };

        // update user in the database
        users.update(user,{where: { id: req.query.id },})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the user."
                });
            });
    }
};

// Delete a user
exports.delete = (req, res) => {
    const id = req.params.id;
    users.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Match was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Match with id=${id}. Maybe Match was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Match with id=" + id
            });
        });
};
