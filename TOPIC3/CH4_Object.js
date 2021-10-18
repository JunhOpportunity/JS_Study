//==============================================================//
// 객체 지향 프로그래밍 WITH JS
const user = {
    email: 'email@email.com',
    birthdate: '2001-02-14',
    buy(item) {
        console.log(`${this.email} buys ${item.name}`); // this는 현재 객체인 user 객체 자체를 의미
    },
};

const item = {
    name: '스웨터',
    price: 30000,
};

console.log(user.email);
console.log(user.birthdate);
user.buy(item);
//==============================================================//


//==============================================================//
// Factory Function : 함수를 이용해 함수 안에 있는 객체를 생성하는 것
function createUserObject(email, birthdate) {
    const userObject = {
        email: email,
        brithdate: birthdate,
        buyItem(item) {
            console.log(`${this.email} buys ${item.name}`);
        },

    };
    return userObject;
}

const user1 = createUserObject('firstPerson@email.com', '2020-01-01');
const user2 = createUserObject('secondPerson@email.com', '2020-02-02');

user1.buyItem(item);
user2.buyItem(item);


