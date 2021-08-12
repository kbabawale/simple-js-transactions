var AppUsers = [];

exports.addUser = (user) => {
    AppUsers = [...AppUsers, user];
    return `${user.name} added`;
}

exports.depositFunds = (user, amount) => {
    let foundUser = AppUsers.filter(x => x.name == user)[0];
    if (foundUser) {
        foundUser['balance'] += parseInt(amount);
        let pool = AppUsers.filter(x => x.name !== user);
        AppUsers = [...pool, foundUser];
        return true;
    }
    return false;
}

exports.transferFunds = (fromUser, toUser, amount) => {
    let fromUserFound = AppUsers.filter(x => x.name == fromUser)[0];
    let toUserFound = AppUsers.filter(x => x.name == toUser)[0];

    if (fromUserFound && toUserFound) {
        fromUserFound['balance'] -= parseInt(amount);
        toUserFound['balance'] += parseInt(amount);
        let pool = AppUsers.filter(x => x.name !== fromUser && x.name !== toUser);
        AppUsers = [...pool, fromUserFound, toUserFound];
        return true;
    }
    return false;
}

exports.checkBalance = (user) => {
    let foundUser = AppUsers.filter(x => x.name == user)[0];
    if (foundUser) {
        return parseInt(Math.abs(foundUser['balance']));
    }
    return false;
}

exports.sendOutside = (user, amount) => {
    let foundUser = AppUsers.filter(x => x.name == user)[0];
    if (foundUser) {
        foundUser['balance'] -= parseInt(amount);
        let pool = AppUsers.filter(x => x.name !== user);
        AppUsers = [...pool, foundUser];
        return true;
    }
    return false;
}