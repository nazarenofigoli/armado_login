const {check} = require('express-validator');

const validatelog= [
    check('nombre')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({ min: 4 }).withMessage('El nombre debe tener al menos 4 caracteres'),

    check('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),

    check('edad').notEmpty().withMessage("El campo no puede estar vacio").bail()
        .isInt().withMessage("solo aceptamos caracteres numericos").bail()
];

module.exports=validatelog