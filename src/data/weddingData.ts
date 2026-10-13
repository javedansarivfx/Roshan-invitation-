export interface WeddingEvent {
  id: string;
  name: string;
  arabicName: string;
  dateStr: string;
  timingDetails: {
    label: string;
    time: string;
    sublabel?: string;
  }[];
  venueTitle: string;
  address: string;
  dressCode: string;
  dressColorPalette: string[];
  description: string;
  highlights: string[];
}

export interface StoryMilestone {
  id: string;
  title: string;
  arabicSubtitle: string;
  caption: string;
  description: string;
  image: string;
}

// Configurable Wedding Year (defaults to 2026, easily adjustable)
export const WEDDING_YEAR = 2026;

export const WEDDING_DATA = {
  mainHeading: 'ROSHAN WEDS JAVED',
  invitationSide: "Presented with immense joy and blessings from the Bride's Family (Hazi Raisuddin & Family)",
  groom: {
    name: 'Javed Ansari',
    father: 'Farookh Ansari',
    parentLine: 'Son of Farookh Ansari',
    village: 'Sikanderpur',
    address: 'Nehtour, Village Sikanderpur',
    fullAddress: 'Nehtour, Village Sikanderpur',
    brothers: ['Shadab Ahmad', 'Danish Ansari'],
    brothersInLaw: ['Sakib Ansari', 'Gufran Ansari'],
  },
  bride: {
    name: 'Roshan Ansari',
    father: 'Hazi Raisuddin',
    parentLine: 'Daughter of Hazi Raisuddin',
    address: 'Nehtour, Bairam Nagar',
    fullAddress: 'Nehtour, Bairam Nagar',
    uncles: ['Hazi Saiduddin', 'Sharifuddin', 'Kamruddin'],
    brother: 'Tanveer Ansari',
    brothersInLaw: ['Nadeem Ansari', 'Aafak Ansari', 'Jahid Ansari'],
  },
  invitationMessage:
    "With the grace of Allah Subhanahu wa Ta'ala and with the warmest blessings of our elders, Hazi Raisuddin & family cordially invite you to celebrate the auspicious Nikah celebrations of Roshan Ansari and Javed Ansari.",
  monogram: 'R & J',
  venue: {
    name: 'Sangam Sarovar',
    road: 'Noorpur Road',
    city: 'Nehotur',
    shortAddress: 'Noorpur Road, Nehotur',
    fullAddress: 'Sangam Sarovar, Noorpur Road, Nehotur, Uttar Pradesh',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sangam+Sarovar+Noorpur+Road+Nehtour',
    mapImage: '/src/assets/images/illustrated_map_1790681453574.jpg',
  },
  countdownTarget: `${WEDDING_YEAR}-12-05T12:00:00`,
};

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'haldi',
    name: 'HALDI CEREMONY',
    arabicName: 'مراسم الحناء والصفاء',
    dateStr: '04 DECEMBER',
    timingDetails: [
      {
        label: 'STARTS',
        time: '6:00 PM',
        sublabel: 'EVENING',
      },
    ],
    venueTitle: 'Nehtour, Bairamnagar',
    address: 'Nehtour, Bairamnagar',
    dressCode: 'Warm Festive Yellow, Mustard & Ivory',
    dressColorPalette: ['#E5A93B', '#D97706', '#FAF7F2', '#2D241E'],
    description:
      'A joyful pre-wedding evening adorned in fragrant turmeric, traditional songs, and radiant family celebrations marking the blessed beginnings at Nehtour, Bairamnagar.',
    highlights: [
      'Turmeric & Ubtan Ceremony',
      'Traditional Family Sangeet & Folk Melodies',
      'Festive Awadhi Refreshments',
    ],
  },
  {
    id: 'nikah',
    name: 'BARAAT & NIKAH',
    arabicName: 'عقد القران والبرات الملكي',
    dateStr: '05 DECEMBER',
    timingDetails: [
      {
        label: 'BARAAT',
        time: '12:00 PM',
        sublabel: 'NOON',
      },
      {
        label: 'NIKAH',
        time: '4:00 PM',
        sublabel: 'EVENING',
      },
    ],
    venueTitle: 'Sangam Sarovar',
    address: 'Noorpur Road, Nehotur',
    dressCode: 'Royal Sherwani & Traditional Elegance',
    dressColorPalette: ['#C59A3F', '#FAF7F2', '#1B4D3E', '#8C6D3B'],
    description:
      'The sacred covenant of matrimony solemnized with prayers and blessings, welcomed by the grand Baraat reception and celebratory banquet.',
    highlights: [
      'Warm Welcome of Baraat (12:00 PM Noon)',
      'Khutbah an-Nikah & Sacred Vows (4:00 PM)',
      'Solemn Nikahnama Signing',
      'Grand Royal Shahi Dawat Feast at Sangam Sarovar',
    ],
  },
  {
    id: 'walima',
    name: 'WALIMA',
    arabicName: 'وليمة العرس المباركة',
    dateStr: '06 DECEMBER',
    timingDetails: [
      {
        label: 'TIME',
        time: '12:00 PM',
        sublabel: 'NOON',
      },
    ],
    venueTitle: 'Village Sikanderpur',
    address: 'Village Sikanderpur',
    dressCode: 'Formal Luxury Attire',
    dressColorPalette: ['#2A2118', '#C59A3F', '#9E7A38', '#FFFDF9'],
    description:
      'The blessed Sunnah banquet of thanksgiving, gathering families, elders, and loved ones at Village Sikanderpur to bestow heartfelt du’as upon the newly married couple.',
    highlights: [
      'Sunnah Walima Feast of Gratitude at Village Sikanderpur',
      'Commemorative Family Portraits',
      'Traditional Awadhi & Mughlai Cuisine',
    ],
  },
];

export const COUPLE_GALLERY_ITEMS: StoryMilestone[] = [
  {
    id: '1',
    title: 'The Divine Harmony',
    arabicSubtitle: 'تَقْدِيرُ اللَّهِ وَبَرَكَتُهُ',
    caption: 'Two souls brought together with family blessing and shared faith',
    description:
      'A sacred union rooted in mutual devotion, deep respect, and the cherished traditions of our families across Nehtour.',
    image: '/src/assets/images/couple_portrait_art_1790680993480.jpg',
  },
  {
    id: '2',
    title: 'Prelude of Joy & Colors',
    arabicSubtitle: 'مَرَاسِمُ الْفَرَحِ وَالنُّورِ',
    caption: 'Celebrating the fragrant beginnings of the Haldi and Mehndi ceremonies',
    description:
      'Adorned in heirloom heritage and the fragrance of roses, awaiting the blessed vows of Nikah.',
    image: '/src/assets/images/couple_haldi_nikah_1790681471080.jpg',
  },
  {
    id: '3',
    title: 'An Eternal Covenant',
    arabicSubtitle: 'مِيثَاقاً غَلِيظاً',
    caption: 'Walking together toward a life illuminated by Mawaddah and Rahmah',
    description:
      'Stepping into this new chapter with hearts full of gratitude, seeking the prayers and love of all our elders and friends.',
    image: '/src/assets/images/mughal_floral_arch_1790680981761.jpg',
  },
];
