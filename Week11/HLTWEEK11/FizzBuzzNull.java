package com.Testing1;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

//Using assertNull. This test fails because assertNull returns false and  this is not applicable in FizzBuzz program

@DisplayName("Test class demonstrating how to use BeforEach and AfterEach annotations")

public class FizzBuzzNull {
	@BeforeEach
	public void clearFizzBuzz() {
		System.out.println("The FizzBuzz is ready");
	}

	@Test
	public void testFizzBuzzNull() {
		assertNull(FizzBuzz.fizzBuzz(0));
	}

	@AfterEach
	public void returnResults() {
		System.out.println("The results are ready");
	}

}
