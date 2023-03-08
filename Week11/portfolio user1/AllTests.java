package com.Testing10;

import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectClasses({
	GetNumber.class,
	GetResult.class,
	SetNumber.class })

public class AllTests {

}
