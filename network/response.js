exports.success = (req, res, message, status) => {
    let statuCode = status || 200;
    let statusMessage = message || 'OK';

    res.status(statuCode).send({
        error: false,
        status: statuCode,
        body: statusMessage
    });
}

exports.error = (req, res, message, status) => {
    let statuCode = status || 500;
    let statusMessage = message || 'Internal server error';

    res.status(statuCode).send({
        error: false,
        status: statuCode,
        body: statusMessage
    });
}