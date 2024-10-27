export interface Clinic {
  id: string;
  name: string;
  polyclinics: string[];
  images: string[];
  distance: string;
  rating: number;
  isVerified: boolean;
  openSchedule: string;
  openDays: string;
}
