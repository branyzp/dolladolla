package com.example.dolladolla.service;

import com.example.dolladolla.model.User;
import com.example.dolladolla.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;




@Service
@Transactional
public class UserService {


    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }



    public User addUser (User user){
        return userRepo.save(user);
    }
    public User updateUser(User user){
        return userRepo.save(user);
    }

    public void deleteUser(Long id){
        userRepo.deleteById(id);
    }

}
