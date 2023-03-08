package com.Testing1;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

//Using assertTrue and assertFalse

@DisplayName("Test class demonstrating how to use BeforeEach and AfterEach annotations")

public class FizzBuzzDivisibleByFive {
	@BeforeEach
	public void clearFizzBuzz() {
		System.out.println("The FizzBuzz is ready");
	}

	@Test
	public void testDivisibleByFive() {
		FizzBuzz fizzBuzz = new FizzBuzz();
		assertTrue(fizzBuzz.isDivisibleByFive(10));
		assertFalse(fizzBuzz.isDivisibleByFive(11));

	}

	@AfterEach
	public void returnResults() {
		System.out.println("The results are ready");
	}

}