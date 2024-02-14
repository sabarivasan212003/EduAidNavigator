import Sidebar from "./sidebar";
import { useState,useEffect } from "react";
import { student } from "../constants/sideConstants";
import { Card,Image,Stack,CardBody,Heading,Text,CardFooter,Button, SimpleGrid, Avatar } from "@chakra-ui/react";
function ViewEnquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const r=localStorage.getItem('name');
  const check=localStorage.getItem('id')
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(check);
        const response = await fetch(`http://localhost:8081/getSignIn/`+check);
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
  // console.log(link)
    return ( 
        <>
        <div className="flex flex-row">
        <div className="fixed z-50">
        <Sidebar links={student} />
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
     <Avatar className="ml-12 mt-10" name={r} />
    
     <Stack>
       <CardBody>
       <Text py='2'>
            <bold>
           {r}
           </bold>
         </Text>
         <Heading size='md'>{link.description}</Heading>
         <Heading size='md'>Reply:{link.reply}</Heading>
   
         
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

export default ViewEnquiry;