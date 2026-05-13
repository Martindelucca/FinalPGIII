package ar.edu.utn.frc.tup.piii.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
    private Long id;

    private String email;

    private String firstName;

    private String lastName;

    private BigDecimal balance;

    private Boolean isActive;
}
