import { inject, Injectable, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "../store/counter-store/counter.selector";
import { Observable } from "rxjs";
import { decrement, increment, reset } from "../store/counter-store/counter.actions";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  private count$: Observable<number>;
  constructor(private storeService: Store) {
    this.count$ = this.storeService.select(selectCount);
  }

  getCount(): Observable<number> {
    return this.count$;
  }
  increment() {
    this.storeService.dispatch(increment());
  }
  decrement() {
    this.storeService.dispatch(decrement());
  }
  reset() {
    this.storeService.dispatch(reset());
  }
}
