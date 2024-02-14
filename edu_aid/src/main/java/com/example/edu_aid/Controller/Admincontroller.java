package com.example.edu_aid.Controller;
import org.springframework.web.bind.annotation.RestController;

// import com.example.edu_aid.Model.Admin;
import com.example.edu_aid.Model.Admin1;
import com.example.edu_aid.Service.Adminservice;

// import firstsample.demo.Service.AdminService;
// import firstsample.demo.Model.*;
// import firstsample.demo.Service.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/auth/admin")
public class Admincontroller {
    @Autowired
	private Adminservice ServiceImp;
	@PostMapping("/saveSignIn")
	public Admin1 saveSignInDetails(@RequestBody Admin1 sign){
		// System.out.println("SignIn save works properly!");
	    ServiceImp.saveSignInDetails(sign);
        return sign;
	}
	// @GetMapping("/getSignIn")
	// public Admin findStudent(@RequestParam int id){
	// 	return ServiceImp.findSignInDetails(id);
	// }
	@GetMapping("/getAllSignIn")
	public List<Admin1>findAllSignDetails(){
		return ServiceImp.findAllSignInDetails();
	}
}