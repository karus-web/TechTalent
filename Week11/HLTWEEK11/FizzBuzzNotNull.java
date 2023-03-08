package com.Testing1;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

//Using assertNotNull. 

@DisplayName("Test class demonstrating how to use BeforeEach and AfterEach annotations")
public class FizzBuzzNotNull {
	@BeforeEach
	public void clearFizzBuzz() {
		System.out.println("The FizzBuzz is ready");
	}

	@Test
	public void testFizzBuzzNotNull() {
		assertNotNull(FizzBuzz.fizzBuzz(1));
		assertNotNull(FizzBuzz.fizzBuzz(2));
		assertNotNull(FizzBuzz.fizzBuzz(3));
	}

	@AfterEach
	public void returnResults() {
		System.out.println("The results are ready");
	}
}
