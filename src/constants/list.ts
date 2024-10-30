import { END_POINT } from "@/constants/endpoint";

export const VALID_IMAGE = [
  'image/png',
  'image/jpeg',
  'image/jpg',
];

export const slideProducts = [
  {
    id: 'i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6',
    name: 'Basic T-Shirt',
    price: 15,
    description: 'A comfortable and stylish basic t-shirt.',
    category: 't-shirts',
    colors: ['White', 'Blue', 'Green'],
    sizes: ['S', 'M', 'L'],
    image: 'https://i.ibb.co/njkCQHq/t-shirt-3.webp',
    imageDetail: [
      'https://i.ibb.co/njkCQHq/t-shirt-3.webp',
      'https://i.ibb.co/njkCQHq/t-shirt-3.webp',
      'https://i.ibb.co/njkCQHq/t-shirt-3.webp'
    ],
    rating: '10k',
    sell: 'Best quality',
    stoct: 1710
  },
  {
    id: 'u3k8h9f1-9g22-3h67-2g13-5k6g9k45g4t3',
    name: 'Sporty T-Shirt',
    price: 25,
    description: 'Perfect for your workout sessions.',
    category: 't-shirts',
    colors: ['Black', 'Gray', 'white', 'Maroon'],
    sizes: ['M', 'L', 'XL'],
    image: 'https://i.ibb.co/WtgcmWR/t-shirt-2.webp',
    imageDetail: [
      'https://i.ibb.co/WtgcmWR/t-shirt-2.webp',
      'https://i.ibb.co/WtgcmWR/t-shirt-2.webp',
      'https://i.ibb.co/WtgcmWR/t-shirt-2.webp'
    ],
    rating: '1k',
    sell: 'Best quality',
    stoct: 1118
  },
  {
    id: 'y4l7i8o1-2j33-4k56-8p92-7m9b8j45h7u8',
    name: 'Casual T-Shirt',
    price: 20,
    description: 'Stay casual and comfortable.',
    category: 't-shirts',
    colors: ['White', 'Yellow', 'Pink'],
    sizes: ['XS', 'S', 'M', 'L'],
    image: 'https://i.ibb.co/J3GnxxJ/t-shirt-4.webp',
    imageDetail: [
      'https://i.ibb.co/J3GnxxJ/t-shirt-4.webp',
      'https://i.ibb.co/J3GnxxJ/t-shirt-4.webp',
      'https://i.ibb.co/J3GnxxJ/t-shirt-4.webp'
    ],
    rating: '2k',
    sell: 'Best quality',
    stoct: 1710
  },
  {
    id: 'o9b5l2e3-5t78-2v45-7h92-4c8h7d99a3u1',
    name: 'Graphic T-Shirt',
    price: 24,
    description: 'Unique graphic design for a standout look.',
    category: 't-shirts',
    colors: ['Blue', 'Purple'],
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://i.ibb.co/fvhz0L9/t-shirt-1.webp',
    imageDetail: [
      'https://i.ibb.co/fvhz0L9/t-shirt-1.webp',
      'https://i.ibb.co/fvhz0L9/t-shirt-1.webp'
    ],
    rating: '9k',
    sell: 'Best quality',
    stoct: 1710
  }
];

export const slideImage = [
  'https://i.ibb.co/MRTgRYj/shirt-1.webp',
  'https://i.ibb.co/h1pRWGY/jacket-5-2.webp',
  'https://i.ibb.co/3d7b9SB/jean-2.webp'
];

export const navItems = [
  { name: 'Home', url: END_POINT.HOME },
  { name: 'About Us', url: END_POINT.ABOUT_US },
  { name: 'Contact', url: END_POINT.CONTACT }
];

export const itemsHome = [
  { name: 'Product', url: END_POINT.HOME },
  { name: 'Categories', url: END_POINT.HOME },
  { name: 'Login', url: END_POINT.SIGN_IN }
];

export const itemsShop = [
  { name: 'T-Shirt', url: END_POINT.HOME },
  { name: 'Jacket', url: END_POINT.HOME },
  { name: 'Shirt', url: END_POINT.HOME },
  { name: 'Jeans', url: END_POINT.HOME }
];

export const itemsCategories = [
  { name: 'Men', url: END_POINT.HOME },
  { name: 'Children', url: END_POINT.HOME },
  { name: 'Woman', url: END_POINT.HOME }
];

export const itemsContact = [{ name: 'mangcoding@gmail.com', url: '' }];