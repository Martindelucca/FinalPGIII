import { Component } from '@angular/core';
import { AuctionListComponent } from '../../modules/auction/components/auction-list/auction-list.component';
import { AuctionService } from '../../modules/auction/services/auction.service';
import { Auction } from '../../modules/auction/models/auction.model';

@Component({
  selector: 'app-auction-list-page',
  imports: [AuctionListComponent],
  templateUrl: './auction-list-page.component.html',
  styleUrl: './auction-list-page.component.css',
})
export class AuctionListPageComponent {
  auctions: Auction[] = [];
  loading = true;
  error = '';

  constructor(private auctionService: AuctionService) {}

  ngOnInit(): void {
    this.loadAuctions();
  }

  loadAuctions(): void {
    this.loading = true;
    this.error = '';

    this.auctionService.getAllAuctions().subscribe({
      next: (auctions) => {
        this.auctions = auctions;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar las subastas';
        this.loading = false;
        console.error('Error loading auctions:', error);
      },
    });
  }
}
