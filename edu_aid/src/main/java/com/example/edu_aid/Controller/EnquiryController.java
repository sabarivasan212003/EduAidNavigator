package com.example.edu_aid.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.edu_aid.Model.EnquiryModel;
import com.example.edu_aid.Service.EnquiryService;

// import com.example.edu_aid.Model.CoursesModel;
// import com.example.edu_aid.Service.CoursesService;

@RestController
@CrossOrigin("*")
// @RequestMapping("/api/v1/auth/")	
public class EnquiryController{
	@Autowired
	public EnquiryService ServiceImp;
	@PostMapping("/postenq")
	public EnquiryModel saveSignInDetails(@RequestBody EnquiryModel sign){
		// System.out.println("SignIn save works properly!");
	    ServiceImp.saveSignInDetails(sign);
        return sign;
	}
	// @GetMapping("/getSignIn")
	// public UserModel findStudent(@RequestParam int id){
	// 	return ServiceImp.findSignInDetails(id);
	// }
	@GetMapping("admin/getenq")
	public List<EnquiryModel >findAllSignDetails(){
		return ServiceImp.findAllSignInDetails();
	}
	@PutMapping("andmin/updateenq")
	public EnquiryModel updateSignInDetails(@RequestBody EnquiryModel sign) {
		return ServiceImp.updateSignInDetails(sign);
	}
	@DeleteMapping("admin/deleteenq")
	public String deleteSignInDetails(@RequestParam int id) 
	{
		
		ServiceImp.deleteSignInDetails(id);
		return "Signin Details Deleted !";
	} 
	
}