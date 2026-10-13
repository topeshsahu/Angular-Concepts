import { NgFor } from "@angular/common";
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
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: "./reactive-form.component.html",
  styleUrl: "./reactive-form.component.scss",
})
export class ReactiveFormComponent {
  formName = new FormControl("");
  formArray = new FormArray([new FormControl("")]);
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
      Validators.required,
    ),
  });

  get addressControl(): any {
    return this.form.get("address") as FormArray;
  }

  onSubmit(): void {
    this.form.get("name")?.patchValue("shubham");
    this.form.get("email")?.setValue("lund");
    this.form.get("address")?.patchValue([
      {
        city: "backchod",
        country: "india",
        street: "backchod",
      },
    ]);
    console.log(this.form.value);
  }

  addControls(): void {
    this.formArray.controls.push(new FormControl(""));
  }
}
