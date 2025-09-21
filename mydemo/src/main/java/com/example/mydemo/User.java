package com.example.mydemo;
// User.java (model)
public class User {
    private int id;
    private String name;
    private String email;

    // constructor
    public User(int id, String name, String email ){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // getters & setters
    public int getId() { return id; }
    public String getName() { return name; } 
    public String getEmail() { return email; }
}