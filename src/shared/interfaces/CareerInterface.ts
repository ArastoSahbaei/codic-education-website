export interface CareerInterface { 
    title: string ,
    jobType: string,
    location: string,
    _id: string
    description?: string,
    lastDate?: Date, 
    img?: string,
}
export interface CareerCardInterface {
    _id: string 
    title: string ,
    jobType: string,
    location: string,
    img?: string,
}
