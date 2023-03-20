import { CharacterSchema } from './character.schema';

export interface GETCharactersResponse {
  info: InfoResponse;
  results: CharacterSchema[];
}

interface InfoResponse {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
