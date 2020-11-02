// 1.หาปริมาตรทรงพีระมิด
//= 1/3*พื้นที่ฐาน*สูง
const length = 2;
const width = 2;
const height = 3;
const baseArea = length * width;
const pyramidVolume = 1/3*baseArea*height;
console.log(pyramidVolume);

// 2.สร้าง Function เพื่อไว้เรียกใช้งานได้เลื่อยไม่ต้องเขียน Code ใหม่
//function ชื่อฟังก์ชั่น(){คำสั่งต่างๆ}
function getPyramidArea() {
    const length = 2;
    const width = 2;
    const height = 3;

    const baseArea = length * width;
    const pyramidVolume = 1/3*baseArea*height;
    console.log(pyramidVolume);
}
  
getPyramidArea();
getPyramidArea();
getPyramidArea();

 // 3. parameter ใช้ในการรับค่าตัวแปร
 //function ชื่อฟังก์ชั่น(parameter1,parameter2,...){คำสั่งต่างๆ}
 function getPyramidAreaParameter(length,width,height) {
    const baseArea = length * width;
    const pyramidVolume = 1/3*baseArea*height;
    console.log(pyramidVolume);
}
getPyramidAreaParameter(8,8,20);
getPyramidAreaParameter(4,4,3);

// 4. return คือเอามาใช้เพื่อ คืนค่ากลับมา
function getPyramidAreaReturn(length,width,height) {
    const baseArea = length * width;
    const getPyramidAreaReturn = 1/3*baseArea*height;
    return getPyramidAreaReturn;
}

const area1 = getPyramidAreaReturn(8,8,20);
const area2 = getPyramidAreaReturn(4,4,3);
console.log(area1+area2)
console.log('Area 1 = '+ area1 + ',  Area 1 = '+ area2);  