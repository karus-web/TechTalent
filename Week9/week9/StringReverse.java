package com.week9;

import java.util.Scanner;

public class StringReverse {

	// Program to reverse order of letters in single word ensuring capital letter

	public static void reverseCharacter(String input) {
		String result = "";
		StringBuilder revString = null;
		
		         // split sentence into words
		String split[] = input.split(" ");

		for (int i = 0; i < split.length; i++) {
			revString = new StringBuilder(split[i]);
			revString = revString.reverse();

			for (int index = 0; index < revString.length(); index++) {
                 //converting first letter to upper caseK
				char c = revString.charAt(index);
				if (Character.isLowerCase(revString.charAt(0))) {
					revString.setCharAt(0, Character.toUpperCase(c));
				}

				if (Character.isUpperCase(c)) {
					revString.setCharAt(index, Character.toLowerCase(c));
				}
			}

			result = result + " " + revString;
		}
		// print the result and trim to remove leading blank space

		System.out.println(result.trim());
	}

	public static void main(String[] args) {
		// prompt the user to enter a string
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a string");
		reverseCharacter(sc.nextLine());
	}
}