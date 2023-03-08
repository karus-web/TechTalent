package com.Testing10;

public class FizzBuzz {
	
	    private int number;

	    public FizzBuzz(int number) {
	        this.number = number;
	    }

	    public int getNumber() {
	        return number;
	    }

	    public void setNumber(int number) {
	        this.number = number;
	    }

	    public String getResult() {
	        if (number % 3 == 0 && number % 5 == 0) {
	            return "FizzBuzz";
	        } else if (number % 3 == 0) {
	            return "Fizz";
	        } else if (number % 5 == 0) {
	            return "Buzz";
	        } else {
	            return Integer.toString(number);
	        }
	    }
	}


