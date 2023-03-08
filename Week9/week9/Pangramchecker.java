// This program checks if the given sentence is a Pangram
// Example Pangrams as below
// 1. Sixty zippers were quickly picked from the woven jute bag
// 2. The five boxing wizards jumps quickly
// 3. Pack my box with five dozen liquor jugs
// 4. The quick brown fox jumps over the lazy dog
// 5. Fix problem quickly with galvanized jets

package com.week9;

import java.util.Scanner;

public class Pangramchecker {

	// Function to check if the sentence is a Pangram
	static void panCheck(String Str) {
		boolean[] mark = new boolean[26];
		boolean pangram = true;
		int index = 0;

		// checking each character in the sentence for all words from a to z
		for (int i = 0; i < Str.length(); i++) {
			char cur = Str.charAt(i);

			if (cur >= 'A' && cur <= 'Z') {
				index = cur - 'A';
			}

			else if (cur >= 'a' && cur <= 'z') {
				index = cur - 'a';
			}

			mark[index] = true;
		}
		for (int i = 0; i < mark.length; i++) {

			if (mark[i] == false) {
				pangram = false;
			}
		}

		if (pangram) {

			System.out.println("YAY!! It is a pangram !");
		} else {
			System.out.println("Sorry, not pangram");
		}
	}

	// Main program for checking the Pangram and asking, if user wants to continue or exit
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		boolean continueProgram = true;

		// Do-While loop used for checking the user response to continue or exit
		do {
			System.out.println("Enter a pangarm");
			String Str = sc.nextLine();
			panCheck(Str);

			Scanner decision = new Scanner(System.in);
			System.out.println("Do you want to continue? (Y / N) : ");
			String answer = decision.nextLine();

			if (answer.equalsIgnoreCase("N")) {
				System.out.println("Exiting the program...");
				continueProgram = false;
			} else if (!answer.equalsIgnoreCase("Y")) {
				System.out.println("Invalid input. Please enter 'Y' or 'N'.");
			}
		} while (continueProgram);

	}
}
