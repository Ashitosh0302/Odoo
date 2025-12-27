export const sendSuccess = (res, data, message = "Success") =>
{
    res.status(200).json({
        success: true,
        message,
        data
    });
};

export const sendError = (res, message = "Error", statusCode = 500) =>
{
    res.status(statusCode).json({
        success: false,
        message
    });
};

export const sendOverdueNotification = (request) =>
{
    console.log(`Overdue notification sent for request ${request.id}`);
};
