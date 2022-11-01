package com.example.dolladolla.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity

public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;

    @Column(name = "first_name",nullable = false,length = 25)
    private String firstName;

    @Column(name = "last_name",nullable = false,length = 25)
    private String lastName;

    @Column(nullable = false,unique = true,length = 45)
    private String email;

    @Column(nullable = false,length = 64)
    private String password;

    private String imageUrl;

    public User(){}

    User(Long id, String firstName, String lastName, String email, String password, String imageUrl){
        this.id = id;
        this.firstName= firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
