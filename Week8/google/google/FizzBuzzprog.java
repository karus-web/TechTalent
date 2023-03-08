
package com.google;

import java.util.Scanner;

public class FizzBuzzprog {

	public static void main(String[] args) {
		int num;
		// object of a scanner class
		Scanner sc = new Scanner(System.in);
		   System.out.println("Enter a number: ");

		// reading a number from a user
		num = sc.nextInt();

		// programme to check if the given number is Fizz, Buzz or FizzBuzz

		 if (num % 3 == 0) {
			
		 if (num % 5 == 0) {
				//prints if the number is multiple of 3 and 5
			System.out.println( num + " is FizzBuzz ");
				
			} else {
				//prints if the number is multiple of 3
			System.out.println(num + " is Fizz ");
			}

		 } else if (num % 5 == 0) {
			//prints if the number is multiple of 5
			System.out.println(num + " is Buzz ");
			
		 } else
			 //prints if number is not Fizz or Buzz
		    System.out.println(num + " is neither fizz nor buzz ");
		 
		 

		// programme to check if the given number is Positive, Negative or Zero

		// checks the number greater than 0 or not
		if (num > 0) {
			System.out.println("The number is positive.");
		}
		// checks the number is less than 0 or not
		else if (num < 0) {
			System.out.println("The number is negative.");
		}
		// executes when the above two conditions return false
		else {
			System.out.println("The number is zero.");
		}

		// programme to check if the given number is prime or not

		if (isPrime(num)) {

			System.out.println(num + " is a prime number");
		}

		else {

			System.out.println(num + " is not a prime number");
		}

	}
	// Method to check whether the parameter passed to it is a prime or not

	static boolean isPrime(int num) {

		// 0 and 1 are not prime numkbers
		// negative numbers are not prime

		if (num <= 1)
			return false;

		// special case as 2 is the only even number that is prime
		else if (num == 2)
			return true;

		// check if n is multiple of 2, thus all these won't be prime
		else if ((num % 2) == 0)
			return false;

		// If not, then check the odds
		for (int i = 2; i <= num / 2; i++) {
			// condition for non-prime number
			if ((num % i) == 0) {
				return false;

			}

		}
		return true;

	}

}
