import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auction } from '../../modules/auction/models/auction.model';
import { AuctionService } from '../../modules/auction/services/auction.service';
import { User } from '../../modules/user/models/user.model';
import { UserService } from '../../modules/user/services/user.service';

@Component({
  selector: 'app-auction-detail-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './auction-detail-page.component.html',
  styleUrl: './auction-detail-page.component.css',
})
export class AuctionDetailPageComponent implements OnInit {
  auction: Auction | null = null;
  currentUser: User | null = null;
  loading = true;
  error = '';
  bidAmount = 0;
  bidLoading = false;
  bidError = '';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private auctionService: AuctionService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const auctionId = this.route.snapshot.paramMap.get('id');
    if (auctionId) {
      this.loadAuction(parseInt(auctionId));
    }

    this.userService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  loadAuction(auctionId: number): void {
    this.loading = true;
    this.error = '';

    this.auctionService.getAuctionById(auctionId).subscribe({
      next: (auction) => {
        this.auction = auction;
        this.bidAmount = auction.maxAmount + 1;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar la subasta';
        this.loading = false;
        console.error('Error loading auction:', error);
      },
    });
  }

  placeBid(): void {
    // TODO: Completar el método para realizar una puja en una subasta con las siguientes validaciones y comportamiento:
    // 1. Validar que exista un usuario seleccionado y que la subasta esté disponible.
    // 2. Verificar que el monto ingresado sea mayor al precio actual (maxAmount).
    // 3. Verificar que el usuario tenga saldo suficiente para realizar la apuesta.
    // 4. Si alguna de las validaciones falla, mostrar un mensaje de error utilizando la propiedad "bidError".
    // 5. Si todas las validaciones son correctas:
    //    - Establecer "bidLoading" en true para indicar que la operación está en curso.
    //    - Limpiar cualquier mensaje de error previo.
    //    - Llamar al método del servicio para realizar la puja.
    // 6. Dentro del subscribe:
    //    - En el "next": actualizar la subasta con la respuesta del backend y aumentar el valor por defecto de la próxima apuesta.
    //    - Además, se debe actualizar el usuario actual con su nuevo saldo. Para ello, se debe obtener nuevamente el usuario desde el backend utilizando el servicio de usuarios y actualizarlo en el store de la aplicación (getUserById y setCurrentUser).
    //    - En el mismo subscribe de getUserById, se debe actualizar la lista de usuarios llamando a `fetchUsers()`, para reflejar posibles cambios de saldo en otras vistas que utilizan `userList$`.
    //    - Establecer "bidLoading" en false una vez finalizada la operación.
    //    - En el "error": mostrar un mensaje de error claro y también establecer "bidLoading" en false.
  }

  getStatusClass(): string {
    if (!this.auction) return '';

    const now = new Date();
    const endDate = new Date(this.auction.endDate);
    const startDate = new Date(this.auction.startDate);

    if (now > endDate || now < startDate) {
      return 'bg-red-100 text-red-800';
    } else {
      return 'bg-green-100 text-green-800';
    }
  }

  getStatusText(): string {
    if (!this.auction) return '';

    const now = new Date();
    const endDate = new Date(this.auction.endDate);
    const startDate = new Date(this.auction.startDate);

    if (now > endDate || now < startDate) {
      return 'Inactiva';
    } else {
      return 'Activa';
    }
  }

  isAuctionActive(): boolean {
    if (!this.auction) return false;

    const now = new Date();
    const endDate = new Date(this.auction.endDate);

    return now <= endDate;
  }

  canPlaceBid(): boolean {
    return this.isAuctionActive() && this.currentUser !== null;
  }
}
