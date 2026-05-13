package ar.edu.utn.frc.tup.piii.repository;

import ar.edu.utn.frc.tup.piii.entity.AuctionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuctionRepository extends JpaRepository<AuctionEntity, Long> {
}
