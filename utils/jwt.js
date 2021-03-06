const expressJwt = require('express-jwt');
const config = require('../config/app.config');
const userService = require('../services/user.service');

module.exports = jwt;

function jwt() {
    const secret = "dd";
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    if (!user) {
        return done(null, true);
    }

    done();

}