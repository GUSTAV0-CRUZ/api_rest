"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UsersController = require('../controllers/UsersController'); var _UsersController2 = _interopRequireDefault(_UsersController);
var _loginMiddleware = require('../middlewares/loginMiddleware'); var _loginMiddleware2 = _interopRequireDefault(_loginMiddleware);

const router = new (0, _express.Router)();

router.post('/', _UsersController2.default.create);
router.put('/', _loginMiddleware2.default, _UsersController2.default.update);
router.delete('/', _loginMiddleware2.default, _UsersController2.default.delete);

exports. default = router;
