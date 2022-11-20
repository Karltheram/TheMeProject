import React, { useRef, useState } from 'react'
import {Container,Row,Col,Image,Form, Button, Stack, Card} from 'react-bootstrap'
import {firestore} from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import {BsEmojiDizzy, BsEmojiFrown, BsEmojiSmile, BsEmojiLaughing, BsEmojiExpressionless} from "react-icons/bs"
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export const Calendar = () => {

  const [note, setNote] = useState("")
  const [emoji, setEmoji] = useState("")
  const [sleep, setSleep] = useState("")
  const handleSave = async (e) => {
    e.preventDefault();
 
    
    try {
      const messageRef = await addDoc(collection(firestore, "Entry"), {message: note});
    } catch(e) {
      console.log(e);
    }
  };
  const handleSave2 = async (e) => {
    e.preventDefault();
 
    
    try {
      const messageRef2 = await addDoc(collection(firestore, "Emoji"), {emoji: emoji});
    } catch(e) {
      console.log(e);
    }
  };
  const handleSave3 = async (e) => {
    e.preventDefault();
 
    
    try {
      const messageRef3 = await addDoc(collection(firestore, "Sleep"), {sleep: sleep});
    } catch(e) {
      console.log(e);
    }
  };

    return (
  
        <div className="bg-gradient-to-b from-sky-500 to-sky-300 w-full
        text-white h-screen" >
          <Container>
          <Row className="px-4">
            <Col sm={12}><h4>Day<br/>Date</h4></Col>
          </Row>
          <Row className="px-4 my-5">
            <Col md={{ span: 3, offset: 2 }}><br/><br/>
            <Form className="text-center" onSubmit={handleSave2}>
              <Card.Header><h5 className="mb-4 text-4xl">How are you feeling today?</h5></Card.Header>
              <Card.Body>
                <Stack direction="horizontal" gap={3}>
                  <Button className="flex-row ml-2 mr-2" onChange={(e)=>setEmoji(e.target.value)}>
                      <BsEmojiDizzy size={70} className="text-sky-200">
                      </BsEmojiDizzy>
                  </Button>
                  <Button className="flex-row ml-2 mr-2" value={emoji} onChange={(e)=>setEmoji(e.target.value)}>
                      <BsEmojiFrown size={70} className="text-sky-200">
                      </BsEmojiFrown>
                  </Button>
                  <Button className="flex-row ml-2 mr-2" value={emoji} onChange={(e)=>setEmoji(e.target.value)}>
                      <BsEmojiExpressionless size={70} className="text-sky-200">
                      </BsEmojiExpressionless>
                  </Button>
                  <Button className="flex-row ml-2 mr-2" value={emoji} onChange={(e)=>setEmoji(e.target.value)}>
                      <BsEmojiSmile size={70} className="text-sky-200">
                      </BsEmojiSmile>
                  </Button>
                  <Button className="flex-row ml-2 mr-2" value={emoji} onChange={(e)=>setEmoji(e.target.value)}>
                      <BsEmojiLaughing size={70} className="text-sky-200"></BsEmojiLaughing></Button>
                </Stack>
                <Button className="mx-auto text-center bg-sky-500 w-20 h-9 text-lg rounded-md"  type="submit">
                Save
              </Button>
              </Card.Body>
            </Form>
            </Col>
            <Col md={{ span: 3, offset: 2 }}><br/><br/>
            <Form className="text-center" onSubmit={handleSave3}>
      <Card.Header><h5 className="mb-4 text-4xl">How did you sleep last night?</h5></Card.Header>
      <Card.Body>
          <Stack direction="horizontal" gap={2}>
          <Button className="flex-row ml-2 mr-10" Value="dizzy" value={sleep} onChange={(e)=>setSleep(e.target.value)}>
                      <FaThumbsDown size={70} className="text-sky-200">
                      </FaThumbsDown>
          </Button>
          <Button className="flex-row ml-10 mr-2" value={sleep} onChange={(e)=>setSleep(e.target.value)}>
                      <FaThumbsUp size={70} className="text-sky-200" >
                      </FaThumbsUp></Button>
              </Stack>
              <Button className="mx-auto text-center bg-sky-500 w-20 h-9 text-lg rounded-md"  type="submit"onSubmit={handleSave3}>
                Save
              </Button>
      </Card.Body>
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
                id="inputNote"
                placeholder='  Type here'
                onChange={(e)=>setNote(e.target.value)}
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