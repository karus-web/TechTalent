package com.portfolio;

public class Calculator {
	// Calculator class with methods for addition, subtraction, multiplication, and
	// division

	private double num1, num2;

	// Setter
	public Calculator(double num1, double num2) {
		this.num1 = num1;
		this.num2 = num2;
	}
	// Getter

	public double add() {
		return num1 + num2;
	}

	public double subtract() {
		return num1 - num2;
	}

	public double multiply() {
		return num1 * num2;
	}

	public double divide() {
		return num1 / num2;
	}
}