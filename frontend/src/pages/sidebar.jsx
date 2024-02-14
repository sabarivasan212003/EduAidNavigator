// import { Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState,useEffect } from 'react';
// import React, { useState } from 'react';
import axios from "axios";

import {
   Button,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalCloseButton,
   ModalBody,
   ModalFooter,
   Text,
   useDisclosure,
   FormControl,
   FormLabel,
   Input,
   Avatar,
 } from '@chakra-ui/react';
function Sidebar({links}) {
const navigate=useNavigate()
const email = localStorage.getItem("email1");
const [user, setUser] = useState([]);
const [isEditing, setIsEditing] = useState(false);
useEffect(() => {
  axios.get(`http://localhost:8081/user/getSignIn/${email}`).then((response) => {
    setUser(response.data);
    console.log(response.data, email);
  });
}, []);
// const [user, setUser] = useState({
 
//   companyname:"Zoho" ,
//   firstName: 'John',
//   lastName: 'Doe',
//   email: 'john.doe@example.com',
//   role:'adimin'
  
// });
const logout=()=>{
  navigate('/login');
}
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setUser((prevUser) => ({
    ...prevUser,
    [name]: value,
  }));
};
const handleEditClick = () => {
  setIsEditing(!isEditing);
};

const OverlayOne = () => (
  <ModalOverlay
    bg='blackAlpha.300'
    backdropFilter='blur(10px) hue-rotate(90deg)'
  />
);

const OverlayTwo = () => (
  <ModalOverlay
    bg='none'
    backdropFilter='auto'
    backdropInvert='80%'
    backdropBlur='2px'
  />
);

const { isOpen, onOpen, onClose } = useDisclosure();
const [overlay, setOverlay] = React.useState(<OverlayOne />);

