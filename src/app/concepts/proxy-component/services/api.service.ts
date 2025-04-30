import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Post } from "@model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  http = inject(HttpClient);

  getPosts(): Observable<Post> {
    // TODO: Below configuration does not suppport full path url: http://localhost:3000/api/posts
    return this.http.get<Post>("/api/posts");
  }
}
