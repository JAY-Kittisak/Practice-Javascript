const person = {
    name: 'Varayut',
    address: {
        city: 'Bangkok'
    },
    address1: 'test',
    address2: {
        city2: 'Bangkok2'
    }
};
//แบบเก่า
const city = person.address.city;  //ถ้าไม่มีเข้ามูลจะเกิด Error
//แบบเก่า
const city1 = person && person.address1 && person.address1.city1; //ถ้าไม่มีเข้ามูลจะแจ้ง Undefined
//ES2020
const city2 = person?.address2?.city2; //เขียนสั่นกว่าแบบด้านบน
console.log(city);
console.log(city1);
console.log(city2);