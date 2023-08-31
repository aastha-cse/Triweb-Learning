"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    const userName = "Aastha";
    const password = "password";
    const result = (0, user_1.addUserToDb)(userName, password);
    res.send(result);
};
exports.registerUser = registerUser;
