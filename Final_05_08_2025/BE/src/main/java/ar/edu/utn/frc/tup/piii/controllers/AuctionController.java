package ar.edu.utn.frc.tup.piii.controllers;

import ar.edu.utn.frc.tup.piii.dtos.auction.AuctionDTO;
import ar.edu.utn.frc.tup.piii.dtos.auction.AuctionRequestDTO;
import ar.edu.utn.frc.tup.piii.dtos.auction.BidDTO;
import ar.edu.utn.frc.tup.piii.services.AuctionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auctions")
public class AuctionController {
    private final AuctionService auctionService;

    @GetMapping("/{id}")
    public ResponseEntity<AuctionDTO> getAuctionById(@PathVariable Long id) {
        return ResponseEntity.ok(auctionService.getAuctionById(id));
    }
    @GetMapping
    public ResponseEntity<List<AuctionDTO>> getAllAuctions() {
        return ResponseEntity.ok(auctionService.getAllAuctions());
    }
    @PostMapping
    public ResponseEntity<AuctionDTO> createAuction(@RequestBody @Valid AuctionRequestDTO auctionRequestDTO) {
        return ResponseEntity.ok(auctionService.createAuction(auctionRequestDTO));
    }
    @PutMapping("/{id}/bid")
    public ResponseEntity<AuctionDTO> bidOnAuction(@PathVariable Long id,
                                                   @RequestBody BidDTO bidDTO) {
        return ResponseEntity.ok(auctionService.bidOnAuction(id, bidDTO));
    }
}
