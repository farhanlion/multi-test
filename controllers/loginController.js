const db = require("../db/models");
const credential = db.credential;
//console.log(credential)

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
            username: body.username,
            password: body.password,
            dateCreated: new Date().getTime(),
            dateCreated: new Date().getTime(),
        };
        // Save user in the database
        credential.create(user)
            .then(data => {
                resolve({
                    status: 200,
                    message: data
                });
            })
            .catch(err => {
                reject({
                    status: 500,
                    message: err.message || "Some error occurred while creating the user."
                })
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
                credential.findAll({ where: { username : Username, password: Password } })
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
        credential.update(user,{where: { id: req.query.id },})
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
    credential.destroy({
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
