package com.example.dolladolla.repo;

import com.example.dolladolla.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long> {

}
