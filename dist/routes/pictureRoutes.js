"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginMiddleware = require('../middlewares/loginMiddleware'); var _loginMiddleware2 = _interopRequireDefault(_loginMiddleware);
var _pictureControllers = require('../controllers/pictureControllers'); var _pictureControllers2 = _interopRequireDefault(_pictureControllers);

const router = new (0, _express.Router)();

router.post('/', _loginMiddleware2.default, _pictureControllers2.default.create);

exports. default = router;
