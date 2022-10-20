package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name="Customer")
public class Customer {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long cid;
@Column(name = "CustomerName")
private String CustomerName;
@Column(name = "Address")
private String Address;

public Customer() {
	super();
	// TODO Auto-generated constructor stub
}
public Customer(String customerName, String address) {

	this.CustomerName = customerName;
	this.Address = address;
}
public long getCid() {
	return cid;
}
public void setCid(long cid) {
	this.cid = cid;
}
public String getCustomerName() {
	return CustomerName;
}
public void setCustomerName(String customerName) {
	CustomerName = customerName;
}
public String getAddress() {
	return Address;
}
public void setAddress(String address) {
	Address = address;
}

	
}
