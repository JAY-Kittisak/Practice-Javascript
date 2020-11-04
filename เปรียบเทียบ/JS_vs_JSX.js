//JS จะเกิด Bug ได้ง่ายกว่า
let count1 = 0
const incBtn = document.getElementById("incBtn");
const counter = document.getElementById("counter");

incBtn.onclick = function() {
    counter.textContent = ++count1
} 




//JSX
// State คือ ค่าของข้อมูล
// ใช้ useState ในการประกาศ State
function Counter() {
    //    [count คือค่าของ State นะขนะนั้น เมื่อ useState เปลี่ยน count ก็เปลี่ยนไปด้วย]
    //           setCount ไว้ set ค่าของ State ใหม่ ดังนั้นถ้าเราจะ Update ค่าของ count ก็จะต้องเรียกใช้ setCount
    const [count,setCount] = useState(0)

    return(
        //แฟคเม้น <></>
    <>
        <div>{count}</div>
        <button onclick = {() => setCount(count + 1)}>inc</button>
    </>
    
    )
}