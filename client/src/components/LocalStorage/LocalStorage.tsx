
export interface SaveDataLS {
    id: string,
    name:string
    quantity: number,
    price:number,
    image:string,
    summary:string
}

export interface UserData {
   // user: object,
    id: string ,
    name: string,
    lastName: string,
    role: string,
    access: string
}

export const saveDataCart = (data: SaveDataLS) => {
    localStorage.setItem(data.id, JSON.stringify(data))
}

export const deleteDataCart = (id:string) => {
    localStorage.removeItem (id)
}

export const saveUserData = (data:UserData) => {
    localStorage.setItem("user", JSON.stringify(data))
}

