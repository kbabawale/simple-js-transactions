const { addUser, depositFunds, transferFunds, checkBalance, sendOutside } = require('./controller.js');

const initApp = () => {
    const submitButton = document.querySelector('#submitBtn');
    submitButton.addEventListener('click', runApp);
}

const runApp = () => {
    addUser({ name: 'User A', balance: 0 });
    addUser({ name: 'User B', balance: 0 });
    depositFunds('User A', 10);
    depositFunds('User B', 20);
    transferFunds('User B', 'User A', 15);
    checkBalance('User A');
    checkBalance('User B');
    sendOutside('User A', 25);
}

initApp();