package ar.edu.utn.frc.tup.piii.repository;

import ar.edu.utn.frc.tup.piii.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
}
