const ticketService = require("../services/ticketService");
const asyncHandler = require("../../../shared/utils/asyncHandler");
const ApiResponse = require("../../../shared/utils/response");
const NotFoundError = require("../../../shared/errors/NotFoundError");

const getTickets = asyncHandler(async (req, res) => {
    const tickets = await ticketService.getTickets(req.query);
    return ApiResponse.success(res, tickets, "Tickets fetched successfully");
});

const getTicket = asyncHandler(async (req, res) => {
    const ticket = await ticketService.getTicket(req.params.id);
    return ApiResponse.success(res, ticket, "Ticket fetched successfully");
});

const createTicket = asyncHandler(async (req, res) => {
    const ticket = await ticketService.createTicket({...req.body , createdBy: req.user._id});
    return ApiResponse.created(res, ticket, "Ticket created successfully");
});

const updateTicket = asyncHandler(async (req, res) => {
    const ticket = await ticketService.updateTicket(req.params.id, req.body);
    return ApiResponse.success(res, ticket, "Ticket updated successfully");
});

const deleteTicket = asyncHandler(async (req, res) => {
    const ticket = await ticketService.deleteTicket(req.params.id);
    return ApiResponse.success(res, ticket, "Ticket deleted successfully");
});

const assignTicket = asyncHandler(async (req, res) => {
    const ticket = await ticketService.assignTicket(req.params.id, req.body);
    return ApiResponse.success(res, ticket, "Ticket assigned successfully");
});

const closeTicket = asyncHandler(async (req, res) => {
    const ticket = await ticketService.closeTicket(req.params.id, req.body);
    return ApiResponse.success(res, ticket, "Ticket closed successfully");
});

const deleteAllTickets = asyncHandler(async (req, res) => {
    const tickets = await ticketService.deleteAllTickets();
    return ApiResponse.success(res, tickets, "All tickets deleted successfully");
});

module.exports = {
    getTickets,
    getTicket,
    createTicket,
    updateTicket,
    deleteTicket,
    assignTicket,
    closeTicket,
    deleteAllTickets
};