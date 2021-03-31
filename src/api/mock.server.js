import { createServer, Model } from 'miragejs';
import faker from "faker";

faker.seed(123);

export default function mockServer() {
    createServer({
        models : {
            product : Model
        },

        seeds(server) {
            [...Array(50)].forEach(item => {
                server.create("product", {
                    id: faker.datatype.uuid(),
                    name: faker.commerce.productName(),
                    desc : faker.commerce.productDescription(),
                    image: faker.random.image(),
                    price: faker.commerce.price(),
                    material: faker.commerce.productMaterial(),
                    brand: faker.random.arrayElement([
                        "Apple",
                        "Samsung",
                        "Microsoft",
                        "Panasonic",
                        "Acer",
                        "Dell",
                        "HP",
                        "Alienware",
                        "Asus",
                        "Realme",
                        "Redmi",
                        "Motorola"
                    ]),
                    inStock: faker.datatype.boolean(),
                    fastDelivery: faker.datatype.boolean(),
                    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
                    offer: faker.random.arrayElement([
                        "Save 50",
                        "70% bonanza",
                        "Republic Day Sale"
                    ]),
                    idealFor: faker.random.arrayElement([
                        "Men",
                        "Women",
                        "Girl",
                        "Boy",
                        "Senior"
                    ]),
                    level: faker.random.arrayElement([
                        "beginner",
                        "amateur",
                        "intermediate",
                        "advanced",
                        "professional"
                    ]),
                    color: faker.commerce.color()
                })
            })
        },

        routes() {
            this.get('/api/products')
        },    
    })
}