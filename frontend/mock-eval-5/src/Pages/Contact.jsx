import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { postContact } from "../redux/action";
import { store } from "../redux/store";

const Contact = () => {
  const [isTrue, setIsTrue] = useState(false);
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [label, setLabel] = useState("")

  const contacts = useSelector((store)=> store.userReducer.contacts)
  console.log(contacts);

  const dispatch = useDispatch()

  function handleSubmit(e){
    e.preventDefault()

    const obj = {
      name, email, phone, label
    }

    dispatch(postContact(obj))
    
  }

  return (
    <div>
      <Button mt={4}
            colorScheme='teal' onClick={() => setIsTrue(true)}>Add Contact</Button>

      {isTrue ? <FormControl style={{width: '40%', margin:'auto'}}>
        <FormLabel>Full Name</FormLabel>
        <Input onChange={(e)=> setName(e.target.value)} type="text" />
        
        <FormLabel>Email address</FormLabel>
        <Input onChange={(e)=> setEmail(e.target.value)} type="email" />

        <FormLabel>Phone Number</FormLabel>
        <Input onChange={(e)=> setPhone(e.target.value)} type="number" />

        <FormLabel>Label</FormLabel>
        <Select onChange={(e)=> setLabel(e.target.value)}>
          <option value="">Select label</option>
          <option value="work">work</option>
          <option value="school">school</option>
          <option value="friends">friends</option>
          <option value="family">family</option>
        </Select>

        <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            onClick={handleSubmit}
          >
            Submit
          </Button>

      </FormControl> : null}

      <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Full Name</Th>
        <Th>Email</Th>
        <Th isNumeric>Phone Number</Th>
        <Th>Label</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      {contacts.map((item)=> {
        return <Tr>
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td isNumeric>{item.phone}</Td>
        <Td>{item.label}</Td>
        <Td>
          <Button  mt={4}
            colorScheme='green'>Edit</Button>
          <Button style={{marginLeft:'10px'}}  mt={4}
            colorScheme='red'>Delete</Button>
        </Td>
      </Tr>
      })}
    </Tbody>
  </Table>
</TableContainer>
    </div>
  );
};

export default Contact;
