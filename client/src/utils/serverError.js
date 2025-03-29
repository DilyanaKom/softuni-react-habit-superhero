export default function handleServerError(status, result) {
    const statusCodes = {
        400: "Please check the data sent.",
        401: "Unauthorized. Please log in.",
        403: "Incorrect email or password.",
        404: "The resource you requested does not exist.",
        409: "Resource already exists.",
        500: "Internal Server Error. Please try again later."
    };

    if(statusCodes[status]){
        throw new Error(statusCodes[status])
    };

    if(result && result.message){
        throw new Error(result.message);
    }

    throw new error("Unknown error ocurred.")


}