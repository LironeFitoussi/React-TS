// import Input from "./components/Input";
import { useRef } from "react";
import Button from "./components/Button";
// import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
  // const input = useRef<HTMLInputElement>(null);
  // const handlePrintText = () => {
  //   alert(input.current?.value);
  // }

  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as {name: string, age: number};
    console.log(extractedData);
    customForm.current?.clear()
  }

  return (
    <main>
      {/* 
        <h1>Let's get started!</h1>
        <Input  id="name" label="Your name" type="text"/>
        <Input  id="age" label="Your age" type="number"/> 
        <p>
          <Button >A Button</Button>
        </p>
        <p>
          <Button href="https://www.google.com/">A Link</Button>
        </p>  
      */} 
      {/* <Container as={Button} onClick={() => {}}>Click Me!</Container>  */}
      <Form onSave={handleSave} ref={customForm}>
        <Input  id="name" label="Your name" type="text"/>
        <Input  id="age" label="Your age" type="number"/> 
        <p>
          <Button>Save</Button>
        </p>
      </Form>
      {/* <Input  id="test" label="Test" type="text" ref={input}/>  */}
      {/* <button onClick={handlePrintText}>Print Text</button> */}
    </main>
  );
}

export default App;
