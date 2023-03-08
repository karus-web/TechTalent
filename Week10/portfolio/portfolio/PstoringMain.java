package com.portfolio;

import java.util.Scanner;

public class PstoringMain {

	public static void main(String[] args) {

		// prompt the user to enter username and password
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter username: ");
		String username = scanner.nextLine();
		System.out.print("Enter password: ");
		String password = scanner.nextLine();

		// create a User object and print out the username and password stored in the
		// object.
		User user = new User(username, password);
		System.out.println("Username: " + user.getUsername());
		System.out.println("Password: " + user.getPassword());
	}

}
