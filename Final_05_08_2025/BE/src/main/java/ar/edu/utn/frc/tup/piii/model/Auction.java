package ar.edu.utn.frc.tup.piii.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Auction {
    private Long id;

    private String title;

    private String description;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    private BigDecimal maxAmount;

    private User highestBidder;
}
