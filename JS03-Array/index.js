let fruit1 = 'Apple';
let fruit2 = 'Banana';
let fruit3 = 'Carrot';
// 1. Array [index '0','1','2']
const fruits = ['Apple', 'Banana', 'Carrot'];
console.log(fruits[1]);
console.log(fruits);
// Result*****["Apple", "Banana", "Carrot"]


// 2. เปลี่ยนค่าของ Array
fruits[1] = 'Watermelon';
console.log(fruits[1]);
console.log(fruits);
// Result*****["Apple", "Watermelon", "Carrot"]


// 3. เพิ่ม ลบ ข้อมูล
// 3.1 push
fruits.push('banana');
console.log(fruits);
 // Result***** ["Apple", "Watermelon", "Carrot", "banana"]


// 3.2 pop
fruits.pop();
console.log(fruits);
// Result***** ["Apple", "Watermelon", "Carrot"]

// 4.splice(ตำแหน่ง, จำนวนตัที่จะลบ, ข้อมูลที่เราจะใส่เพิ่ม)

