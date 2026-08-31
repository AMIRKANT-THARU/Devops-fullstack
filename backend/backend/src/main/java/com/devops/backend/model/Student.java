package com.devops.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Student ID is required")
    @Column(name = "student_id", unique = true)
    private String studentId;

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Class is required")
    @Column(name = "class_name")
    private String className;

    @NotBlank(message = "Guardian name is required")
    private String guardian;

    @NotBlank(message = "Family phone is required")
    @Pattern(regexp = "^98\\d{8}$", message = "Family phone must be exactly 10 digits and start with 98")
    private String phone;

    @NotBlank(message = "Location is required")
    private String location;

    public Student() {
    }

    public Student(String name, String className, String guardian, String phone, String location) {
        this.name = name;
        this.className = className;
        this.guardian = guardian;
        this.phone = phone;
        this.location = location;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getGuardian() {
        return guardian;
    }

    public void setGuardian(String guardian) {
        this.guardian = guardian;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
