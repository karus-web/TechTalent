package com.Testing10;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class GetResult {
	
	
	@Test
    public void testGetResult() {
        FizzBuzz fb1 = new FizzBuzz(3);
        assertEquals("Fizz", fb1.getResult());

        FizzBuzz fb2 = new FizzBuzz(5);
        assertEquals("Buzz", fb2.getResult());

        FizzBuzz fb3 = new FizzBuzz(15);
        assertEquals("FizzBuzz", fb3.getResult());

        FizzBuzz fb4 = new FizzBuzz(4);
        assertEquals("4", fb4.getResult());
    }
	
	}


