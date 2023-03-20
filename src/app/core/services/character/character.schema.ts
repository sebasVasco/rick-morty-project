export interface CharacterSchema {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginLocationSchema;
  location: OriginLocationSchema;
  image: string;
  episode: any[];
  url: string;
  create: string | Date;
}

interface OriginLocationSchema {
  name: string;
  url: string;
}
