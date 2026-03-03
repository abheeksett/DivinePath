
import { Deity, Puja, Horoscope } from './types';

export const DEITIES: Deity[] = [
  {
    id: 'hanuman',
    name: 'Lord Hanuman',
    image: 'https://lh3.googleusercontent.com/d/1P7mAulRK3ukAqU3mK1ZvsF_Zv9vQ4vm_=w400-h300-p',
    description: 'The embodiment of strength and devotion.',
    mantra: 'Om Hanumate Namah'
  },
  {
    id: 'ganesha',
    name: 'Lord Ganesha',
    image: 'https://lh3.googleusercontent.com/d/1HM9-w_UE_uHbgmJ_dLysI8XGwsxxlWRv=w400-h300-p',
    description: 'The remover of obstacles.',
    mantra: 'Om Gam Ganapataye Namah'
  },
  {
    id: 'krishna',
    name: 'Lord Krishna',
    image: 'https://lh3.googleusercontent.com/d/1DzEdPdKrw_uj9CbSFHAnwM6QQgSOQlf7=w400-h300-p',
    description: 'The teacher of Bhagavad Gita.',
    mantra: 'Hare Krishna Hare Krishna'
  },
  {
    id: 'shiva',
    name: 'Lord Shiva',
    image: 'https://lh3.googleusercontent.com/d/1-sfKQ2VEtTVF91tKnBzRVCt-ijxb6Vmm=w400-h300-p',
    description: 'The auspicious transformer.',
    mantra: 'Om Namah Shivaya'
  }
];

export const FEATURED_PUJAS: Puja[] = [
  {
    id: 'p1',
    title: 'Mahamrityunjaya Puja',
    temple: 'Kashi Vishwanath, Varanasi',
    date: 'July 15, 2026',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1642774667024-e9e2f37914d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9yZCUyMHNoaXZhfGVufDB8fDB8fHww',
    tag: 'Health & Protection'
  },
  {
    id: 'p2',
    title: 'Kali Puja',
    temple: 'Dakshineshwar Temple, WB',
    date: 'Apr 15, 2026',
    price: 2100,
    image: 'https://media.istockphoto.com/id/2237349561/photo/dakshineswar-kali-temple-kolkata.webp?a=1&b=1&s=612x612&w=0&k=20&c=IuoqPB8QG1H-jZHw4BlTbCwClUIAo_eHF_r1oaGrVJI=',
    tag: 'Victory & Prosperity'
  },
  {
    id: 'p3',
    title: 'Akshaya Tritiya Puja',
    temple: 'Kalighat Temple, WB',
    date: 'Apr 20, 2026',
    price: 1500,
    image: 'https://lh3.googleusercontent.com/d/1--TmZqsTWOz887iCjZ68RuCubIE2WghY=w600-h400-p',
    tag: 'Growth and Hapiness'
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
