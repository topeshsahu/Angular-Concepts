import { Component, inject, ChangeDetectionStrategy } from "@angular/core";
import { ApiService } from "../../services/api.service";

@Component({
    selector: "app-home",
    imports: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: "./proxy.component.html"
})
export class ProxyComponent {
  apiService = inject(ApiService);

  makeApiCall() {
    this.apiService.getPosts().subscribe((res) => console.log(res));
  }
}
