export const validate = (Name, Email, Mobile, Subject, Message) => {
    const Error = {};
    const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!Name) {
        Error.name = "Required"
    } else if (Name.length <= 2) {
        Error.name = "Check Your Name"
    }

    if (!Email) {
        Error.email = "Required"
    } else if (!EmailRegex.test(Email)) {
        Error.email = "Invalid Email"
    }

    if (!Mobile) {
        Error.mobile = "Required"
    } else if (isNaN(Number(Mobile))) {
        Error.mobile = "Only Numbers"
    } else if (Mobile.length !== 10) {
        Error.mobile = "Invaild Mobile Number"
    }

    if (!Subject) {
        Error.subject = "Required"
    } else if (Subject.length <= 3) {
        Error.subject = "Check Your Subject"
    }

    if (!Message) {
        Error.message = "Required"
    } else if (Message.length <= 4) {
        Error.message = "Too Short!"
    }

    return Error;


}

