export enum UserRoles {
  ADMIN = "admin",
  EMPLOYEE = "employee",
}

export interface UserState {
  user: null | AuthUser;
  isAuthenticated: boolean;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRoles;
}

export interface Credentials {
  email: string;
  password: string;
}
