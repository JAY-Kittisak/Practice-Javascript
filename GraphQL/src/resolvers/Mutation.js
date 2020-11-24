
//uuid ใช้ในการ generate ID ขึ้นมาใหม่
const { v4: uuidv4 } = require('uuid');

const Mutation = {
    //รับค่า parent(แหล่งกำเนิน), argument(เหตุผล), contact, tnfo
    addUserOIA(parent, args, ctx, info) { 
        const { name, age } = args;
        const { users } = ctx;

        users.push({
            id: uuidv4(),
            name,
            age
        })
        
        //หลังจากที่เรา push ข้อมูลใน Array แล้ว เราก็จะต้อง Return Array ที่มีข้อมูลตัวใหม่ออกไปด้วย
        return users;
    },
    updateUserOIA(parent, args, ctx, info) {
        const { id, name, age } = args;
        const { UserOIA, pubsub } = ctx;
        const user = users.find((user) => user.id === id);

        if (!user) {
            throw new Error(`user with id ${id} does not exist.`);
        }

        if (name) {
            user.name = name;
        }

        if (age) {
            user.age = age;
        }

        //เมื่อมีการ Update user เกิดขั้น ไอตัว Subscribe ของเราจะมีตัวติดตามการเปลี่ยนแปลงของ Update
        pubsub.publish('update_user',{
            updateSC: user
        })

        return user;
    },
    deleteUserOIA(parent, args, ctx, info) {
        const { users } = ctx;
        const index = users.findIndex((index) => index.id === args.id);
        // index === -1 คือ หาไม่เจอ
        if (index === -1) {
            throw new Error(`User with id ${args.id} does not exist.`);
        }
        //ถ้าเราจะทำการ DeleteUser ออกจาก Array เราจะใช้ เมเสิจ splice ซึ่งตัว splice จะรับ parameter คือ index กับ 1 ถ้ากำหนด เป็น 0 คือไม่ต้องลบ
        const deleteUserOIA = users.splice(index, 1);
        return deleteUserOIA[0];
    }
}

module.exports = Mutation;