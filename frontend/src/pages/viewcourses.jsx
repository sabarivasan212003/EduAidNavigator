import Sidebar from "./sidebar";
import { useState, useRef, useEffect } from "react";
import { student } from "../constants/sideConstants";
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
  useToast,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

function Viewcourses() {
  
  const [enquiries, setEnquiries] = useState([]);
  const email = localStorage.getItem("email");
  const [coursed, setCoursed] = useState({});
  const [enrolledCourse,setEnrolledCourses]=useState([]);
  const [user, setUser] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentDate = new Date();
const day = currentDate.getDate(); // Get the day (1-31)
const month = currentDate.getMonth() + 1; // Get the month (0-11) and add 1 to get the correct month
const year = currentDate.getFullYear(); // Get the full year
const dateString = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
// Format the date string as YYYY-MM-DD
  const [newEnroll, setNewEnroll] = useState({
    enrolledId: 1,
    date: dateString,
    status: "not started",
    user: null,
    courses: null,
  });
  useEffect(() => {
    
    axios.get('http://localhost:8081/getenroll').then((response) => {
      setEnrolledCourses(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:8081/user/getSignIn/${email}`).then((response) => {
      setUser(response.data);
      console.log(response.data, email);
    });
  }, []);

  const handleCourseChange = (e) => {
    axios.get(`http://localhost:8081/${e}`).then((response) => {
      setCoursed(response.data);
      console.log(Math.floor(Math.random() * 10000) + 1)

      setNewEnroll((prev) => ({
        ...prev,
        enrolledId : Math.floor(Math.random() * 10000) + 1,
        user:user,
        courses: response.data,
      }));
    });
  };

  const enroll = () => {
    console.log(newEnroll);
    axios.post("http://localhost:8081/user/postenroll", newEnroll).then((response) => {
      console.log(response.data);
    });
    onClose()
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/getcourse");
        const data = await response.json();
        // const color = localStorage.getItem("email");
        console.log(data);
        setEnquiries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const initialRef = useRef();
  const finalRef = useRef();
  const toast = useToast();

  return (
    <>
      <div className="flex flex-row">
        <div className="fixed z-50">
          <Sidebar links={student} />
        </div>

        <div>
          <SimpleGrid spacing={10} marginLeft="72" columns={[1, 2]}>
            {enquiries.map((enq) => (
              !enrolledCourse.some(enrolledCourse => enrolledCourse.courses.course_id === enq.course_id) && (
              <div className="ml-62 mt-10">
                <Card
                  direction={{ base: "column" }}
                  overflow="hidden"
                  variant="outline"
                  boxShadow="md"
                  borderRadius="md"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={enq.imageUrl}
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <CardBody>
                      <Heading size="md">{enq.course_name}</Heading>

                      <Text py="2">{enq.description}</Text>
                      <Text>
                        <bold>
                          <h1>Time Duration : {enq.duration} Hours</h1>
                        </bold>
                      </Text>
                      <Text>
                        <bold>
                          <h1>{enq.level}</h1>
                        </bold>
                      </Text>
                    </CardBody>

                    <CardFooter>
                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent bg="gray.700">
                          <ModalHeader color="orange" textAlign="center">
                            Confirmation
                          </ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Text color="white" textAlign="center">
                              Are You Surely Want to{" "}
                              <span className="text-teal-200">Enroll the Course</span>
                            </Text>
                          </ModalBody>
                          <ModalFooter>
                            <Button colorScheme="teal" mr={3} onClick={enroll} justifySelf="center">
                              Yes
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                      <button
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => {
                          handleCourseChange(enq.course_id);
                          onOpen();
                        }}
                      >
                        Enroll
                      </button>
                    </CardFooter>
                  </Stack>
                </Card>
              </div>
            )))}
          </SimpleGrid>
        </div>
      </div>
    </>
  );
}

export default Viewcourses;
