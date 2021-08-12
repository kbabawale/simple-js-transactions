const { addUser, depositFunds, transferFunds, checkBalance, sendOutside } = require('./controller');

test('User A is added to the app', () => {
    let addedUserA = addUser({ name: 'User A', balance: 0 });
    expect(addedUserA).toBe('User A added');
});
test('User A deposits 10 dollars', () => {
    let res = depositFunds('User A', 10);
    expect(res).toBeTruthy();
});
test('User B is added to the app', () => {
    let addedUserB = addUser({ name: 'User B', balance: 0 });
    expect(addedUserB).toBe('User B added');
});
test('User B deposits 20 dollars', () => {
    let res = depositFunds('User B', 10);
    expect(res).toBeTruthy();
});
test('User B sends 15 dollars to User A', () => {
    let res = transferFunds('User B', 'User A', 15);
    expect(res).toBeTruthy();
});
test('User A checks their balance and has 25 dollars', () => {
    let res = checkBalance('User A');
    expect(res).toBe(25);
});
test('User B checks their balance and has 5 dollars', () => {
    let res = checkBalance('User B');
    expect(res).toBe(5);
});
test('User A transfers 25 dollars from their account', () => {
    let res = sendOutside('User A', 25);
    expect(res).toBeTruthy();
});
test('User A checks their balance and has 0 dollars', () => {
    let res = checkBalance('User A');
    expect(res).toBe(0);
});