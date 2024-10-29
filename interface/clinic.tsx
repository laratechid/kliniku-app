interface PolyClinic{
  id: string
  name: string
  image: string
}

export interface Clinic {
  id: string;
  name: string;
  polyclinics: PolyClinic[];
  images: string[];
  distance: string;
  rating: number;
  isVerified: boolean;
  openSchedule: string;
  openDays: string;
  paymentSupports: string[]
}
