import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/container';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import './App.css'
import './index.css'
function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in" className="text-center w-100">
        <img 
        className="mb-2 user-logo"
        src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        alt= "user image" 
        />
        <h1 className=" mb-3 fs-3 fw-normal">Please sign in</h1>
        <Form.Group>
          <Form.Control type="email" size="lg" placeholder="Email address" className="mb-2" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" size="lg" placeholder="Password" className="mb-4"/>
        </Form.Group>
        <Form.Group className=" mb-3 d-flex justify-content-center">
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
        <Button variant="dark" size="lg">Sign in</Button>
        </div>
      </Form>
    </Container>
  );
}

export default App;
