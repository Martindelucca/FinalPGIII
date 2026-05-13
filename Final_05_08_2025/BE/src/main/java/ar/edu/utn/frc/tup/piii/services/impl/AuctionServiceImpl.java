package ar.edu.utn.frc.tup.piii.services.impl;

import ar.edu.utn.frc.tup.piii.dtos.auction.AuctionDTO;
import ar.edu.utn.frc.tup.piii.dtos.auction.AuctionRequestDTO;
import ar.edu.utn.frc.tup.piii.dtos.auction.BidDTO;
import ar.edu.utn.frc.tup.piii.repository.AuctionRepository;
import ar.edu.utn.frc.tup.piii.services.AuctionService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuctionServiceImpl implements AuctionService {

    private final AuctionRepository auctionRepository;

    private final ModelMapper modelMapper;

    @Override
    public AuctionDTO createAuction(AuctionRequestDTO auctionRequestDTO) {
        // TODO: Punto 1
        return null;
    }

    @Override
    public List<AuctionDTO> getAllAuctions() {
        return this.modelMapper.map(this.auctionRepository.findAll(), new TypeToken<List<AuctionDTO>>(){}.getType());
    }

    @Override
    public AuctionDTO getAuctionById(Long id) {
        // TODO: Punto 2
        return null;
    }

    @Override
    public AuctionDTO bidOnAuction(Long id, BidDTO bid) {
        // TODO: Punto 3
        return null;
    }
}
