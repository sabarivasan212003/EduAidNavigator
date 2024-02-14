package com.example.edu_aid.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
// import firstsample.demo.Model.CoursesModel;
// import firstsample.demo.Model.EnrolledcourseModel;
// import firstsample.demo.Model.EnquiryModel;

import com.example.edu_aid.Model.CoursesModel;

@Repository
public interface CourseRepository extends CrudRepository<CoursesModel, Integer> {
   
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM courses_model WHERE course_id = :courseId", nativeQuery = true)
    void deleteByCourseId(int courseId);

    // Optional<CoursesModel> findByEmail(String email);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM enrolledcourse_model WHERE course_id = :courseId", nativeQuery = true)
    void deleteByEnrollId(int courseId);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM enquiry_model WHERE course_id = :courseId", nativeQuery = true)
    void deleteByEnquiryId(int courseId);

}