const express = require("express");

const ticketController = require("../controllers/ticketController");
const protect = require("../../../shared/middlewares/protectMiddleware");
const validationMiddleware = require("../../../shared/middlewares/validationMiddleware");
const {
    createTicketValidator,
    updateTicketValidator
} = require("../validators/ticketValidator");

const router = express.Router();


router.get(
    "/",
    ticketController.getTickets
);

router.get(
    "/:id",
    ticketController.getTicket
);

router.patch(
    "/:id/assign",
    ticketController.assignTicket
);

router.delete(
    "/:id",
    ticketController.deleteTicket
);

router.delete(
    "/",
    ticketController.deleteAllTickets
);

/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: User ticket management
 */
router.use(protect);

router.post(
    "/",
    createTicketValidator,
    validationMiddleware,
    ticketController.createTicket
);

router.put(
    "/:id",
    updateTicketValidator,
    validationMiddleware,
    ticketController.updateTicket
);

module.exports = router;