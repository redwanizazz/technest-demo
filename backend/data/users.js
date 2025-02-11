import bcrypt from 'bcryptjs';

const users = [{
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    },
    {
        name: 'Abeer',
        email: 'abeer@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Durba',
        email: 'durba@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }
]

export default users;