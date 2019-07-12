const Categories = {
  animal: {
    icon: '🐵',
    content: 'ANIMAL',
    link: '/animal',
  },
  career: {
    icon: '👨‍💼',
    content: 'CAREER',
    link: '/career',
  },
  celebrity: {
    icon: '👨‍🎨',
    content: 'CELEBRITY',
    link: '/celebrity',
  },
  dev: {
    icon: '🤓',
    content: 'DEV',
    link: '/dev',
  },
  explicit: {
    icon: '🔞',
    content: 'EXPLICIT',
    link: '/explicit',
  },
  fashion: {
    icon: '👗',
    content: 'FASHION',
    link: '/fashion',
  },
  food: {
    icon: '🍕',
    content: 'FOOD',
    link: '/food',
  },
  history: {
    icon: '📜',
    content: 'HISTORY',
    link: '/history',
  },
  money: {
    icon: '💸',
    content: 'MONEY',
    link: '/money',
  },
  movie: {
    icon: '🎥',
    content: 'MOVIE',
    link: '/movie',
  },
  music: {
    icon: '🎵',
    content: 'MUSIC',
    link: '/music',
  },
  political: {
    icon: '⚖️',
    content: 'POLITICAL',
    link: '/political',
  },
  religion: {
    icon: '⛪',
    content: 'RELIGION',
    link: '/religion',
  },
  science: {
    icon: '🔬',
    content: 'SCIENCE',
    link: '/science',
  },
  sport: {
    icon: '🚴',
    content: 'SPORT',
    link: '/sport',
  },
  travel: {
    icon: '🧳',
    content: 'TRAVEL',
    link: '/travel',
  },
};

export default Categories;
export const getCategory = category => Categories[category];
