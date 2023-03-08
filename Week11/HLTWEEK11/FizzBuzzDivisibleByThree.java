package com.Testing1;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import org.junit.jupiter.api.Test;

// Using assertTrue and asserFalse

@DisplayName("Test class demonstrating how to use BeforeEach and AfterEach annotations")

public class FizzBuzzDivisibleByThree {
	@BeforeEach
	public void clearFizzBuzz() {
		System.out.println("The FizzBuzz is ready");
	}

	@Test

	public void testDivisibleByThree() {
		FizzBuzz fizzBuzz = new FizzBuzz();
		assertTrue(fizzBuzz.isDivisiblebyThree(9));
		assertFalse(fizzBuzz.isDivisiblebyThree(8));
	}

	@AfterEach
	public void returnResults() {
		System.out.println("The results are ready");
	}
}
