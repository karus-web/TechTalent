// Fruity Loops

// Declare an array called fruits with data
const fruits = ["Apple", "Orange", "Banana", "Pear", "Peach", "strawberry", "Cherry", "Acai"];
let txt = "";

//function for printing "An" if first letter is Vowel
function fstvowel(vowels, consonants) {     
    
    // Displaying the amount of vowels and consonants in each word along with singular & plural logic
    if ((vowels == 1) && (consonants == 1)) {
        console.log("An " + txt + " has " + vowels + " Vowel and " + consonants + " Consonant");
    }
        else if ((vowels == 1) && (consonants > 1)){
        console.log("An " + txt + " has " + vowels + " Vowel and " + consonants + " Consonants");
    }
        else if ((vowels > 1) && (consonants == 1)){
            console.log("An " + txt + " has " + vowels + " Vowels and " + consonants + " Consonant");
    }
        else {
            console.log("An " + txt + " has " + vowels + " Vowels and " + consonants + " Consonants");
    }
}

//function for printing "An" if first letter is Consonant
function fstconsnt(vowels, consonants) {  
    
    // Displaying the amount of vowels and consonants in each word along with singular & plural logic
    if ((vowels == 1) && (consonants == 1)) {
        console.log(txt + " has " + vowels + " Vowel and " + consonants + " Consonant");
    }
        else if ((vowels == 1) && (consonants > 1)){
        console.log(txt + " has " + vowels + " Vowel and " + consonants + " Consonants");
    }
        else if ((vowels > 1) && (consonants == 1)){
            console.log(txt + " has " + vowels + " Vowels and " + consonants + " Consonant");
    }
        else {
            console.log(txt + " has " + vowels + " Vowels and " + consonants + " Consonants");
    }
}


for (let fruit in fruits) {             //for-in loop for iterating the array
    
    txt = fruits[fruit].toLowerCase();  // converting word to lowercase
    let vowels = 0;                     // declared variables for vowels & consonants
    let consonants = 0;
    var count;

    for (count = 0; count < txt.length; count++){   // for loop to look through each letter of array

        var char = txt.charAt(count);

        // if logic for identifying and counting vowels
        if (char =='a' || char =='e' || char =='i' || char =='o' || char =='u'){
            vowels++;
        }
    }
    consonants = txt.length - vowels;       // calculating consonants

    let fstLetter = txt.charAt(0);          // moving first letter of word to check a vowel

    // if else statement for printing "An" if the word starts with vowel
    if (fstLetter =='a' || fstLetter =='e' || fstLetter =='i' || fstLetter =='o' || fstLetter =='u'){
        fstvowel(vowels, consonants);
    }
    else {
        fstconsnt(vowels, consonants);
    }
}

