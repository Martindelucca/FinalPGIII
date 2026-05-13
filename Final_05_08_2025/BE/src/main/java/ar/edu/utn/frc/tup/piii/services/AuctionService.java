package ar.edu.utn.frc.tup.piii.services;

import ar.edu.utn.frc.tup.piii.dtos.auction.AuctionDTO;
import ar.edu.utn.frc.tup.piii.dtos.auction.AuctionRequestDTO;
import ar.edu.utn.frc.tup.piii.dtos.auction.BidDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AuctionService {
    AuctionDTO createAuction(AuctionRequestDTO auctionRequestDTO);

    List<AuctionDTO> getAllAuctions();

    AuctionDTO getAuctionById(Long id);

    AuctionDTO bidOnAuction(Long id, BidDTO bid);
}
