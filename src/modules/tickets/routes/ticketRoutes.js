const express = require("express");

const ticketController = require("../controllers/ticketController");

const protect = require("../../../shared/middlewares/protectMiddleware");
const authorizeMiddleware = require("../../../shared/middlewares/authorizeMiddleware");
const validationMiddleware = require("../../../shared/middlewares/validationMiddleware");

const {
    createTicketValidator,
    updateTicketValidator,
    assignTicketValidator
} = require("../validators/ticketValidator");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: User ticket management
 */

// Authentication
router.use(protect);

// Get tickets
router.get(
    "/",
    ticketController.getTickets
);

// Get single ticket
router.get(
    "/:id",
    ticketController.getTicket
);

// Create ticket
router.post(
    "/",
    createTicketValidator,
    validationMiddleware,
    ticketController.createTicket
);

// Update ticket
router.put(
    "/:id",
    updateTicketValidator,
    validationMiddleware,
    ticketController.updateTicket
);

// Assign ticket → Admin only
router.patch(
    "/:id/assign",
    authorizeMiddleware("admin"),
    assignTicketValidator,
    validationMiddleware,
    ticketController.assignTicket
);

// Close ticket → Agent or Admin
router.patch(
    "/:id/close",
    authorizeMiddleware("agent", "admin"),
    ticketController.closeTicket
);

// Delete single ticket → Admin for now
router.delete(
    "/:id",
    authorizeMiddleware("admin"),
    ticketController.deleteTicket
);

// Delete all tickets → Admin only
router.delete(
    "/",
    authorizeMiddleware("admin"),
    ticketController.deleteAllTickets
);

module.exports = router;