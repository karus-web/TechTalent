package com.adventure;

class Room {

	// The 'Room' class represents a room in the Dungeon and stores information
	// about its description and exists.
	private String description;
	private Room north;
	private Room south;
	private Room east;
	private Room west;

	public Room(String description) {
		this.description = description;
	}

	// The 'setExits' method sets the exits of the room
	public void setExits(Room north, Room east, Room south, Room west) {
		this.north = north;
		this.east = east;
		this.south = south;
		this.west = west;

	}

	// The 'getDescription' method returns the description of the room
	public String getDescription() {
		return description;
	}

	public Room goNorth() {
		return north;
	}

	public Room goEast() {
		return east;
	}

	public Room goSouth() {
		return south;
	}

	public Room goWest() {
		return west;
	}

	// The 'getExit' method returns the room in the specified direction.
	public Room getExit(String direction) {
		if (direction.equals("north")) {
			return north;
		} else if (direction.equals("south")) {
			return south;
		} else if (direction.equals("east")) {
			return east;
		} else if (direction.equals("west")) {
			return west;
		}

		return null;
	}
}
