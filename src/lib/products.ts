export type Product = {
  id: string;
  name: string;
  description: string;
  category: 'Coir Pith' | 'Coir Fibre';
  imageId: string;
};

export const products: Product[] = [
  {
    id: 'pith-block',
    name: 'Coir Pith Blocks',
    description: 'Compressed 5kg blocks of cocopeat, ideal for bulk usage in commercial horticulture and green houses. Expands to 70-75 liters.',
    category: 'Coir Pith',
    imageId: 'product-pith-block',
  },
  {
    id: 'pith-bag',
    name: 'Coir Grow Bags',
    description: 'Ready-to-use grow bags with treated cocopeat, perfect for hydroponics and cultivation of tomatoes, cucumbers, and peppers.',
    category: 'Coir Pith',
    imageId: 'product-pith-bag',
  },
  {
    id: 'fibre-bale',
    name: 'Coir Fibre Bales',
    description: 'High-quality "Thanga Naaru" (Golden Fibre) compressed into 120kg bales. Used for upholstery, erosion control, and mattresses.',
    category: 'Coir Fibre',
    imageId: 'product-fibre-bale',
  },
  {
    id: 'fibre-raw',
    name: 'Raw Coir Fibre',
    description: 'Loose, golden-brown coir fibres, carefully processed for strength and durability. Suitable for various industrial applications.',
    category: 'Coir Fibre',
    imageId: 'product-fibre-raw',
  },
];
