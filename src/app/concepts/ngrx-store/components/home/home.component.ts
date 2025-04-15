import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectCount } from "../../store/counter-store/counter.selector";
import { AsyncPipe, JsonPipe } from "@angular/common";
import {
  decrement,
  increment,
  reset,
} from "../../store/counter-store/counter.actions";
import { CounterService } from "../../services/counter.service";
import { LoginComponent } from "../login/login.component";
import { AuthUser } from "../../../model";
import { AuthService } from "../../services/auth.service";

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
