import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import MapillaryViewer from './components/MapillaryViewer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";
import { Buffer } from "buffer"


const endpoint = "https://hf.space/embed/RaymondDashWu/mlh_hackathon_sum22/+/api/predict/";

function App() {
  // const container = document.createElement('div');
  // container.style.width = '400px';
  // container.style.height = '300px';
  // document.body.append(container);


  // const viewer = new Viewer({
  //   accessToken: "MLY|5494923973921616|75ede84ae518fed4232a6e7eb7d53688",
  //   container: container,
  //   imageId: "1360724954411676",
  // });

  const [imageId, setImageId] = useState("1360724954411676");

  async function predictImage(url) {
    let image = await axios.get(url, { responseType: 'arraybuffer' });
    let raw = Buffer.from(image.data).toString('base64');
    let string = "data:" + image.headers["content-type"] + ";base64," + raw;

    let predict = await axios.post(endpoint, {data: [string]})

    console.log(predict.data);

  }

  return (
    <>

      {/* {console.log(viewer.image)} */}
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}


      <div>
        {/* <MapillaryViewer
          clientId="5494923973921616"
          imageKey="1360724954411676"
          filter={['==', 'userKey', '2PiRXqdqbY47WzG6CRzEIA']}
          onTiltChanged={tilt => console.log(`Tilt: ${tilt}`)}
          onFovChanged={fov => console.log(`FoV: ${fov}`)}
          onNodeChanged={node => console.log(node)}
          onBearingChanged={bearing => console.log(`Bearing: ${bearing}`)}
        /> */}

        <div>
          <MapillaryViewer
            imageId={imageId}
            onImageChanged={image => predictImage(image.image._spatial.thumb.url)}
          />
        </div>
      </div>
    </>

  );
}

export default App;
