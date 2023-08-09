package com.project.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Student {

 @Id
 private int id;
 private String firstname;
 private String lastname;
 private String housename;
 private String family;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getHousename() {
	return housename;
}
public void setHousename(String housename) {
	this.housename = housename;
}
public String getFamily() {
	return family;
}
public void setFamily(String family) {
	this.family = family;
}
@Override
public String toString() {
	return "Student [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", housename=" + housename
			+ ", family=" + family + "]";
}
  
}
