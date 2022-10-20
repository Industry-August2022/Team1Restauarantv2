package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repo.CustomerRepository;
import com.example.demo.model.Customer;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CustomerController {
@Autowired
CustomerRepository CR;

@PostMapping("/Customer")
public ResponseEntity<Customer> createCustomer(@RequestBody Customer cs){
	CR.save(cs);
	
	return new ResponseEntity<>(cs,HttpStatus.CREATED);
}
@GetMapping("/Customer")
public ResponseEntity<List<Customer>> getAllTutorials(){
	List<Customer> cl = new ArrayList<Customer>();
	CR.findAll().forEach(cl::add);
	return new ResponseEntity<>(cl,HttpStatus.OK);
}
@GetMapping("Customer/{id}")
public ResponseEntity<?> findbyids(@PathVariable("id") long id){
    if(CR.findById(id) != null) {Optional<Customer> C1 = CR.findById(id); return new ResponseEntity<>(C1.get(),HttpStatus.OK);}
    else {return new ResponseEntity<>(HttpStatus.NOT_FOUND); }
}
@DeleteMapping("/Customer/{id}")
public ResponseEntity<?> deletebyid(@PathVariable("id") long id){
    if(CR.findById(id) != null) {CR.deleteById(id); return new ResponseEntity<>(HttpStatus.OK);}
    else {return new ResponseEntity<>(HttpStatus.NOT_FOUND);}
}
}
