export interface IResponse {
    status: string;
    totalResult: number;
    articles: IArticle[] ;   
}
export interface IArticle {
    author: string,
    title: string,
    urlToImage: string,
    url: string,
    publishedAt: string,
    content: string
}

