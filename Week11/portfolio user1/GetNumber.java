package com.Testing10;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class GetNumber {

	@Test
    public void testGetNumber() {
        FizzBuzz fb = new FizzBuzz(3);
        assertEquals(3, fb.getNumber());
    }

}
