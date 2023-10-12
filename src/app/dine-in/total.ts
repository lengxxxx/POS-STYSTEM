export class Total {
    name!: string
    price!: number
    drink!: string
    units!: number
    id!: number
    total!:number
    grandTotal!:number
    grandUnits!:number
    date!: Date
}

export class recipe{
    id!: number
    order!: Total
    gradTotal!: number
    grandUnits!: number
    date!: Date
}