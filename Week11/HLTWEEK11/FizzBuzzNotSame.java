package com.Testing1;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

//Using assertNotSame

@DisplayName("Test class demonstrating how to use BeforeEach and AfterEach annotations")

public class FizzBuzzNotSame {
	@BeforeEach
	public void clearFizzBuzz() {
		System.out.println("The FizzBuzz is ready");
	}

	@Test
	public void testFizzBuzzNotSame() {
		String result1 = FizzBuzz.fizzBuzz(1);
		String result2 = FizzBuzz.fizzBuzz(2);
		String result3 = FizzBuzz.fizzBuzz(3);

		assertNotSame(result1, result2);
		assertNotSame(result2, result3);
		assertNotSame(result1, result3);
	}

	@AfterEach
	public void returnResults() {
		System.out.println("The results are ready");
	}

}
