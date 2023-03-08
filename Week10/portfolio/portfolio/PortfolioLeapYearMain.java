package com.portfolio;

import java.util.Scanner;

public class PortfolioLeapYearMain {

	public static void main(String[] args) {
		// prompt the user to enter year to check if it is Leap year
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter a year: ");
		int year = sc.nextInt();
		// Create an object of class LeapYear
		PortfolioLeapYear leapYear = new PortfolioLeapYear(year);

		if (leapYear.isLeapYear()) {
			System.out.println(year + " is a leap year.");
		} else {
			System.out.println(year + " is not a leap year.");
		}
	}

}
