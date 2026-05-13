package ar.edu.utn.frc.tup.piii.dtos.auction;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
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
// TODO: Completar las validaciones del punto 1
public class AuctionRequestDTO {
    private String title;

    private String description;

    @JsonFormat()
    @JsonProperty("start_date")
    private LocalDateTime startDate;

    @JsonFormat()
    @JsonProperty("end_date")
    private LocalDateTime endDate;

    @JsonProperty("max_amount")
    private BigDecimal maxAmount;
}