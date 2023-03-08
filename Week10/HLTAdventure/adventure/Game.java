package com.adventure;

import java.util.Scanner;

class Game {
	private Room currentRoom;

	public Game() {
		Room kitchen, diningRoom, livingRoom, office, basement;

		kitchen = new Room("in the kitchen");
		diningRoom = new Room("in the dining room");
		livingRoom = new Room("in the living room");
		office = new Room("in the office");
		basement = new Room("in the basement");

		kitchen.setExits(null, diningRoom, null, office);
		diningRoom.setExits(null, livingRoom, kitchen, null);
		livingRoom.setExits(null, null, null, diningRoom);
		office.setExits(null, kitchen, null, basement);
		basement.setExits(null, office, null, null);

		currentRoom = kitchen;
	}

	public void play() {
		Scanner in = new Scanner(System.in);
		while (true) {
			System.out.println(currentRoom.getDescription());
			System.out.print("Exits: ");
			if (currentRoom.goNorth() != null) {
				System.out.print("north ");
			}
			if (currentRoom.goEast() != null) {
				System.out.print("east ");
			}
			if (currentRoom.goSouth() != null) {
				System.out.print("south ");
			}
			if (currentRoom.goWest() != null) {
				System.out.print("west ");
			}
			System.out.println();
			System.out.print("Where do you want to go? ");
			String direction = in.nextLine();
			if (direction.equals("north")) {
				currentRoom = currentRoom.goNorth();
			} else if (direction.equals("east")) {
				currentRoom = currentRoom.goEast();
			} else if (direction.equals("south")) {
				currentRoom = currentRoom.goSouth();
			} else if (direction.equals("west")) {
				currentRoom = currentRoom.goWest();
			} else if (direction.equals("quit")) {
				System.out.println("Thanks for playing!");
				break;
			}
		}
	}
}
