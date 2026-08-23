const NotFoundError = require("../../../shared/errors/NotFoundError");
const ticketRepository = require("../repositories/ticketRepository");

class ticketService {
    async getTickets(query) {
        const {
            page = 1,
            limit = 10,
            status,
            priority,
            search,
            sort = "-createdAt"
        } = query;

        return await ticketRepository.getTickets({
            page: Number(page),
            limit: Number(limit),
            status,
            priority,
            search,
            sort
        });
    }
    async getTicket(id) {
        const ticket = await ticketRepository.getTicket(id);
        if (!ticket) {
            throw new NotFoundError("Ticket");
        }
        return ticket;
    }

    async createTicket(data) {
        return await ticketRepository.createTicket(data);
    }

    async updateTicket(id, data) {
        const ticket = await ticketRepository.updateTicket(id, data);
        if (!ticket) {
            throw new NotFoundError("Ticket");
        }
        return ticket;
    }

    async deleteTicket(id) {
        const ticket = await ticketRepository.deleteTicket(id);
        if (!ticket) {
            throw new NotFoundError("Ticket");
        }
        return ticket;
    }

    async assignTicket(id, data) {
        return await ticketRepository.assignTicket(id, data);
    }

    async closeTicket(id, data) {
        return await ticketRepository.closeTicket(id, data);
    }

    async deleteAllTickets() {
        return await ticketRepository.deleteAllTickets();
    }

}