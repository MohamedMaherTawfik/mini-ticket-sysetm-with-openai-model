const { body } = require("express-validator");

const createTicketValidator = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ min: 3, max: 100 })
        .withMessage("Title must be between 3 and 100 characters"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ min: 3, max: 1000 })
        .withMessage("Description must be between 3 and 1000 characters")
];

const updateTicketValidator = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ min: 3, max: 100 })
        .withMessage("Title must be between 3 and 100 characters"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ min: 3, max: 1000 })
        .withMessage("Description must be between 3 and 1000 characters")
];

const assignTicketValidator = [
    body("assignedTo")
        .notEmpty()
        .withMessage("assignedTo is required")
        .isMongoId()
        .withMessage("assignedTo must be a valid user ID")
];

module.exports = {
    createTicketValidator,
    updateTicketValidator,
    assignTicketValidator
};