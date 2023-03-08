package com.week9;

import java.util.Scanner;

public class GenerateTimesTable {

	public static void main(String[] args) {
		 int n, i;
		 
		 //prompt the user to enter an integer for it's  multiplication table
		 Scanner in = new Scanner(System.in);
		 System.out.println("Enter an integer to print it's multiplication table : ");
		 n = in.nextInt();
		 for(i =1; i <= 10 ; i++)
		 {
			 System.out.println(n + " * " + i +  " = "   +  (n*i));
		 }

	}

}
