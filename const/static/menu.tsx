import { Clinic } from '~/interface/clinic';

export const mainMenu: string[] = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'];
export const clinicList: Clinic[] = [
  {
    id: '1',
    name: 'Klinik Permata',
    polyclinics: [
      'Poli Umum',
      'Poli Gigi',
      'Poli Anak',
      'Poli Jantung',
      'Poli Umum',
      'Poli Gigi',
      'Poli Anak',
      'Poli Jantung',
    ],
    images: [
      'https://dummyimage.com/600x400/4f4f4e/ffffff',
      'https://dummyimage.com/600x400/b8b835/ffffff',
    ],
    distance: '2.6 km',
    rating: 4.5,
    isVerified: false,
    openSchedule: '14:00 - 21:00',
  },
  {
    id: '2',
    name: 'Klinik Meta Duhita',
    polyclinics: ['Poli Umum', 'Poli Gigi'],
    images: ['https://dummyimage.com/600x400/000/fff'],
    distance: '2.6 km',
    rating: 4.5,
    isVerified: false,
    openSchedule: '14:00 - 21:00',
  },
  {
    id: '3',
    name: 'Klinik Sinatra',
    polyclinics: ['Poli Umum', 'Poli Gigi', 'Poli Anak', 'Poli Jantung'],
    images: ['https://dummyimage.com/600x400/b8b835/ffffff'],
    distance: '2.6 km',
    rating: 4.5,
    isVerified: false,
    openSchedule: '14:00 - 21:00',
  },
];
