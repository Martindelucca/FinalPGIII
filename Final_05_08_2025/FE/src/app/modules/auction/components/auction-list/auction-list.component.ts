import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Auction } from '../../models/auction.model';
import { AuctionService } from '../../services/auction.service';

@Component({
  selector: 'app-auction-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './auction-list.component.html',
  styleUrl: './auction-list.component.css',
})
export class AuctionListComponent /* implements OnInit */ {
  @Input() auctions: Auction[] = [];
  @Input() loading = false;
  @Input() error = '';

  getStatusClass(auction: Auction): string {
    const now = new Date();
    const endDate = new Date(auction.endDate);
    const startDate = new Date(auction.startDate);

    if (now > endDate || now < startDate) {
      return 'bg-red-100 text-red-800';
    } else {
      return 'bg-green-100 text-green-800';
    }
  }

  getStatusText(auction: Auction): string {
    const now = new Date();
    const endDate = new Date(auction.endDate);
    const startDate = new Date(auction.startDate);

    if (now > endDate || now < startDate) {
      return 'Inactiva';
    } else {
      return 'Activa';
    }
  }
}
