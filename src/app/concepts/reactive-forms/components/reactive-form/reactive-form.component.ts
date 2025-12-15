import { JsonPipe, NgClass, NgFor } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Details } from "../../../../model";

@Component({
  selector: "app-reactive-form",
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: "./reactive-form.component.html",
  styleUrl: "./reactive-form.component.scss",
})
export class ReactiveFormComponent {
  form: FormGroup<Details> = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    address: new FormArray(
      [
        new FormGroup({
          street: new FormControl(""),
          city: new FormControl(""),
          country: new FormControl(""),
        }),
      ],
      Validators.required
    ),
  });

  onSubmit(): void {
    console.log(this.form);
  }
}
