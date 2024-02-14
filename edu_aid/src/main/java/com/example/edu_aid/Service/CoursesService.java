package com.example.edu_aid.Service;

import org.springframework.stereotype.Service;

import com.example.edu_aid.Model.CoursesModel;
import com.example.edu_aid.Repository.CourseRepository;

import org.springframework.beans.factory.annotation.Autowired;
// import firstsample.demo.Model.CoursesModel;
// import firstsample.demo.Model.EnquiryModel;
// import firstsample.demo.Repository.CourseRepository;
import jakarta.persistence.EntityExistsException;
import java.util.List;
import java.util.Optional;

@Service
public class CoursesService {
    @Autowired
    private CourseRepository courseRepository;

    public CoursesModel saveCoursesDetails(CoursesModel course) {
        return courseRepository.save(course);
    }

    @SuppressWarnings("null")
    public CoursesModel updateCoursesDetails(int id,CoursesModel updatedCourse) {
        Optional<CoursesModel> existingCourseOptional = courseRepository.findById(id);
        if (existingCourseOptional.isPresent()) {
            updatedCourse.setCourse_id(id);
            return courseRepository.save(updatedCourse);
        } else {
            // If the course with the given ID doesn't exist, you might throw an exception or handle it differently based on your application's requirements
            throw new EntityExistsException("Course not found ");
        }
    }


    public Optional<CoursesModel> getAddonById(int addonId) {
        return courseRepository.findById(addonId);
    }
    public List<CoursesModel> findAllCoursesDetails() {
        return (List<CoursesModel>) courseRepository.findAll();
    }

    public void deleteCoursesDetails(int courseId) {
        // EnquiryModel
        courseRepository.deleteByEnquiryId(courseId);
        courseRepository.deleteByEnrollId(courseId);
        courseRepository.deleteByCourseId(courseId);
    }
}