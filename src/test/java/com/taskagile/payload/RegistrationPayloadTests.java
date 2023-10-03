package com.taskagile;

import org.junit.Before;
import org.junit.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.ValidatorFactory;
import javax.validation.Validator;
import java.util.Set;

import static org.junit.Assert.assertEquals;


public class RegistrationPayloadTests {
    private Validator validator;

    @Before
    public void setup(){
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }

    @Test
    public void validate_blankPayload_shouldFail(){
        RegistrationPayloadTests payloadTests = new RegistrationPayloadTests();
        Set<ConstraintViolation<RegistrationPayloadTests>> violations = validator.validate(payloadTests);
        assertEquals(3, violations.size());
    }
}
