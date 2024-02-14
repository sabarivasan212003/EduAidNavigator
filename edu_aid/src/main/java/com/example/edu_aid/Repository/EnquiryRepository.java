package com.example.edu_aid.Repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
// import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.example.edu_aid.Model.EnquiryModel;

import jakarta.transaction.Transactional;

//Remove @RepositoryRestResource below to disable auto REST api:
@Repository
public interface EnquiryRepository extends CrudRepository<EnquiryModel, Long>{

     @Transactional
    @Modifying
    @Query(value = "DELETE FROM courses_model WHERE course_id = :courseId", nativeQuery = true)
    void deleteByEnquiryId(Long courseId);
}
