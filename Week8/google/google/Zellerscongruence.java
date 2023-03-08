package com.google;

import java.util.Scanner;

public class Zellerscongruence {
	// Create a Zellercongruence() method with an integer parameters called date,month and year
	

	static void Zellercongruence(int date, int month, int year) {

		// Convert January and February to months 13 and 14 of the previous year
		if (month == 1) {
			month = 13;
			year--;
		}
		if (month == 2) {
			month = 14;
			year--;
		}
		// Declaring variables and formula to calculate day of the week

		int q = date;
		int m = month;
		int k = year % 100; // k Is the year of the century.
		int j = year / 100; // j Is the century.
		int h = q + 13 * (m + 1) / 5 + k + k / 4 + j / 4 + 5 * j;
		h = h % 7;

		// Display result

		System.out.println("Day of the week is : ");
		switch (h) {
		case 0:
			System.out.println("Saturday");
			break;
		case 1:
			System.out.println("Sunday");
			break;
		case 2:
			System.out.println("Monday");
			break;
		case 3:
			System.out.println("Tuesday");
			break;
		case 4:
			System.out.println("Wednesday");
			break;
		case 5:
			System.out.println("Thursday");
			break;
		case 6:
			System.out.println("Friday");
			break;
		}
	}

	public static void main(String[] args) {

		// constructor of the scanner class
		Scanner in = new Scanner(System.in);

		// Prompt the user to enter a year, month, and date of the month.
		System.out.println("Enter year: ");
		int year = in.nextInt();

		System.out.println("Enter  Month: 1-12  ");
		int month = in.nextInt();

		System.out.println("Enter date of the Month:  1-31 ");
		int date = in.nextInt();

		Zellercongruence(date, month, year); // Call the Zellercongruence method and sending parameters)
	}

}
