import { category } from "../category/category"
import { Ingredient } from "../ingredient/ingredient"

export class Menu {
  
    id!:number
    value!:string
    description!:string
    name!:Text
    category!: category[]
    outStock!: number
    price!: number
    ingredient!: Ingredient[]
    iconSrc!: string
    
}
