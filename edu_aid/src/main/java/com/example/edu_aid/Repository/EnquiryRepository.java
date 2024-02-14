package com.example.edu_aid.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
// import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.example.edu_aid.Model.EnquiryModel;
import com.example.edu_aid.Model.EnrolledcourseModel;

import jakarta.persistence.QueryHint;
import jakarta.transaction.Transactional;

//Remove @RepositoryRestResource below to disable auto REST api:
@Repository
public interface EnquiryRepository extends CrudRepository<EnquiryModel, Long>{

     @QueryHints(@QueryHint(name = "org.hibernate.cacheable", value = "true"))
    @Query("SELECT e FROM EnquiryModel e WHERE e.user.user_id = :id")
    List<EnquiryModel> findByUser_user_id(@Param("id") long id);
     @Transactional
    @Modifying
    @Query(value = "DELETE FROM courses_model WHERE course_id = :courseId", nativeQuery = true)
    void deleteByEnquiryId(Long courseId);
}
