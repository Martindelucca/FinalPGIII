package ar.edu.utn.frc.tup.piii.dtos.auction;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BidDTO {
    @JsonProperty("user_id")
    private Long userId;
    private BigDecimal amount;
}
