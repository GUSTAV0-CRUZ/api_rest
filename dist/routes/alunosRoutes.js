"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginMiddleware = require('../middlewares/loginMiddleware'); var _loginMiddleware2 = _interopRequireDefault(_loginMiddleware);

const router = new (0, _express.Router)();

router.get('/', _AlunoController2.default.index);
router.post('/', _loginMiddleware2.default, _AlunoController2.default.create);
router.get('/:id', _loginMiddleware2.default, _AlunoController2.default.show);
router.put('/:id', _loginMiddleware2.default, _AlunoController2.default.update);
router.delete('/:id', _loginMiddleware2.default, _AlunoController2.default.delete);

exports. default = router;
