export class Movie{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;

    constructor(...args:string[]){
        this.Title = args[0];
        this.Year = args[1];
        this.imdbID=args[2];
        this.Type = args[3];
        this.Poster = args[4];
    }
}

export interface SearchResponse{
    Search:Movie[];
    totalResults:string;
    Response:string;
    Error?:string;
}