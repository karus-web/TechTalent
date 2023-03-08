package com.portfolio;

import java.util.Scanner;

public class CalcMain {
	// The CalcMain class creates an instance of the Calculator class and calls its
	// methods to perform the calculations.

	public static void main(String[] args) {

		// construction of scanner class
		Scanner input = new Scanner(System.in);

		System.out.println("Enter first number: ");
		double num1 = input.nextDouble();

		System.out.println("Enter second number: ");
		double num2 = input.nextDouble();

		// create an object of class Calculator
		Calculator calculator = new Calculator(num1, num2);

		System.out.println("Addition: " + calculator.add());
		System.out.println("Subtraction: " + calculator.subtract());
		System.out.println("Multiplication: " + calculator.multiply());
		System.out.println("Division: " + calculator.divide());
	}
}