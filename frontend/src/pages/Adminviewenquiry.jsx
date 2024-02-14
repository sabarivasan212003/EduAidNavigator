import Sidebar from "./sidebar";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { AdminLinks } from "../constants/sideConstants";
import {
  Card,
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
  Avatar
} from "@chakra-ui/react";

function AdminViewEnquiry() {
  const [isOpen, setIsOpen] = useState(false);
  const initialRef = useRef();
  const finalRef = useRef();
  const [formData, setFormData] = useState({
    description: '',
    reply: '',
    enquiry_id: '', // Added enquiry_id to formData
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const [enquiries, setEnquiries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/admin/getenq");
        const data = await response.json();
        console.log(data);
        setEnquiries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8081/andmin/updateenq", formData); // Changed the endpoint to updateenquiry
      // const response = await axios.put("http://localhost:8081/andmin/updateenq", formData); // Changed the endpoint to updateenquiry
      console.log(response);
      alert("Enquiry updated successfully");
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the enquiry");
    }
    onClose(); // Close the modal after editing
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="fixed z-50">
          <Sidebar links={AdminLinks} />
        </div>
        <SimpleGrid spacing={10} marginLeft="72" columns={[1, 2]}>
          {enquiries.map((enquiry) => (
            <div className="ml-62 mt-10" key={enquiry.enquiry_id}>
              <Card
                direction={{ base: "column" }}
                overflow="hidden"
                variant="outline"
                boxShadow="md"
                borderRadius="md"
              >
                 <Avatar className="ml-12 mt-10" name={enquiry.user.user_name} />
                <Stack>
                  <CardBody>
                    <Text py="2">
                      <strong></strong>
                    </Text>
                    <Heading size="md">{enquiry.description}</Heading>
                    <Heading size="md">{enquiry.reply}</Heading>
                  </CardBody>

                  <CardFooter>
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => {
                        setFormData(enquiry); // Populate form data with existing values
                        onOpen(); // Open the modal
                      }}
                    >
                      Reply
                    </button>
                  </CardFooter>
                </Stack>
              </Card>
            </div>
          ))}
        </SimpleGrid>
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reply</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                value={formData.description}
                onChange={handleChange}
                placeholder="description"
                name="description" // Update name attribute
              />
              <Input
                value={formData.reply}
                onChange={handleChange}
                placeholder="reply"
                name="reply" // Update name attribute
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button  onClick={handleEdit}colorScheme="blue" mr={3}>
              Send
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminViewEnquiry;
