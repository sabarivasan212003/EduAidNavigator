package com.example.edu_aid.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.edu_aid.Model.EnquiryModel;
import com.example.edu_aid.Model.EnrolledcourseModel;

import jakarta.persistence.QueryHint;

// import firstsample.demo.Model.CoursesModel;
// import firstsample.demo.Model.EnrolledcourseModel;

@Repository
public interface EnrolledRepository extends CrudRepository<EnrolledcourseModel, Long>{

    @QueryHints(@QueryHint(name = "org.hibernate.cacheable", value = "true"))
    @Query("SELECT e FROM EnrolledcourseModel e WHERE e.user.user_id = :id")
    List<EnrolledcourseModel> findByUser_user_id(@Param("id") long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM enrolledcourse_model WHERE enrolled_id = :enrolledId", nativeQuery = true)
    void deleteByEnrolledId(int enrolledId);

    // @Transactional
    // @Modifying
    // @Query(value = "SELECT * FROM enrolledcourse_model WHERE user_id = :userId", nativeQuery = true)
    // Optional<EnrolledcourseModel> selectByUserId(int userId);

    @Transactional
    @Modifying
    @Query(value = "SELECT * FROM courses_model WHERE course_id =:courseId", nativeQuery = true)
    List<Object[]> getByCourseId(int courseId);

}