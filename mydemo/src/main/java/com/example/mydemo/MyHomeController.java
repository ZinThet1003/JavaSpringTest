package com.example.mydemo;
import java.time.LocalDateTime;
import org.springframework.web.bind.annotation.*;
import java.util.*;
@RequestMapping("/api/users")
@CrossOrigin(origins = "https://super-duper-bassoon-q7gvqwv6wwq7297vq-3000.app.github.dev")

@RestController
public class MyHomeController {
    public List<User> users = Arrays.asList(
        new User(1, "mon", "mon@gmail.comm", "Tokyo", "0123456788"),
        new User(2, "Jane Smith", "jane@example.com", "Osaka", "08012122344")
    );

    @RequestMapping("/")
    String hello() {
        return """
                現在時刻は%sです。
                """.formatted(LocalDateTime.now());
    }

    @GetMapping
    public List<User> getUsers() {
        return users;
    }

     // GET user by id
    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return users.stream()
                .filter(u -> u.getId() == id)
                .findFirst()
                .orElse(null); // or throw 404
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        // Save user logic
        return user;
    }
}