const ticketModel = require("../models/ticket");

class ticketRepository {
    async getTickets({
        page = 1,
        limit = 10,
        status,
        priority,
        search,
        sort = "-createdAt"
    }) {
        const filter = {};
        if (status) {
            filter.status = status;
        }
        if (priority) {
            filter.priority = priority;
        }
        if (search) {
            filter.$or = [
                {
                    title: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    description: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ];
        }
        const skip = (page - 1) * limit;
        const [tickets, total] = await Promise.all([
            ticketModel
                .find(filter)
                .sort(sort)
                .skip(skip)
                .limit(limit),
            ticketModel.countDocuments(filter)
        ]);
        return {
            tickets,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        };
    }
    async getTicket(id) {
        return await ticketModel.findById(id);
    }

    async createTicket(data) {
        return await ticketModel.create(data);
    }

    async updateTicket(id, data) {
        return await ticketModel.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }

    async deleteTicket(id) {
        return await ticketModel.findByIdAndDelete(id);
    }

    async assignTicket(id, data) {
        return await ticketModel.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }

    async closeTicket(id, data) {
        return await ticketModel.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }

    async deleteAllTickets() {
        return await ticketModel.deleteMany({});
    }
}