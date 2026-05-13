import { User } from '../../user/models/user.model';

export interface Auction {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  maxAmount: number;
  highestBidder?: User;
}

export interface AuctionRequestDto {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  maxAmount: number;
}
