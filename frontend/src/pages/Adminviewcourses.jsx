import React from "react";
import Sidebar from "./sidebar";
import { AdminLinks } from "../constants/sideConstants";
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";

function AdminViewcourses() {
  const [formData, setFormData] = useState({
    course_id:'',
    course_name: '',
    description: '',
    duration: '',
    imageUrl: '',
    level: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [enquiries, setEnquiries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const initialRef = useRef();
  const finalRef = useRef();

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/getcourse");
        const data = await response.json();
        setEnquiries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`http://localhost:8081/admin/deletecourse?id=${courseId}`);
      setEnquiries(enquiries.filter(course => course.course_id !== courseId));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const  handleEdit = async (e, courseId) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8081/admin/updatecourse", formData);
      console.log(response);
      alert("Course updated successfully");
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the course");
    }
    onClose(); // Close the modal after editing
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="fixed z-50">
          <Sidebar links={AdminLinks} />
        </div>
        <SimpleGrid spacing={20} marginLeft="72" columns={[1, 2]}>
          {enquiries.map((enquiry) => (
            <div className="ml-62 mt-10" key={enquiry.course_id}>
              <Card
                direction={{ base: "column" }}
                overflow="hidden"
                variant="outline"
                boxShadow="md"
                borderRadius="md"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "600px" }}
                  src={enquiry.imageUrl} 
                  alt="Course Image"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{enquiry.course_name}</Heading>
                    <Text>
                      <strong>
                        <h1>{enquiry.description} Hours</h1>
                      </strong>
                    </Text>
                    <Text>
                      <strong>
                        <h1 className={`text-${enquiry.colour}`}>{enquiry.level}</h1>
                      </strong>
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => {
                      setFormData(enquiry); // Populate form data with existing values
                      onOpen(); // Open the modal
                    }}>Edit</button>

                    <Button
                      variant="solid"
                      colorScheme="red"
                      onClick={() => handleDelete(enquiry.course_id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </div>
          ))}
        </SimpleGrid>
      </div>

      {/* Modal for editing */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Course</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Course Name</FormLabel>
              <Input 
                value={formData.course_name} 
                onChange={handleChange} 
                placeholder='Course Name' 
                name="course_name" // Add name attribute
              />
              <FormLabel>Description</FormLabel>
              <Input 
                value={formData.description} 
                onChange={handleChange} 
                placeholder='Description' 
                name="description" // Add name attribute
              />
              <FormLabel>Level</FormLabel>
              <Input 
                value={formData.level} 
                onChange={handleChange} 
                placeholder='Level' 
                name="level" // Add name attribute
              />
              <FormLabel>Image URL</FormLabel>
              <Input 
                value={formData.imageUrl} 
                onChange={handleChange} 
                placeholder='Image URL' 
                name="imageUrl" // Add name attribute
              />
              <FormLabel>Duration</FormLabel>
              <Input 
                value={formData.duration} 
                onChange={handleChange} 
                placeholder='Duration' 
                name="duration" // Add name attribute
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={(e) => handleEdit(e, formData.course_id)} colorScheme='blue' mr={3}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminViewcourses;
