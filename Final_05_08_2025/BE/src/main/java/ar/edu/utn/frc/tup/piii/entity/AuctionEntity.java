package ar.edu.utn.frc.tup.piii.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity(name = "auctions")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuctionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Lob
    private String description;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    private BigDecimal maxAmount;

    @ManyToOne(cascade = CascadeType.ALL)
    private UserEntity highestBidder;
}
