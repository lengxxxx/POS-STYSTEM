import { ingredient } from '../ingredient/ingredient';

export class stock {
  id!: number;
  name!: string;
  value!: number | string ;
  newValue!: number | string;
  price!: number;
  issum!: boolean;
  ingredient!: ingredient[];
}
