import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Andrei',
            email: 'andrei_darii@yahoo.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Daniel',
            email: 'daniel_tatar@yahoo.com',
            password: bcrypt.hashSync('5678', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'Polo Ralph Lauren Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 124,
            countInStock: 30,
            brand: 'Polo',
            rating: 4.5,
            numReviews: 12,
            description: 'high quality product'
        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 111,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Nike slim pants',
            category: 'Shirts',
            image: '/images/p4.jpg',
            price: 155,
            countInStock: 51,
            brand: 'Polo',
            rating: 3.5,
            numReviews: 13,
            description: 'high quality product'
        },
        {
            name: 'Nike classic Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 15,
            brand: 'Polo',
            rating: 2.0,
            numReviews: 22,
            description: 'high quality product'
        },
        {
            name: 'Polo Ralph Lauren pants',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 60,
            countInStock: 1,
            brand: 'Polo',
            rating: 4.5,
            numReviews: 2,
            description: 'high quality product'
        },
        {
            name: 'Adidas slim pants',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 80,
            countInStock: 0,
            brand: 'Adidas',
            rating: 3.5,
            numReviews: 11,
            description: 'high quality merge product'
        }

    ]
};

export default data;