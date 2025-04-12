import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectCount } from "../../store/counter.selector";
import { AsyncPipe } from "@angular/common";
import { decrement, increment, reset } from "../../store/counter.actions";
import { CounterService } from "../../services/counter.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  public count$!: Observable<number>;
  private countService = inject(CounterService);

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
