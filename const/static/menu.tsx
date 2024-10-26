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
    distance: '2.6 km',
    rating: 4.5,
    isVerified: false,
    openSchedule: '14:00 - 21:00',
  },
  {
    id: '2',
    name: 'Klinik Meta Duhita',
    polyclinics: ['Poli Umum', 'Poli Gigi'],
    distance: '2.6 km',
    rating: 4.5,
    isVerified: false,
    openSchedule: '14:00 - 21:00',
  },
  {
    id: '3',
    name: 'Klinik Sinatra',
    polyclinics: ['Poli Umum', 'Poli Gigi', 'Poli Anak', 'Poli Jantung'],
    distance: '2.6 km',
    rating: 4.5,
    isVerified: false,
    openSchedule: '14:00 - 21:00',
  },
];
