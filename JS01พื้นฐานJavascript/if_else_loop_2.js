// 4. การตรวจสอบเงื่อนไข (Condition)
let score = 40;

if (score >= 80) {   //fi (เงื่อนไข){คำสั่งต่าง}
    console.log('aaaa');
} 
else if( score >= 70) {
    console.log('b')
}
else {
    console.log('c')
}

// 5. loop 
//for(ค่าเริ่มต้น; เงื่อนไข; การเปลี่ยนแปลง){คำสั่งต่างๆ}
//  (เริ่มต้นที่ i=1 ; ถ้า i น้อยกว่า 12 ให้ทำงานต่อไป ; ใส่การเปลี่ยนแปลงของ i )
for (let i = 1; i<= 12; i++) {
    let answer = i ** 2;
    console.log(i,answer);
}

// คำสั่งที่ใช้ได้ใน loop
// -continue ถ้าเจอ continue โปรแกรมจะทำการข้าม loop นั้นไปเลย
// -break 
for (let i = 1; i<= 12; i++) {
    
    //ถ้า i หาร 2 ลงตัวก็จะข้ามไป หรือ  i = เลขคู่
    if (i%2 === 0){
        continue;
    }
    //ถ้า  i หาร 10 ลงตัวให้ทำการ break
    if (i%10 === 0){
        break;
    }
    let answer = i ** 2;
    console.log(i,answer);
}