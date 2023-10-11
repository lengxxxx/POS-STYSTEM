export class Total {
    name!: string
    price!: number
    drink!: string
    units!: number
    id!: number
    total!:number;
}

export class recipe{
    id!: number
    order!: Total
    gradTotal!: number
    grandUnits!: number
    
}