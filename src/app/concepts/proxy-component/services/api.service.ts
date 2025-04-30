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
    return this.http.get<Post>("/api/posts");
  }
}
