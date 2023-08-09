
export interface SaveDataLS {
    key: string,
    quantity: number
}

export const saveDataCart = (data: SaveDataLS) => {
    localStorage.setItem(data.key, JSON.stringify(data.quantity))
}

