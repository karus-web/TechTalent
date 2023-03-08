package com.week9;

public class Pangram {

	public static void main(String[] args) {
		String s = "Sixty zippers were quickly picked from the woven jute bag ";

		// creating a boolean array to mark the character presented in the string
		boolean[] mark = new boolean[26];
		boolean pangram = true;

		// For indexing in mark[]
		int index = 0;
		// Loop iterate over all the character
		for (int i = 0; i < s.length(); i++) {
			char ch = s.charAt(i);

			// In case of upper case letter subtract 'A' to find the index
			if (ch >= 'A' && ch <= 'Z') {
				index = ch - 'A';
			}

			// In case of lower case letter subtract 'a' to find the index
			else if (ch >= 'a' && ch <= 'z') {
				index = ch - 'a';

			}
			// If character is other than alphabet
			else
				continue;

			mark[index] = true;
		}

		// Return false if any character is unmarked
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
}
