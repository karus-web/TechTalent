package com.google;

import java.util.Scanner;

public class CalcvelocityForce {
	    //Calculating Velocity, Distance, Time, Force and Momentum

	public static void main(String[] args) {
		
          //constructor of the scanner class
		Scanner in = new Scanner(System.in);

		int choice;
		
		
          //Prompt the user to enter the values in the given fields
		System.out.println("Which operation do you want to continue: ");
		System.out.println("1-Calculate Velocity");
		System.out.println("2-Calculate Distance");
		System.out.println("3-Calculate Time");
		System.out.println("4-Calculate Force");
		System.out.println("5-Calculate Momentum");
		choice = in.nextInt();

		if (choice == 1) {
			// velocity
			double d, t;
			System.out.println("Distance(km) : ");
			d = in.nextDouble();
			System.out.println("Time(hr) : ");
			t = in.nextDouble();
			double v = calcV(d, t);
			System.out.println("velocity(km / hr) : " + v);

		}

		else if (choice == 2) {
			// Distance
			double v, t;
			System.out.println("Velocity(km / hr ) :  ");
			v = in.nextDouble();
			System.out.println("Time(hr) :  ");
			t = in.nextDouble();
			double d = calcD(v, t);
			System.out.println("Distance(km) : " + d);

		}

		else if (choice == 3) {
			// Time
			double d, v;
			System.out.println("Distance(km) :  ");
			d = in.nextDouble();
			System.out.println("Velocity (km / hr ) : ");
			v = in.nextDouble();
			double t = calcT(d, v);
			System.out.println("Time(hr) : " + t);

		}

		else if (choice == 4) {
			// Force
			double m, a;
			System.out.println("Mass(kg) = ");
			m = in.nextDouble();
			System.out.println("Accleration(m / sec*sec ) : ");
			a = in.nextDouble();
			double f = calcF(m, a);
			System.out.println("Force(N) = " + f);

		}

		else if (choice == 5) {
			// Momentum
			double m, v;
			System.out.println("Mass(kg) : ");
			m = in.nextDouble();
			System.out.println("Velocity( km / hr ) :  ");
			v = in.nextDouble();
			double p = calcP(m, v);
			System.out.println("Momentum (kg *mt /sec ) : " + p);

		}

		else {
			System.out.println("Invalid selection");
		}

	}

	     // velocity method
     public static double calcV(double dist, double time) {
		double v = dist / time;
		return v;

	}

	    // Distance method
	public static double calcD(double velo, double time) {
		double d = velo * time;
		return d;
	}
	  
	    //Time method

	public static double calcT(double dist, double velo) {
		double t = dist / velo;
		return t;
	}

	   // Force method

	public static double calcF(double mass, double accleration) {
		double f = mass * accleration;
		return f;

	}
	   //Momentum method

	public static double calcP(double mass, double velo) {
		double p = mass * velo;
		return p;

	}

} 

