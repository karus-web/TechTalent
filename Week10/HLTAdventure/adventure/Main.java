package com.adventure;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.println("Welcome to text-based Dungeon game!");
		System.out.println("====================================");
		System.out.println("You are in a series of rooms and must find the way out to win the game.");
		System.out.println("Your goal is to find 'pile of gold'  which is in the treasure room .");
		System.out.println("Here is your user-guide:");
		System.out.println(".......................");
		System.out.println("1.You will be prompted to enter the directions of the room.");
		System.out.println("2.Type 'north', 'south', 'east' , 'west' to move to another room.");
		System.out.println("3. To quit the game, type 'quit'");
		System.out.println("Good Luck and have fun!");
		System.out.println("============");

		// Two rooms are created, the entrance and the treasure room.

		Room entrance = new Room("You are in the entrance of the dungeon. There is a door to the north.");
		Room treasureRoom = new Room("You are in the treasure room! There is a pile of gold in the corner.");

		// The exits of the room are set and the player starts in the entrance.
		// The player can move between the rooms by entering a direction and the game
		// continues until the player reaches treasure room
		// At that point they win the game.

		entrance.setExits(null, null, null, treasureRoom);
		treasureRoom.setExits(entrance, null, null, null);

		Room currentRoom = entrance;
		while (true) {
			System.out.println(currentRoom.getDescription());
			if (currentRoom.getDescription().contains("pile of gold")) {
				System.out.println(" Congratulations!You found the treasure. You won!");
				break;
			}
			System.out.print("Where do you want to go? (north/south/east/west/quit) ");
			String direction = scanner.nextLine();
			Room nextRoom = currentRoom.getExit(direction);
			if (nextRoom == null) {
				System.out.println("You can't go that way.");
			} else {
				currentRoom = nextRoom;
			}
			if (direction.equals("quit")) {
				System.out.println("Thanks for playing");
				break;
			}

		}
	}

}
