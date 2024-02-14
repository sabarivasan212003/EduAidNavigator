import React, { useState } from 'react';
import { student } from "../constants/sideConstants";
import Sidebar  from './sidebar';
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

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
   
    companyname:"Zoho" ,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    role:'adimin'
    
  });

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
    <div className='flex flex-row'>
      <div className='fixed z-50'>
      <Sidebar links={student} />
      </div>
<div>
    
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Use Overlay one
      </Button>
      <Button
        ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Use Overlay two
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Avatar name="sabari vasan" size="xl" />
              <h1></h1>
              <br></br>
              <FormLabel>
                First name : <b>{user.firstName}</b>{' '}
              </FormLabel>
              <h1></h1>
              <FormLabel>
                Last name : <b>{user.lastName}</b>{' '}
              </FormLabel>
              <FormLabel>
                Last name : <b>{user.email}</b>{' '}
              </FormLabel>
              <FormLabel>
                College :{' '}
                <b>Sri krishna college of engineering and technology</b>{' '}
              </FormLabel>
            </FormControl>
            {isEditing ? (
              <div className="edit-form">
                {/* Add form fields for editing user profile */}
                {/* <label>
                  Company Name:
                  <Input
                    type="text"
                    name="companyname"
                    value={user.companyname}
                    onChange={handleInputChange}
                  />
                </label> */}
                <br></br>
                <label>
                  FirstName:
                  <br></br>
                  <Input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInputChange}
                  />
                </label>
                <br></br>
                <label>
                  LastName:
                  <br></br>
                  <Input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputChange}
                  />
                </label>
                <br></br>
                
                <label>
                  Email:
                  <br></br>
                  <Input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </label>
                <br></br>
                <label>
                  role:
                  <br></br>
                  <Input
                     type="text"
                    name="role"
                    value={user.role}
                    onChange={handleInputChange}
                  />
                </label>
                {/* Add more form fields as needed */}
                <Button onClick={handleSaveClick}>Save</Button>
              </div>
            ) : (
              <Button onClick={handleEditClick}>Edit</Button>
            )}
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

export default Profile;
