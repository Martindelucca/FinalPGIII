package ar.edu.utn.frc.tup.piii.services;

import ar.edu.utn.frc.tup.piii.dtos.user.UserDTO;

import java.util.List;

public interface UserService {
    List<UserDTO> getAllUsers();

    UserDTO getById(Long userId);
}
