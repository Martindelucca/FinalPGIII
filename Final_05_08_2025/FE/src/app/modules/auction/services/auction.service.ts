import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../env/environment';
import { Auction, AuctionRequestDto } from '../models/auction.model';

@Injectable({
  providedIn: 'root',
})
export class AuctionService {
  private baseUrl = `${environment.apiUrl}/auctions`;

  // Get All Auctions
  getAllAuctions(): Observable<Auction[]> {
    // TODO: Implementar el método para obtener todas las subastas desde el backend.
    return of();
  }

  // Get Auction By Id
  getAuctionById(auctionId: number): Observable<Auction> {
    // TODO: Implementar el método para obtener una subasta por su ID.
    return of();
  }

  // Create Auction
  createAuction(auction: AuctionRequestDto): Observable<Auction> {
    // TODO: Implementar el método para crear una nueva subasta enviando los datos al backend.
    return of();
  }

  // Bid
  bid(auctionId: number, userId: number, amount: number): Observable<Auction> {
    // TODO: Implementar el método para enviar una puja (bid) a una subasta.
    // - El endpoint debe tener el formato: /{auctionId}/bid.
    return of();
  }
}
