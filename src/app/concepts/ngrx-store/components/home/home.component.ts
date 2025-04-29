import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { AuthUser } from "@model";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { CounterService } from "../../services/counter.service";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [AsyncPipe, LoginComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  public count$!: Observable<number>;
  public user$!: Observable<AuthUser | null>;
  private countService = inject(CounterService);
  private authService = inject(AuthService);

  ngOnInit() {
    this.count$ = this.countService.getCount();
  }

  increment() {
    this.countService.increment();
  }

  decrement() {
    this.countService.decrement();
  }

  reset() {
    this.countService.reset();
  }
}
