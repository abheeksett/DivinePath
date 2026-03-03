
import { Deity, Puja, Horoscope } from './types';

export const DEITIES: Deity[] = [
  {
    id: 'hanuman',
    name: 'Lord Hanuman',
    image: 'https://picsum.photos/seed/hanuman/400/500',
    description: 'The embodiment of strength and devotion.',
    mantra: 'Om Hanumate Namah'
  },
  {
    id: 'ganesha',
    name: 'Lord Ganesha',
    image: 'https://picsum.photos/seed/ganesha/400/500',
    description: 'The remover of obstacles.',
    mantra: 'Om Gam Ganapataye Namah'
  },
  {
    id: 'krishna',
    name: 'Lord Krishna',
    image: 'https://picsum.photos/seed/krishna/400/500',
    description: 'The teacher of Bhagavad Gita.',
    mantra: 'Hare Krishna Hare Krishna'
  },
  {
    id: 'shiva',
    name: 'Lord Shiva',
    image: 'https://picsum.photos/seed/shiva/400/500',
    description: 'The auspicious transformer.',
    mantra: 'Om Namah Shivaya'
  }
];

export const FEATURED_PUJAS: Puja[] = [
  {
    id: 'p1',
    title: 'Mahamrityunjaya Puja',
    temple: 'Kashi Vishwanath, Varanasi',
    date: 'Dec 15, 2024',
    price: 1100,
    image: 'https://picsum.photos/seed/lord-shiva/600/400',
    tag: 'Health & Protection'
  },
  {
    id: 'p2',
    title: 'Sudarshana Homam',
    temple: 'Tirupati Temple, AP',
    date: 'Dec 18, 2024',
    price: 2100,
    image: 'https://picsum.photos/seed/puja2/600/400',
    tag: 'Victory & Prosperity'
  },
  {
    id: 'p3',
    title: 'Gauri Shankar Puja',
    temple: 'Meenakshi Amman, Madurai',
    date: 'Dec 20, 2024',
    price: 1500,
    image: 'https://picsum.photos/seed/puja3/600/400',
    tag: 'Marital Harmony'
  }
];

export const ZODIAC_SIGNS: Horoscope[] = [
  { sign: 'Aries', icon: '♈', description: '' },
  { sign: 'Taurus', icon: '♉', description: '' },
  { sign: 'Gemini', icon: '♊', description: '' },
  { sign: 'Cancer', icon: '♋', description: '' },
  { sign: 'Leo', icon: '♌', description: '' },
  { sign: 'Virgo', icon: '♍', description: '' },
  { sign: 'Libra', icon: '♎', description: '' },
  { sign: 'Scorpio', icon: '♏', description: '' },
  { sign: 'Sagittarius', icon: '♐', description: '' },
  { sign: 'Capricorn', icon: '♑', description: '' },
  { sign: 'Aquarius', icon: '♒', description: '' },
  { sign: 'Pisces', icon: '♓', description: '' },
];
