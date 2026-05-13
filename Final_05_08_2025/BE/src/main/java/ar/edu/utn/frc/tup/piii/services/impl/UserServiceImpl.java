package ar.edu.utn.frc.tup.piii.services.impl;

import ar.edu.utn.frc.tup.piii.dtos.user.UserDTO;
import ar.edu.utn.frc.tup.piii.entity.UserEntity;
import ar.edu.utn.frc.tup.piii.repository.UserRepository;
import ar.edu.utn.frc.tup.piii.services.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    @Override
    public List<UserDTO> getAllUsers() {
        // TODO: Punto 4
        return null;
    }

    @Override
    public UserDTO getById(Long userId) {
        UserEntity user = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found."));

        return this.modelMapper.map(user, UserDTO.class);
    }
}
