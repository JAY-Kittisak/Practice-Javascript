const { GraphQLServer } = require('graphql-yoga');
//uuid ใช้ในการ generate ID ขึ้นมาใหม่
const { v4: uuidv4 } = require('uuid');

//Return Object ที่อยู่ใน Array 
const usersObjectInArray = [
    {
        id: '1',
        name: 'John',
        age: '25',
        locationU: {
            state: 'bk',
            city: 'lkb'
        }
    },
    {
        id: '2',
        name: 'John1',
        age: '25',
        locationU: {
            state: 'bk',
            city: 'lkb'
        }
    },
    {
        id: '3',
        name: 'John2',
        age: '25',
        locationU: {
            state: 'bk',
            city: 'lkb'
        }
    }
]

//กำหนด schema เครืองหมาย ! คือ ให้เป็น String! Int! เท่านั้น
// [!]! ให้ Return เป็น Array เปล่า ห้าม Return เป็น Null

//ในส่วนของ mutation ใน addUser(name: String!, age: Int!) จำเป็นต้องใช้ซื่อและอายุด้วย

const typeDefs = `
    type Query {
        name: String!
        age: Int!
        isSingle: Boolean
        numbers: [Int!]!
        LocationObject: Location
        usersObjectInArray: [UserOIA!]! 
    }

    type Location {
        state: String!
        city: String!
    }

    type UserOIA {
        id: ID!
        name: String!
        age: Int!
        locationU: Location 
    }

    type Mutation {
        addUserOIA(name: String!, age: Int!): [UserOIA!]!
        updateUserOIA(id: ID!, name: String, age: Int): UserOIA!
        deleteUserOIA(id: ID!): UserOIA!
    }
`
// Resolvers(ตัวแก้ไข)
const resolvers = {
    Query: {
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
        usersObjectInArray() {
            return usersObjectInArray;
        }
    },
    Mutation: {
        //รับค่า parent(แหล่งกำเนิน), argument(เหตุผล), contact, tnfo
        addUserOIA(parent, args, ctx, info) { 
            const { name, age } = args;

            usersObjectInArray.push({
                id: uuidv4(),
                name,
                age
            })
            
            //หลังจากที่เรา push ข้อมูลใน Array แล้ว เราก็จะต้อง Return Array ที่มีข้อมูลตัวใหม่ออกไปด้วย
            return usersObjectInArray;
        },
        updateUserOIA(parent, args, ctx, info) {
            const { id, name, age } = args;
            const user = usersObjectInArray.find((user) => user.id === id);

            if (!user) {
                throw new Error(`user with id ${id} does not exist.`);
            }

            if (name) {
                user.name = name;
            }

            if (age) {
                user.age = age;
            }

            return user;
        },
        deleteUserOIA(parent, args, ctx, info) {
            const index = usersObjectInArray.findIndex((index) => index.id === args.id);
            // index === -1 คือ หาไม่เจอ
            if (index === -1) {
                throw new Error(`User with id ${args.id} does not exist.`);
            }
            //ถ้าเราจะทำการ DeleteUser ออกจาก Array เราจะใช้ เมเสิจ splice ซึ่งตัว splice จะรับ parameter คือ index กับ 1 ถ้ากำหนด เป็น 0 คือไม่ต้องลบ
            const deleteUserOIA = usersObjectInArray.splice(index, 1);
            return deleteUserOIA[0];
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

const options = {
    port: 4700,
    endpoint: '/graphql'
}

server.start(options, ({ port }) =>
    console.log(`Server started on port ${port}.`)
)
