package com.example.mydemo;
// User.java (model)
public class User {
    private int id;
    private String name;
    private String email;
    private String address;
    private String phone;

    // constructor
    public User(int id, String name, String email, String address, String phone ){
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone =phone;
    }

    // getters & setters
    public int getId() { return id; }
    public String getName() { return name; } 
    public String getEmail() { return email; }
    public String getAddress() { return address; }
    public String getPhone() { return phone; }
}