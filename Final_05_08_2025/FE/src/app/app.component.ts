import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from './modules/user/services/user.service';
import { Subscription } from 'rxjs';
import { User } from './modules/user/models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = [];
  currentUser: User | null = null;
  private subscription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUsers();

    this.subscription.add(
      this.userService.userList$.subscribe((users) => {
        if (users) this.users = users;
      })
    );

    this.subscription.add(
      this.userService.currentUser$.subscribe((user) => {
        this.currentUser = user;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onUserChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const selectedUserId = parseInt(select.value);

    if (selectedUserId) {
      const selectedUser = this.users.find(
        (user) => user.id === selectedUserId
      );
      if (selectedUser) {
        this.userService.setCurrentUser(selectedUser);
      }
    } else {
      this.userService.clearCurrentUser();
    }
  }

  getCurrentUserDisplayName(): string {
    if (this.currentUser) {
      return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    }
    return 'Seleccionar usuario';
  }
}
