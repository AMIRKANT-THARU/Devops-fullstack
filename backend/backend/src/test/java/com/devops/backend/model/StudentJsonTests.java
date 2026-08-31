package com.devops.backend.model;

import org.junit.jupiter.api.Test;
import tools.jackson.databind.json.JsonMapper;

import static org.assertj.core.api.Assertions.assertThat;

class StudentJsonTests {

    @Test
    void serializedStudentIncludesStudentId() {
        Student student = new Student();
        student.setStudentId("SP-2083-005");
        student.setName("Amir Kant Chaudhary");

        String json = JsonMapper.builder().build().writeValueAsString(student);

        assertThat(json).contains("\"studentId\":\"SP-2083-005\"");
    }
}
