package com.Testing1;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;

public class FizzBuzz {

	public static String fizzBuzz(int num) {
		if (num % 3 == 0 && num % 5 == 0) {
			return "FizzBuzz";
		} else if (num % 3 == 0) {
			return "Fizz";
		} else if (num % 5 == 0) {
			return "Buzz";
		} else {
			return String.valueOf(num);
		}
	}

	public boolean isDivisiblebyThree(int num) {
		// implementation for checking if a number is divisible by 3
		
		if (num % 3 == 0) {
			return true;
		}
		return false;
	}

	public boolean isDivisibleByFive(int num) {
		// implementation for checking if a number is divisible by 5

		if (num % 5 == 0) {
			return true;
		}
		return false;
	}
	 
}