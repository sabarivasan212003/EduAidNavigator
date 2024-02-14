package com.example.edu_aid.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.edu_aid.Model.CoursesModel;
import com.example.edu_aid.Service.CoursesService;

@RestController
@CrossOrigin("*")
// @RequestMapping("")
public class CoursesController{
	@Autowired
	public CoursesService ServiceImp;
	@PostMapping("admin/postcourse")
	public CoursesModel saveSignInDetails(@RequestBody CoursesModel sign){
		// System.out.println("SignIn save works properly!");
		System.out.println(sign);
	    ServiceImp.saveCoursesDetails(sign);
        return sign;
	}
	// @GetMapping("/getSignIn")
	// public UserModel findStudent(@RequestParam int id){
	// 	return ServiceImp.findSignInDetails(id);
	// }
	@GetMapping("/{id}")
    public Optional<CoursesModel> getAddonByEmail(@PathVariable int id) {
        return ServiceImp.getAddonById(id);
    }
	@GetMapping("/getcourse")
	public List<CoursesModel >findAllSignDetails(){
		return ServiceImp.findAllCoursesDetails();
	}
	@PutMapping("admin/updatecourse")
	public CoursesModel updateSignInDetails(@RequestBody CoursesModel sign) {
		return ServiceImp.saveCoursesDetails(sign);
	}
	@CrossOrigin(origins = "http://localhost:5173")
	@DeleteMapping("admin/deletecourse")
	public String deleteSignInDetails(@RequestParam int id) 
	{
		
		ServiceImp.deleteCoursesDetails(id);
		return "courses Deleted !";
	} 
	
}