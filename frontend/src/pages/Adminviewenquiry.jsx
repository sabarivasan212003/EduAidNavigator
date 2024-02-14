import Sidebar from "./sidebar";
import { useState,useRef,useEffect } from "react";
import { AdminLinks, student } from "../constants/sideConstants";
import { Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button, SimpleGrid, Avatar,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter, } from "@chakra-ui/react";
function AdminViewEnquiry() {

     
  const [isOpen, setIsOpen] = useState(false);
const initialRef = useRef();
const finalRef = useRef();



const onOpen = () => setIsOpen(true);
const onClose = () => setIsOpen(false);
  // console.log(link)

  const [enquiries, setEnquiries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/admin/getenq");
        const data = await response.json();
        // const color = localStorage.getItem('email');
        // console.log(color);
        console.log(data);
        setEnquiries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        <SimpleGrid spacing={10} marginLeft='72'columns={[1,2]}>
        {enquiries.map((link)=>(
           <div className="ml-62 mt-10">
           <Card
           
     direction={{ base: 'column' }}  
     overflow='hidden'
     variant='outline'
     boxShadow='md'
     borderRadius='md'
     
    //  marginLeft='64'
   >
     {/* <Image
       objectFit='cover'
       maxW={{ base: '100%', sm: '200px' }}
       src={link. name}
       alt='Caffe Latte'
     /> */}
     <Avatar className="ml-12 mt-10" name={link.user.user_name} />
   
     <Stack>
    
       <CardBody>
       <Text py='2'>
            <bold>
           {link.user.user_name}
           </bold>
         </Text>
         <Heading size='md'>{link.description}</Heading>
   
         <Text py='2'>
           {/* {link.description} */}
         </Text>
         <Text>
          <bold>
          {/* <h1>Time Duration : {link.duration} Hours</h1> */}
          </bold>
         </Text>
         <Text>
          <bold>
          {/* <h1 className={`text-${link.colour}`}>{link.level}</h1> */}
           </bold>
         </Text>
       </CardBody>
   
       <CardFooter>
       
         {/* <Button variant='solid' colorScheme='blue'>
           Enroll now
         </Button> */}
       <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={onOpen}>Reply</button>
    

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
            <FormLabel>Reply message</FormLabel>
            <Input ref={initialRef} placeholder='First name' />
          </FormControl>

          {/* <FormControl mt={4}>
            <FormLabel>Last name</FormLabel>
            <Input placeholder='Last name' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Last name' />
          </FormControl> */}
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} colorScheme='blue' mr={3}>
            send
          </Button>
          <Button onClick={(e) => handleEdit(e, enquiry_id)}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
       </CardFooter>
     </Stack>
   </Card>
           </div>
       ) )}
       </SimpleGrid>
       
        </div>
        </>
     );
}

export default AdminViewEnquiry;