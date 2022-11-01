package com.example.dolladolla;

import static org.assertj.core.api.Assertions.assertThat;

import com.example.dolladolla.model.User;
import com.example.dolladolla.repo.UserRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)

public class UserRepoTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepo repo;

    @Test
    public void testCreateUser() {
        User user = new User();
        user.setEmail("branyzp@gmail.com");
        user.setPassword("brantheman");
        user.setFirstName("Brandon");
        user.setLastName("Yeo");

        User savedUser = repo.save(user);

        User existUser = entityManager.find(User.class, savedUser.getId());

        assertThat(user.getEmail()).isEqualTo(existUser.getEmail());

    }

}

