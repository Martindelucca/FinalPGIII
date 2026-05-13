import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuctionRequestDto } from '../../models/auction.model';

@Component({
  selector: 'app-create-auction-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-auction-form.component.html',
  styleUrl: './create-auction-form.component.css',
})
export class CreateAuctionFormComponent {
  @Input() loading = false;
  @Output() auctionCreated = new EventEmitter<AuctionRequestDto>();
  @Output() reset = new EventEmitter<void>();

  auction: AuctionRequestDto = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    maxAmount: 0,
  };

  onSubmit(form: any): void {
    // TODO: Completar el método para manejar el envío del formulario.
    // - Emitir el evento "auctionCreated" con los datos actuales de la subasta.
  }

  resetForm(): void {
    this.auction = {
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      maxAmount: 0,
    };
  }

  getMinStartDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  getMinEndDate(): string {
    if (this.auction.startDate) {
      return this.auction.startDate;
    }
    return this.getMinStartDate();
  }
}
