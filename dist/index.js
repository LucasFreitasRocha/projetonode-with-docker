"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var routes = require('./routes');
// Configura a porta pela variavel de ambiente ou usa a 3000 como padrão
var port = process.env.port || 3000;
//Configura o arquivo de rotas
app.use(routes);
app.listen(port, function () {
    console.log('Server starded  :)');
});
