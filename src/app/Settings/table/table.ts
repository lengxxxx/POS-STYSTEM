
export class Table {
    id!:number | null | string
    name?: string
    value?:string
    description?:string
    isBusy! : boolean
    recipeId! : number
    grandTotal?: number
    grandUnits?:number
}
