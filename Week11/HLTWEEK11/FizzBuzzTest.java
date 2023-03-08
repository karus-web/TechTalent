package com.Testing1;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

// Using assertEquals and assertNotEquals

@DisplayName("Test class demonstrating how to use BeforeEach and AfterEach annotations")
public class FizzBuzzTest {
	
	@BeforeEach
	public void clearFizzBuzz() {
		System.out.println("The FizzBuzz is ready");
	}
	@Test
	public void testFizzBuzz() {
		assertEquals("1", FizzBuzz.fizzBuzz(1));
		assertEquals("2", FizzBuzz.fizzBuzz(2));
		assertEquals("Fizz", FizzBuzz.fizzBuzz(3));
		assertEquals("4", FizzBuzz.fizzBuzz(4));
		assertEquals("Buzz", FizzBuzz.fizzBuzz(5));
		assertEquals("Fizz", FizzBuzz.fizzBuzz(6));
		assertEquals("7", FizzBuzz.fizzBuzz(7));
		assertEquals("8", FizzBuzz.fizzBuzz(8));
		assertEquals("Fizz", FizzBuzz.fizzBuzz(9));
		assertEquals("Buzz", FizzBuzz.fizzBuzz(10));
		assertEquals("11", FizzBuzz.fizzBuzz(11));
		assertEquals("Fizz", FizzBuzz.fizzBuzz(12));
		assertEquals("13", FizzBuzz.fizzBuzz(13));
		assertEquals("14", FizzBuzz.fizzBuzz(14));
		assertEquals("FizzBuzz", FizzBuzz.fizzBuzz(15));

		// Test Fizz
		assertEquals("Fizz", FizzBuzz.fizzBuzz(9));
		assertNotEquals("Fizz", FizzBuzz.fizzBuzz(8));

		// Test Buzz
		assertEquals("Buzz", FizzBuzz.fizzBuzz(10));
		assertNotEquals("Buzz", FizzBuzz.fizzBuzz(11));

		// Test FizzBuzz
		assertEquals("FizzBuzz", FizzBuzz.fizzBuzz(15));
		assertNotEquals("FizzBuzz", FizzBuzz.fizzBuzz(14));
		
		
		 // Test non-matching numbers
        assertEquals("7", FizzBuzz.fizzBuzz(7));
        assertNotEquals("16", FizzBuzz.fizzBuzz(10));

	}
	@AfterEach
	public void returnResults() {
	System.out.println("The results are ready");
	}
}