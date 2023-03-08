package com.Testing1;

import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectClasses({ 
	    FizzBuzzDivisibleByFive.class,
	    FizzBuzzDivisibleByThree.class,
	    FizzBuzzNotNull.class,
		FizzBuzzNull.class,
		FizzBuzzSame.class, 
		FizzBuzzNotSame.class,
		FizzBuzzTest.class })


public class AllTests {

}
