Auth: DONE
    POST /auth/register
    POST /auth/login

Tickets:
    POST /tickets
    GET /tickets
    GET /tickets/:id
    PATCH /tickets/:id
    DELETE /tickets/:id

Assignment:
    PATCH /tickets/:id/assign

Comments:
    POST /tickets/:id/comments
    GET /tickets/:id/comments

الـTicket:
    title
    description
    priority
    status
    createdBy
    assignedTo
    timestamps

الـBusiness Rules:
    User يشوف ويعدل تذاكره فقط.
    Agent يشوف التذاكر المتassigned له.
    Admin يشوف الكل.
    User ينشئ Ticket ويحدد Priority.
    Agent/Admin يقدروا يغيروا status وpriority.
    Admin يقدر يعمل assignment.
    صاحب الـTicket والـAgent المسؤول يقدروا يضيفوا comments.
    Validation + JWT + RBAC + centralized error handling.
    GET /tickets فيه filter + search + sort + pagination.