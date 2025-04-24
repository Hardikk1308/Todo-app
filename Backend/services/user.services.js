const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

class UserService {
    // Register new user
    static async register(email, password) {
        try {
            const createUser = new UserModel({ email, password });
            return await createUser.save();
        } catch (err) {
            throw err;
        }
    }

    // Check user for login
    static async checkuser(email) {
        try {
            return await UserModel.findOne({ email });
        } catch (err) {
            throw err;
        }
    }

    // Generate JWT
    static async generateToken(tokenData, secretKey, jwtExpiry) {
        return jwt.sign(tokenData, secretKey, { expiresIn: jwtExpiry });
    }
}

module.exports = UserService;
