import React, { useRef, useState } from 'react'
import {Container,Row,Col,Image,Form, Button, Stack, Card} from 'react-bootstrap'
import {firestore} from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import {BsEmojiDizzy, BsEmojiFrown, BsEmojiSmile, BsEmojiLaughing, BsEmojiExpressionless} from "react-icons/bs"
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export const Calendar = () => {
  const messageRef = useRef();
  const emojiRef = useRef();
  const emoji2Ref = useRef();
  const emoji3Ref = useRef();
  const emoji4Ref = useRef();
  const emoji5Ref = useRef();
  const sleepRef = useRef();
  const sleep2Ref = useRef();

  
  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);
    
    let data = {
      message:messageRef.current.value,
    }
    
    try {
      addDoc(collection(firestore, "Entry"), data);
    } catch(e) {
      console.log(e);
    }
  };

  const handleSave2 = async (e) => {
    e.preventDefault();
    console.log(emojiRef.current.value);
    
    let data = {
      emoji:emojiRef.current.value,
    }
    
    try {
      addDoc(collection(firestore, "Emoji"), data);
    } catch(e) {
      console.log(e);
    }
  };
  const handleSave3 = async (e) => {
    e.preventDefault();
    console.log(emoji2Ref.current.value);
    
    let data = {
      emoji:emoji2Ref.current.value,
    }
    
    try {
      addDoc(collection(firestore, "Emoji"), data);
    } catch(e) {
      console.log(e);
    }
  };
  const handleSave4 = async (e) => {
    e.preventDefault();
    console.log(emoji3Ref.current.value);
    
    let data = {
      emoji:emoji3Ref.current.value,
    }
    
    try {
      addDoc(collection(firestore, "Emoji"), data);
    } catch(e) {
      console.log(e);
    }
  };
  const handleSave5 = async (e) => {
    e.preventDefault();
    console.log(emoji4Ref.current.value);
    
    let data = {
      emoji:emoji4Ref.current.value,
    }
    
    try {
      addDoc(collection(firestore, "Emoji"), data);
    } catch(e) {
      console.log(e);
    }
  };
  const handleSave6 = async (e) => {
    e.preventDefault();
    console.log(emoji5Ref.current.value);
    
    let data = {
      emoji:emoji5Ref.current.value,
    }
    
    try {
      addDoc(collection(firestore, "Emoji"), data);
    } catch(e) {
      console.log(e);
    }
  };

  const handleSave7 = async (e) => {
    e.preventDefault();
    console.log(sleepRef.current.value);
    
    let data = {
      sleep:sleepRef.current.value,
    }
    
    try {
      addDoc(collection(firestore, "Sleep"), data);
    } catch(e) {
      console.log(e);
    }
  };
  const handleSave8 = async (e) => {
    e.preventDefault();
    console.log(sleep2Ref.current.value);
    
    let data = {
      sleep:sleep2Ref.current.value,
    }
    
    try {
      addDoc(collection(firestore, "Sleep"), data);
    } catch(e) {
      console.log(e);
    }
  };
    return (
  
        <div className="bg-gradient-to-b from-sky-500 to-sky-300 w-full
        text-white" >
          <Container>
          <Row className="px-4">
            <Col sm={12}><h4>Day<br/>Date</h4></Col>
          </Row>
          <Row className="px-4 my-5">
            <Col md={{ span: 3, offset: 2 }}><br/><br/>
            <Card className="text-center">
              <Card.Header><h5 className="mb-4 text-4xl">How are you feeling today?</h5></Card.Header>
              <Card.Body>
              <Stack direction="horizontal" gap={3}>
                <Form className="text-center" onSubmit={handleSave2}>
                  <Button className="flex-row ml-2 mr-2" type="submit" value="Terrible" ref={emojiRef}>
                      <BsEmojiDizzy size={70} className="text-sky-200">
                      </BsEmojiDizzy>
                  </Button>
                  </Form>
                  <Form className="text-center" onSubmit={handleSave3}>
                  <Button className="flex-row ml-2 mr-2" type="submit" value="Bad" ref={emoji2Ref}>
                      <BsEmojiFrown size={70} className="text-sky-200">
                      </BsEmojiFrown>
                  </Button></Form>
                  <Form className="text-center" onSubmit={handleSave4}>
                  <Button className="flex-row ml-2 mr-2" type="submit" value="Average" ref={emoji3Ref}>
                      <BsEmojiExpressionless size={70} className="text-sky-200">
                      </BsEmojiExpressionless>
                  </Button></Form>
                  <Form className="text-center" onSubmit={handleSave5}>
                  <Button className="flex-row ml-2 mr-2" type="submit" value="Good" ref={emoji4Ref}>
                      <BsEmojiSmile size={70} className="text-sky-200">
                      </BsEmojiSmile>
                  </Button></Form>
                  <Form className="text-center" onSubmit={handleSave6}>
                  <Button className="flex-row ml-2 mr-2" type="submit" value="Amazing" ref={emoji5Ref}>
                      <BsEmojiLaughing size={70} className="text-sky-200"></BsEmojiLaughing></Button>
                      </Form>
                      </Stack>
                
              </Card.Body>
            </Card>
            </Col>
            </Row>
            <Row className="px-4 my-5">
            <Col md={{ span: 3, offset: 2 }}><br/><br/>
            
      <Card.Header><h5 className="text-center mb-4 text-4xl">How did you sleep last night?</h5></Card.Header>
     
          
          <Form className="text-center" onSubmit={handleSave8}>
          
          <Button className="flex-row ml-2 mr-10" type="submit" value="good" ref={sleep2Ref}>
                      <FaThumbsUp size={70} className="text-sky-200" >
                      </FaThumbsUp>
                    </Button>
     
    </Form><Form className="text-center" onSubmit={handleSave7}>
          <Button className="flex-row ml-10 mr-2" type="submit" value="bad" ref={sleepRef}>
                      <FaThumbsDown size={70} className="text-sky-200">
                      </FaThumbsDown>
          </Button>
         
          </Form>
            </Col>
          </Row>
          <Row className="px-4 my-5">
            <Col md={{ span: 6, offset: 3 }}><br/>
            <Form className="text-center" onSubmit={handleSave}>
              <Form.Group className="mb-3" controlId="inputNote">
              <Form.Label><h5 className="text-center text-2xl mb-3">Why do you think you feel this way?</h5></Form.Label>
              <Form.Control
                className="w-full justify-items-center text-black"
                as="textarea"
                rows={6}
                ref={messageRef}
                id="inputNote"
                placeholder='  Type here'
                
              />
              </Form.Group>
              <Button className="mx-auto text-center bg-sky-500 w-20 h-9 text-lg rounded-md"  type="submit">
                Save
              </Button>
            </Form>
            </Col>
          </Row>
        </Container>
        </div>
    )
}