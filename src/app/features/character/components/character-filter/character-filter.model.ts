export interface CharacterFilters {
  name?: string | null;
  status?: CharacterStatus;
  species?: string | null;
  type?: string | null;
  gender?: CharacterGenders;
}

export type CharacterStatus = 'alive' | 'dead' | 'unknown' | null;
export type CharacterGenders = 'female' | 'male' | 'genderless' | 'unknown' | null;