// Replace user, handleInputChange, and handleSaveClick with appropriate values
//   const user = {}; // Define user state
//   const handleInputChange = () => {}; // Define handleInputChange function
const handleSaveClick = () => {
  setIsEditing(false);
}; // Define handleSaveClick function

    return (  

        <>
<div>

       
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
  
   <div class="h-full px-3 py-4 mb-5 overflow-y-auto bg-gray-50 dark:bg-gray-800">
   <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAACUCAMAAABiDq8bAAAAYFBMVEUAs+b///8AsOUArOT6/f7w+f2x3/RlxutMwOkAruTb8PkAqeQbsOah1/L2/P7f8/tUv+rG6feBz++Y1vHT7vnp9/xBvekst+dxyu295veP0/Cm3PNAueiz4/VbwuqJz+9PoyjFAAAFG0lEQVR4nO2c2YKjKhBAsVwIZuLCqqLm///yglFb093pmTsrWuepo2h7AhSgVghBEARBEARBEARBEARBEARBEARBEARBEARBkH8e+IGt4QOwNev7D4qYan/A772gP8g49mu9gpY1fS4AeigbtnwAU1Hz567ut9Inacsr87AHrqKy2ReAqo6i7OEOpGqsivifvsjfhI4cpR0ne2hUFKmdPFQyipLJHcjYSV/c/p1L/eVM7k7YUuc2uUeKbnq0drU+ubs6F+WjsPh7l/sLAFhC3Ozu7Stgk3sk19gGpvUbkhuD/i6XomI5Bwsw7LGxGS/aAGPMZK1UDyXJjbGp/6teoh8I/7FoK0bbYiqU5m1G/YFEX0ZKTWj2rJNlXreZEJxqxip+a3Nvlmaa8Kldizmu08RvFoZ00+ayzu4Vic3Iu5tta1mWoXV9MOnSelNnc+OauSiW5c5TUkZ90y6qKfSR3HcGzvrMHaFaQQ0ztLOupSTzCQrOvvx//xJAV/dHT5eZcM147No0KjnzY1okvTvjvq4bdqmjRN4awqrO1mWxPTbJ4r+t80M8u3uFsr6NYNzgnQrovXzjI7srV9KYlkl771nfDbJ4d2CQ7kqWyV6/vRsYbZkRL68YYS7QqZE1ed0YoJl8bi0yWPe2og0Xu6pMpXCS1k7ylLEiSilrBm4Ir8t9fd85rZpg3bPYD89uds5tvioVuSDfKIVeRvm18V+AbirG63edhLnB/RKu+zyFn1YnnVwDd34HQ5hWkQvy3JWBsVZrv1jdv7kdwbtPG4BoahfDVF5i4iq1jayPd+v2Ymiy4nDuZFqbar70aSWYm966cc4NfEtATMVo2O2Q7n4z6Zu55xeSABOGxSJdzLXbf1x3b2/4Iqtdu2f1o9ITa6aVz5Hd/T4zzGFtvLJljXOZ13wHd3dtfZn1PdazUSLWG3RHd/ctf12o+65/eZM7vjuB67Cqq+396RO4E3IVs2Ieb0udwp1cu0eUu+4KncOdXP1In8T7MpN7Mt23OLx7xD5w53GjkuJ87qJI3PKGxd0FzuYO2k7PLR73t8/lTiDe3Jk8mfv+NOiO7qGA7uj+Geh+TvfYP3dXL58zHtYd6O1246+LHNWdAIvj14+Xj+v+HadBd3QPBXRH9585DbqjeyigO7r/zGnQHd1D4fvc4aucoOO6A/kqNeyw7sy/flC+9ArZ/eWdiWPfrxu+verTL92nw4yhwbqrQfCx7435MNHxU3dX2PT9hXfZ9Gp1mO4PVG2bqn/v//EzaP/e9ciHzYv3wblfnl4Jzwc+6r3+e3e3u3fean9oYsPKlyGkjp4p6o7qzaD27A5gxq59lzISlWNgSWKgBynzUqXP+qNZKn/vDkTzYVe6UGUupawDS5Mi/uY7MZr6eCVztcmaUbbpH/Zbd58Hu2kpRSnrzGfWuTDJglP3+KRQxsBcuF0TI71Yy7W3f3N35uItqUTJVjQaYnfol5Pef53pC9Dc1mvsdvYGVneAy5u5GxTcN8NCzIL9FKdjmtuaEFS0DczuzHTLi8WJzLg5lveM09c8W2pY2eld6iSmQ7EEQlGRI4o/cAGQru27nRrBkvBetHcdeu/+Cubi2jYJcE4ZqXl/3Cp/w9nb51kf12cw97iwt532JbY6emvfwnqxTl4lNUFOX/43YOjc660+UZ3PwPTzJlET3M9Z/ArADMmaF3c2wFT9Oc095zVHEARBEARBEARBEARBEARBEARBEARBEAQJmf8AoMJJ7/ZTFfsAAAAASUVORK5CYII=" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EduAid</span>
    </a>
      <ul class=" mt-20 space-y-2 font-medium mb-5">{links.map((links)=>( <li>
            <a href="#" class="mb-10 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <Link to={links.link}>
               <button>
               
               <span class="flex-1 ms-3 whitespace-nowrap text-white">{links.name}</span>
               </button>
            </Link>
            </a>
         </li>))
     
        
      
       } </ul>
       <a href="#" class="mb-10 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
                      <button  onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}>
               
               <span class="flex-1 ms-3 whitespace-nowrap text-white">profile</span>
               </button>
               </a>
       <a href="#" class="mb-10 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
                      <button  onClick={logout} >
               
               <span class="flex-1 ms-3 whitespace-nowrap text-white">logout</span>
               </button>
               </a>
       {/* <Button
        ml='4'
       
      >
        Use Overlay two
      </Button> */}
   </div>
</aside>
</div>
<div className='flex flex-row'>
      <div className='fixed z-50'>
      {/* <Sidebar links={student} /> */}
      </div>
<div>
    
      {/* <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Use Overlay one
      </Button> */}
     
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
            <Avatar name={user.user_name} size="xl" />

              <h1></h1>
              <br></br>
              <FormLabel>
                Name : <b>{user.user_name}</b>{' '}
              </FormLabel>
              <h1></h1>
              {/* <FormLabel>
                Last name : <b>{user.lastName}</b>{' '}
              </FormLabel> */}
              <FormLabel>
                Last name : <b>{user.email}</b>{' '}
              </FormLabel>
              <FormLabel>
                College :{' '}
                <b>Sri krishna college of engineering and technology</b>{' '}
              </FormLabel>
            </FormControl>       
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
      </div>  
</>
    );
}

export default Sidebar;