/* 
exports.success = (req, res, message, status) => {
    let statuCode = status || 200;
    let statusMessage = message || 'OK';

    res.status(statuCode).send({
        error: false,
        status: statuCode,
        body: statusMessage
    });
}
 */
exports.success = (req, res, message = "", status = StatusCodes.OK) => {
    res.status(status).send({
        error: false,
        status: status,
        body: message
    });
}

/* 
exports.error = (req, res, message, status) => {
    let statuCode = status || 500;
    let statusMessage = message || 'Internal server error';

    res.status(statuCode).send({
        error: false,
        status: statuCode,
        body: statusMessage
    });
} */
exports.error = (req, res, message = "Internal server error", status = ReasonPhrases.INTERNAL_SERVER_ERROR) => {
    res.status(status).send({
        error: true,
        status: status,
        body: message
    });
}