package com.example.edu_aid.Service;
import org.springframework.stereotype.Service;

import com.example.edu_aid.Model.Admin1;
import com.example.edu_aid.Repository.Adminrepository;

// import firstsample.demo.Repository.AdminRepository;

import org.springframework.beans.factory.annotation.Autowired;

// import firstsample.demo.Model.Admin;
// import firstsample.demo.Repository.AdminRepository;
import java.util.List;

@Service
public class Adminservice{
    @Autowired
    private Adminrepository signRepo;
	public Admin1 saveSignInDetails(Admin1 student) {
		// TODO Auto-generated method stub
		return signRepo.save(student) ;
	}
	// public UserModel updateSignInDetails(UserModel student) {
	// 	// TODO Auto-generated method stub
	// 	return signRepo.save(student);
	// }

	public List<Admin1> findAllSignInDetails() {
		// TODO Auto-generated method stub
		return (List<Admin1>)signRepo.findAll();
	}

	// public Admin findSignInDetails(int roll) {
	// 	// TODO Auto-generated method stub
	// 	return signRepo.findById(roll);
	// }

	// public void deleteSignInDetails(int roll) {
	// 	// TODO Auto-generated method stub
	// 	signRepo.deleteById(roll);
		
	// }
//	public List<Student> getStudentSorted(String field){
//		return studentRepo.findAll(Sort.by(Sort.Direction.DESC,field));
//	}
//
//	//pagination
//	public List<Student> getStudentWithPagination( int offset,int pageSize){
//		Page<Student> page=studentRepo.findAll(PageRequest.of(offset, pageSize));
//		return page.getContent();
//	}
////	//sorting and paging
//	public List<Student> getStudentWithPagingAndSorting(int offset,int pageSize,String field){
//		PageRequest paging =PageRequest.of(offset, pageSize,Sort.by(field));
//		Page<Student> page = studentRepo.findAll(paging);
//		return page.getContent();
//	}

}