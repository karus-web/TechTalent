package com.portfolio11;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;


   @DisplayName("Test class demonstrating how to use the before and after annotations.")
   
class CalculatorTest1 {
	   
	@BeforeAll

	public static void powerOnCalculator() {
		System.out.println("The calculator is on");
	}

	 @BeforeEach
	 public void clearCalculator() {
		 System.out.println("The calculator is ready");
	 }
	 
	 
	@Test
	@DisplayName("Testing method that adds two integer values.")
	public void testAdd() {
		assertEquals(10, Calculator.add(7, 3));
	}

	@Test

	@DisplayName("Testing method that subtracts one integer value from another.")
	public void testSubtract() {
		assertEquals(6, Calculator.subtract(9, 3));
	}

	@Test
	@DisplayName("Testing method that multiplies two integer values")
	public void testMultiply() {

		assertEquals(18, Calculator.multiply(6, 3));
	}

	@Test
	@DisplayName("Testing method that divides one integer value by another")
	public void testDivide() {
		assertEquals(16, Calculator.divide(32, 2));
	}
	
	
	@AfterAll
	 public static void powerOffCalculartor() {
		System.out.println("The calculator is off");
	}
	 
	@AfterEach
	public void returnResults() {
		System.out.println("The results are ready");
	}
}
