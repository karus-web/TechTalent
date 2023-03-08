package com.portfolio;

public class PortfolioLeapYear {
	private int year;

	public PortfolioLeapYear(int year) {
		this.year = year;
	}
	// If y is divisible by 400, y is divisible by 4 and y is not divisible by 100
	// then it is leap year.

	// To check year is a LeapYear or not
	public boolean isLeapYear() {
		if (year % 4 == 0) {
			if (year % 100 == 0) {
				return year % 400 == 0;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}

}
