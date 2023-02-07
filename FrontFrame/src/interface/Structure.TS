export interface PostProps{
    id:number
    structureHtml:string
}

export interface NewsProps{
        id: number;
        slug: string;
        autorPostagem: string;
        texto: string;
        titulo: string;
        dataPostagem: Date;
        urlImagem: string;
}