// pages/api/sofas.js

export default function handler(req, res) {
    const sofas = [
      {
        id: 1,
        name: 'Modern Sofa',
        description: 'A comfortable modern sofa.',
        price: 499.99,
        imageUrl: 'https://example.com/images/modern-sofa.jpg',
      },
      {
        id: 2,
        name: 'Classic Sofa',
        description: 'A stylish classic sofa.',
        price: 799.99,
        imageUrl: 'https://example.com/images/classic-sofa.jpg',
      },
      {
        id: 3,
        name: 'L-Shaped Sofa',
        description: 'A spacious L-shaped sofa.',
        price: 699.99,
        imageUrl: 'https://example.com/images/l-shaped-sofa.jpg',
      },
      {
        id: 4,
        name: 'Recliner Sofa',
        description: 'A reclining sofa for ultimate relaxation.',
        price: 899.99,
        imageUrl: 'https://example.com/images/recliner-sofa.jpg',
      },
    ];
  
    res.status(200).json(sofas);
  }
  