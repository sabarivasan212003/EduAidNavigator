package com.example.edu_aid.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.edu_aid.Model.EnrolledcourseModel;
import com.example.edu_aid.Service.EnrolledService;

// import com.example.edu_aid.Model.EnquiryModel;
// import com.example.edu_aid.Service.EnquiryService;

// import com.example.edu_aid.Model.CoursesModel;
// import com.example.edu_aid.Service.CoursesService;

@RestController
@CrossOrigin("*")
// @RequestMapping("")
public class EnrolledController{
	@Autowired
	public EnrolledService ServiceImp;
	@PostMapping("user/postenroll")
	public EnrolledcourseModel saveSignInDetails(@RequestBody EnrolledcourseModel sign){
		// System.out.println("SignIn save works properly!");
	    ServiceImp.saveSignInDetails(sign);
        return sign;
	}
	// @GetMapping("/getSignIn")
	// public UserModel findStudent(@RequestParam int id){
	// 	return ServiceImp.findSignInDetails(id);
	// }
	@GetMapping("/getenroll")
	public List<EnrolledcourseModel >findAllSignDetails(){
		return ServiceImp.findAllSignInDetails();
	}
	@PutMapping("user/updateenroll")
	public EnrolledcourseModel updateSignInDetails(@RequestBody EnrolledcourseModel sign) {
		return ServiceImp.updateSignInDetails(sign);
	}
	@DeleteMapping("admin/deleteenroll")
	public String deleteSignInDetails(@RequestParam int id) 
	{
		
		ServiceImp.deleteSignInDetails(id);
		return "Signin Details Deleted !";
	} 
	
}