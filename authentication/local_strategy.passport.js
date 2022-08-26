module.exports = function (passport, controller) {
    const LocalStrategy = require("passport-local");

    passport.use(
        new LocalStrategy(
            { passReqToCallback: true },
            async function verify(req, username, password, cb) {
                try {
                    const result = await controller.findOne({ username: username, password: password });
                    const user_output = result.toJSON();
                    if (user_output === {}) {
                        console.log("Invalid username")
                        return cb(null, false, req.flash('Error', 'Invalid Username.'));
                    }
                    if (user_output.password !== password) {
                        console.log("Invalid password")
                        return cb(null, false, req.flash('Error', 'Invalid Password.'));
                    } else {
                        console.log("Passed")
                        return cb(null, user_output, req.flash('Success', 'Login.'));
                    }
                } catch (error) {
                    console.log("Invalid")
                    return cb(null, false, req.flash('Error', 'Invalid Password & Username.'));
                }
            })
    );

    passport.serializeUser((user, cb) => {
        console.log("serialising user")
        cb(null, user.id);
    });

    passport.deserializeUser((id, cb) => {
        console.log("de-serialising user")
        cb(null, { id });
    });
};

