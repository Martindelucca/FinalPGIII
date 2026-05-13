import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CreateAuctionFormComponent } from '../../modules/auction/components/create-auction-form/create-auction-form.component';
import { AuctionRequestDto } from '../../modules/auction/models/auction.model';
import { AuctionService } from '../../modules/auction/services/auction.service';

@Component({
  selector: 'app-create-auction-page',
  imports: [CommonModule, CreateAuctionFormComponent],
  templateUrl: './create-auction-page.component.html',
  styleUrl: './create-auction-page.component.css',
})
export class CreateAuctionPageComponent {
  success = false;
  error = '';
  loading = false;

  @ViewChild(CreateAuctionFormComponent)
  formComponent!: CreateAuctionFormComponent;

  constructor(private auctionService: AuctionService, private router: Router) {}

  onAuctionCreated(auctionData: AuctionRequestDto): void {
    this.error = '';
    this.loading = true;

    this.auctionService.createAuction(auctionData).subscribe({
      next: (createdAuction) => {
        this.success = true;
        this.loading = false;

        this.formComponent.resetForm();

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (error) => {
        this.loading = false;
        this.error = 'Error al crear la subasta. Inténtalo de nuevo.';
        console.error('Error creating auction:', error);
      },
    });
  }
}
