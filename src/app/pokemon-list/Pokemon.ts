
import { Type } from './Type';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  weight: number;
  height: number;
  types: Type[];

}
