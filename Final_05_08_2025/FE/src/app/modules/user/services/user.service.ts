import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../../../env/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly CURRENT_USER_KEY = 'current_user';
  private baseUrl = `${environment.apiUrl}/users`;

  private userListSubject = new BehaviorSubject<User[] | null>(null);
  public userList$ = this.userListSubject.asObservable();

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCurrentUser();
  }

  fetchUsers(): void {
    // TODO: Obtener la lista de usuarios desde la API y filtrar por aquellos que estén activos.
    // 1. Filtrar el resultado usando el campo "isActive" para devolver solo los usuarios con valor true.
    // 2. Aplicar el filtro utilizando operadores de RxJS.
    // 3. Actualizar el BehaviorSubject para que los componentes que observan 'userList$' se actualicen automáticamente.
    // ! Este método no debe devolver nada: se debe subscribir internamente y actualizar el BehaviorSubject (userListSubject).
  }

  getUserById(userId: number): Observable<User> {
    // TODO: Implementar el método para obtener un usuario por su ID.
    return of();
  }

  /* Management of the selected user */

  setCurrentUser(user: User): void {
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  private loadCurrentUser(): void {
    const currentUser = localStorage.getItem(this.CURRENT_USER_KEY);
    if (currentUser) {
      this.currentUserSubject.next(JSON.parse(currentUser));
    }
  }

  clearCurrentUser(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    this.currentUserSubject.next(null);
  }
}
