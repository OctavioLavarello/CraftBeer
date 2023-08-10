
export interface SaveDataLS {
    id: string,
    name:string
    quantity: number,
    price:number,
    image:string,
    summary:string
}

export const saveDataCart = (data: SaveDataLS) => {
    localStorage.setItem(data.id, JSON.stringify(data))
}
