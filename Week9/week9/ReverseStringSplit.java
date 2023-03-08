package com.week9;

import java.util.Scanner;

public class ReverseStringSplit {

	public static void main(String[] args) {
		
			//constructor of the scanner class
	    Scanner scanner = new Scanner(System.in);
	    
	       //prompt the user to enter a sentence
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();
        String reversedSentence = reverseSentence(sentence);
        System.out.println("Reversed sentence: " + reversedSentence);
    }

    public static String reverseSentence(String sentence) {
    	  //  Split sentence into words using split method 
        String[] words = sentence.split("\\s+");
          //string builder class is used to create a mutable string
        StringBuilder reversedSentenceBuilder = new StringBuilder();
        char puntuationMark = ' ';
        for (int i = words.length - 1; i >= 0; i--) {
            if(i == words.length-1){
                puntuationMark = words[i].charAt(0);
            }else if (i == words.length-2){
            	// Changing first letter of the sentence to capital Letter
                reversedSentenceBuilder.append(Character.toUpperCase(words[i].charAt(0))+words[i].substring(1).toLowerCase()).append(" ");
            }else if( i == 0){
            	// Changing first letter of the sentence to lower case as the sentence is reversed
                reversedSentenceBuilder.append(Character.toLowerCase(words[i].charAt(0))+words[i].substring(1).toLowerCase()).append(" ");
            }else{
                reversedSentenceBuilder.append(words[i]).append(" ");
            }
        } 
          //appending a punctuation mark 
        reversedSentenceBuilder.append(puntuationMark);
        return reversedSentenceBuilder.toString().trim();
    }
}
		
		
		
		
		
		
		
		
	


