package com.portfolio;

class User {
	// private= restricted access
	private String username;
	private String password;

	// Setter
	public User(String username, String password) {
		this.username = username;
		this.password = password;
	}

	// Getter
	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}
}