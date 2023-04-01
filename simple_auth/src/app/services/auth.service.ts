import {Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "@angular/fire/auth";
import {LoginEntity} from "../entities/login.entity";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth
  ) { }

  async register(data: LoginEntity) {
    try {
      return await createUserWithEmailAndPassword(this.auth, data.email, data.password);
    } catch (e) {
      return null;
    }
  }

  async login(data: LoginEntity) {
    try {
      return await signInWithEmailAndPassword(this.auth, data.email, data.password);
    } catch (e) {
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }
}
