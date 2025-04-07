import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

const validatePassword = (
  control: AbstractControl<string>
): { passwordNeedsFollowRules: true } | null => {
  const validator = Validators.pattern(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\S]{8,}$/
  );
  const result: ValidationErrors | null = validator(control);
  return result ? { passwordNeedsFollowRules: true } : null;
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NgTemplateOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private router = inject(Router);

  public userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, validatePassword]),
  });

  public submit(): void {
    const user = localStorage.getItem(this.userForm.controls.email.value!);
    const userObj = user ? JSON.parse(user) : null;
    this.userForm.reset();
    if (
      !userObj ||
      this.userForm.controls.password.value !== userObj.password
    ) {
      this.router.navigate(['unauthorized']);
      return;
    }
    this.router.navigate(['dashboard']);
  }
}
