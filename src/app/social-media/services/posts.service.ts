import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class PostsService {
 
    constructor(private http: HttpClient){}
    
    getPosts(): Observable<Post[]>{

        return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
    }

    addNewComment(postCommented:{comment:string, postId:number}){
        console.log(postCommented );
    }
  

  
}