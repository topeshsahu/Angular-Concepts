import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  name: string = "";

  private authService = inject(AuthService);

  login() {
    // Handle login logic here
    console.log("Login clicked", this.email, this.password);
    this.authService.login({ email: this.email, password: this.password });
  }

  logout() {
    // Handle logout logic here
    console.log("Logout clicked");
  }
}
