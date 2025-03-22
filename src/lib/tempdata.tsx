import { product_data } from "./datatype/product";

const generateRandomProduct = (id: number): product_data => {
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "New Balance"];
  const names = ["Air Max", "Ultra Boost", "Classic Leather", "Fresh Foam", "Zoom Pegasus"];
  const sizes = ["US 7", "US 8", "US 9", "US 10", "US 11"];
  const colors: color[] = [
    {id:1 , name: "Red", hex: "FF0000" },
    {id:2 , name: "Blue", hex: "0000FF" },
    {id:3 , name: "Black", hex: "000000" },
    {id:4 , name: "White", hex: "FFFFFF" },
    {id:5 , name: "Green", hex: "008000" },
  ];

  const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  const getRandomSubset = (arr: any[], count: number) => arr.sort(() => 0.5 - Math.random()).slice(0, count);

  return {
    id,
    name: `${random(names)} ${id}`,
    price: (Math.random() * 100 + 50).toFixed(2),
    description: "A high-quality shoe for every occasion.",
    rating: +(Math.random() * 5).toFixed(1),
    image: `https://picsum.photos/400/800?random=${id}.jpg`,
    images: [
      `https://picsum.photos/400/800?random=${id + 2}.jpg`,
      `https://picsum.photos/400/800?random=${id + 1}.jpg`,
    ],
    category_id: Math.floor(Math.random() * 5) + 1,
    brand: random(brands),
    sale_price: (Math.random() * 80 + 30).toFixed(2),
    discount: Math.floor(Math.random() * 30),
    property: {
      size: getRandomSubset(sizes, 3),
      color: getRandomSubset(colors, 2),
      other: {
        material: "Leather",
        weight: "500g",
      },
    },
  };
};

export const product_list_example: product_data[] = Array.from({ length: 10 }, (_, i) =>
  generateRandomProduct(i + 1)
);


export const getRandomProducts = (length:number) => {
  const shuffled = [...product_list_example].sort(() => 0.5 - Math.random());
  return shuffled.slice(1, length);
};