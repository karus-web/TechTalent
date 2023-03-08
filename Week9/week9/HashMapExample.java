package com.week9;

import java.util.HashMap;

public class HashMapExample {

	public static void main(String[] args) {

		HashMap<Integer, String> languages = new HashMap<Integer, String>();

		languages.put(1, "Python");
		languages.put(2, "Java");
		languages.put(3, "SQL");
		languages.put(4, "Java Script");
		languages.put(5, "C++");
		languages.put(6, "Swift");

		System.out.println("HashMap: " + languages);

		// get() method to get value
		String value = languages.get(1);
		System.out.println("Value at index 1: " + value);

		// return set view of keys
		// using keySet()
		languages.keySet();
		System.out.println("Keys: " + languages.keySet());

		// return set view of values
		// using values()
		System.out.println("Values: " + languages.values());

		// return set view of key/value pairs
		// using entrySet()
		System.out.println("Key/Value mappings: " + languages.entrySet());

		// returns the number of items in HashMap
		// using size()
		System.out.println(languages.size());

		// change element with key 6
		// using replace()
		languages.replace(6, "C");
		System.out.println("HashMap using replace(): " + languages);

		// checks if the specified key is present in HashMap
		// Using containsKey();
		languages.containsKey(5);
		System.out.println("HashMap  using containsKey() : " + languages.containsKey(5));

		// checks if HashMap contains the specified value
		// Using containsValue();
		languages.containsValue(7);
		System.out.println("HashMap  using containsValue() : " + languages.containsValue(7));

	}
}
