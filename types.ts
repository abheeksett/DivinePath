
export interface Deity {
  id: string;
  name: string;
  image: string;
  description: string;
  mantra: string;
}

export interface Puja {
  id: string;
  title: string;
  temple: string;
  date: string;
  price: number;
  image: string;
  tag: string;
}

export interface Horoscope {
  sign: string;
  icon: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
