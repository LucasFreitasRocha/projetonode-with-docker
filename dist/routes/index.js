"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    return res.json({ hello: "world!" });
});
router.get('/teste', function (req, res) {
    return res.json({ message: "teste docker nodemon o/" });
});
module.exports = router;
