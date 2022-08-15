module.exports = function (passport, controller) {
    const LocalStrategy = require("passport-local");

    passport.use(
        new LocalStrategy(
            async function verify(username, password, cb) {
                try {
                    const result = await controller.findOne({ username: username, password: password });
                    const user_output = result.toJSON();
                    if (user_output === {}) {
                        return cb(null, false,{ message: "Invalid User" });
                    }
                    if (user_output.password !== password) {
                        return cb(null, false, { message: "Invalid password" });
                    } else {
                        return cb(null, user_output, { message: "success" });
                    }
                } catch (error) {
                    return cb(null, false, { message: "System Error : " + error });
                }
            })
    );

    passport.serializeUser((user, cb) => {
        console.log("serialising user")
        cb(null, user);
    });

    passport.deserializeUser((user, cb) => {
        console.log("de-serialising user")
        cb(null, user);
    });
};

