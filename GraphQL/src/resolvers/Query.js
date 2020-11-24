// เอามาจากไฟล์ index ใส่ const เปลี่ยนจาก : เป็น =
const Query = {
    name() {
        return 'Kittisak';
    },
    age() {
        return 26;
    },
    isSingle() {
        return null
    },
    numbers() {
        return [10,20,30,40,50]
    },
    LocationObject() {
        //Return เป้น Object
        return {
            state: 'Bangkok',
            city: 'Ladkrabang'
        } 
    },
    users(parent, args, ctx, info) {
        const { UserOIA } = ctx;
        return users;
    }
}

module.exports = Query;