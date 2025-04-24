const UserService = require('../services/user.services.js');

module.exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.register(email, password);
        res.json({ status: true, message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};


module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find user
        const user = await UserService.checkuser(email);
        if (!user) {
            return res.status(401).json({ status: false, message: "Invalid email or password" });
        }

        // 2. Compare password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ status: false, message: "Invalid email or password" });
        }

        // 3. Generate token
        const tokenData = { id: user._id, email: user.email };
        const token = await UserService.generateToken(tokenData, "secretkey", "1h");

        // 4. Send response
        return res.status(200).json({ status: true, message: "Login successful", token, user });

    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
};
