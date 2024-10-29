import { Clinic } from '~/interface/clinic';

export const mainMenu: string[] = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'];
export const clinicList: Clinic[] = [
  {
    id: '1',
    name: 'Klinik Permata',
    polyclinics: [
      {
        id: "1",
        name: "Poli Umum",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      },
      {
        id: "2",
        name: "Poli Gigi",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      },
      {
        id: "3",
        name: "Poli Anak",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      },
      {
        id: "4",
        name: "Poli Jantung",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      }
    ],
    images: [
      'https://dummyimage.com/600x400/4f4f4e/ffffff',
      'https://dummyimage.com/600x400/4f4f4e/ffffff',
    ],
    distance: '2.6 km',
    rating: 4.5,
    isVerified: false,
    openSchedule: '14:00 - 21:00',
    openDays: "Senin - Jumat",
    paymentSupports: ["UMUM", "QRIS", "BPJS"]
  },
  {
    id: '2',
    name: 'Klinik Meta Duhita',
    polyclinics: [
      {
        id: "1",
        name: "Poli Umum",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      },
      {
        id: "2",
        name: "Poli Gigi",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      },
      {
        id: "3",
        name: "Poli Anak",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      },
      {
        id: "4",
        name: "Poli Jantung",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      }
    ],
    images: ['https://dummyimage.com/600x400/000/fff'],
    distance: '2.6 km',
    rating: 4.5,
    isVerified: false,
    openSchedule: '14:00 - 21:00',
    openDays: "Senin - Jumat",
    paymentSupports: ["UMUM", "QRIS", "BPJS"]
  },
  {
    id: '3',
    name: 'Klinik Sinatra',
    polyclinics: [
      {
        id: "1",
        name: "Poli Umum",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      },
      {
        id: "2",
        name: "Poli Gigi",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      },
      {
        id: "3",
        name: "Poli Anak",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      },
      {
        id: "4",
        name: "Poli Jantung",
        image: "https://dummyimage.com/600x400/4f4f4e/ffffff"
      }
    ],
    images: ['https://dummyimage.com/600x400/4f4f4e/ffffff'],
    distance: '2.6 km',
    rating: 4.5,
    isVerified: false,
    openSchedule: '14:00 - 21:00',
    openDays: "Senin - Jumat",
    paymentSupports: ["UMUM", "QRIS", "BPJS"]
  },
];
