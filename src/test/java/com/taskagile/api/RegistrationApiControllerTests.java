package com.taskagile.api;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
@RunWith(SpringRunner.class)
@WebMvcTest(RegistrationApiControllerTests.class)
public class RegistrationApiControllerTests {

    @Autowired
    private MockMvc mockmvc;

}
