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