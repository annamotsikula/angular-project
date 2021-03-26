export interface FormsFilter {
    q?: string,
    qInTitle: string,
    sources?: string,
    page: number,
    pageSize: number,
    sortBy?: SortBy,
    from?: string,
    to?: string,
    language?: string,


}
export enum SortBy {
    popularity,
    relevance,
    publishedAt
}