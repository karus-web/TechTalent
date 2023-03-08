package com.Testing10;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class SetNumber {

	 @Test
	    public void testSetNumber() {
	        FizzBuzz fb = new FizzBuzz(3);
	        fb.setNumber(5);
	        assertEquals(5, fb.getNumber());
	    }

}
