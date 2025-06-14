import type { Product, Article } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 35.99,
    description: 'A popular and easy-to-care-for houseplant with iconic split leaves. Thrives in bright, indirect light.',
    category: 'Indoor Plants',
    imageUrl: 'https://res.cloudinary.com/dnkrfdjzl/image/upload/t_2/v1749587065/monstera_hwxpsd.png',
    dataAiHint: 'monstera plant',
    careInstructions: 'Water once a week, allowing soil to dry out between waterings. Prefers humid environments.',
    sizeOptions: ['Small', 'Medium', 'Large'],
    featured: true,
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 25.50,
    description: 'A hardy succulent known for its air-purifying qualities and striking upright foliage.',
    category: 'Indoor Plants',
    imageUrl: 'https://res.cloudinary.com/dnkrfdjzl/image/upload/v1749587286/Sansevieria-cylindrica-Straight-Cylindrical-Snake-Plant-45cm_rdt0d3.webp',
    dataAiHint: 'snake plant',
    careInstructions: 'Water sparingly, every 2-4 weeks. Tolerates low light but prefers bright, indirect light.',
    sizeOptions: ['Medium', 'Large'],
    featured: true,
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    price: 75.00,
    description: 'A trendy statement plant with large, violin-shaped leaves. Requires bright, consistent light.',
    category: 'Indoor Plants',
    imageUrl: 'https://res.cloudinary.com/dnkrfdjzl/image/upload/v1749587875/fig_jb6isd.png',
    dataAiHint: 'fiddle leaf',
    careInstructions: 'Water when top inch of soil is dry. Avoid drafts and sudden temperature changes.',
    sizeOptions: ['Large', 'Extra Large'],
  },
  {
    id: '4',
    name: 'Lavender Plant',
    price: 15.00,
    description: 'A fragrant herb known for its calming properties and beautiful purple flowers. Loves full sun.',
    category: 'Outdoor Plants',
    imageUrl: 'https://res.cloudinary.com/dnkrfdjzl/image/upload/v1749587629/Untitled-41_kxtgei.webp',
    dataAiHint: 'lavender plant',
    featured: true,
  },
  {
    id: '5',
    name: 'Succulent Mix',
    price: 19.99,
    description: 'A collection of assorted low-maintenance succulents, perfect for beginners.',
    category: 'Succulents',
    imageUrl: 'https://res.cloudinary.com/dnkrfdjzl/image/upload/v1749587935/60bf1a6ea8d1edbd89a53c12_variety-of-succulents-in-a-white-bowl_main_vv1epr.jpg',
    dataAiHint: 'succulent garden',
  },
  {
    id: '6',
    name: 'Premium Potting Mix',
    price: 12.99,
    description: 'Nutrient-rich soil blend for healthy plant growth.',
    category: 'Gardening Supplies',
    imageUrl: 'https://res.cloudinary.com/dnkrfdjzl/image/upload/v1749587787/2148672707-2_jkuv4j.jpg',
    dataAiHint: 'potting soil',
    featured: true,
  },
];

export const mockArticles: Article[] = [
  {
    slug: 'beginner-guide-to-houseplants',
    title: 'A Beginner\'s Guide to Houseplant Care',
    summary: 'Learn the basics of keeping your indoor plants happy and healthy with this comprehensive guide.',
    content: '<p>Caring for houseplants can be incredibly rewarding. This guide covers the essentials: lighting, watering, soil, and common issues. We\'ll help you choose the right plants for your space and skill level.</p><h3>Light</h3><p>Most houseplants prefer bright, indirect light. South-facing windows are often too intense, while north-facing windows might not provide enough light. East or west-facing windows are usually ideal.</p><h3>Watering</h3><p>Overwatering is a common mistake. It\'s generally best to let the top inch or two of soil dry out between waterings. The specific needs will vary by plant type.</p>',
    imageUrl: 'https://res.cloudinary.com/dnkrfdjzl/image/upload/v1749588557/tools_jhkpgo.png',
    dataAiHint: 'indoor gardening',
    author: 'Jane GreenThumb',
    date: '2024-07-15',
  },
  {
    slug: 'choosing-the-right-pot',
    title: 'How to Choose the Right Pot for Your Plant',
    summary: 'The pot you choose can significantly impact your plant\'s health. Discover what to look for.',
    content: '<p>Selecting the right pot involves more than just aesthetics. Consider drainage, material, and size. Proper drainage is crucial to prevent root rot. Pots made of terracotta are porous and allow for better air and water flow, while plastic pots retain moisture longer.</p>',
    imageUrl: 'https://res.cloudinary.com/dnkrfdjzl/image/upload/t_1/v1749588558/planss_xvai4y.png',
    dataAiHint: 'plant pots',
    author: 'Alex Gardener',
    date: '2024-07-01',
  },
  {
    slug: 'common-plant-pests',
    title: 'Identifying and Treating Common Plant Pests',
    summary: 'Keep an eye out for these common pests and learn how to deal with them effectively.',
    content: '<p>Spider mites, aphids, and mealybugs are common nuisances for plant owners. Learn to identify them early and use organic pest control methods like neem oil or insecticidal soap to keep your plants pest-free.</p>',
    imageUrl: 'https://res.cloudinary.com/dnkrfdjzl/image/upload/v1749588558/hero_ut3oxh.png',
    dataAiHint: 'plant pests',
    author: 'Chris Roots',
    date: '2024-06-20',
  },
];
