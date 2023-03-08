package com.Testing1;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

//Using assertSame

@DisplayName("Test class demonstrating how to use BeforeEach and AfterEach annotations")

public class FizzBuzzSame {
	@BeforeEach
	public void clearFizzBuzz() {
		System.out.println("The FizzBuzz is ready");
	}

	@Test
	public void testFizzBuzzSame() {
		// assertSame("1", FizzBuzz.fizzBuzz(1));
		// assertSame("2", FizzBuzz.fizzBuzz(2));
		// assertSame("4", FizzBuzz.fizzBuzz(4));

		assertSame("Fizz", FizzBuzz.fizzBuzz(3));
		assertSame("Buzz", FizzBuzz.fizzBuzz(5));
		assertSame("FizzBuzz", FizzBuzz.fizzBuzz(15));
	}

	@AfterEach
	public void returnResults() {
		System.out.println("The results are ready");
	}

}
