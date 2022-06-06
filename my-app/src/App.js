import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import MapillaryViewer from './components/MapillaryViewer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";
import { Buffer } from "buffer"
import Overlay from './components/Overlay';

const endpoint = "https://hf.space/embed/RaymondDashWu/mlh_hackathon_sum22/+/api/predict/";

function App() {
  const [predict, setPredict] = useState("");
  const imageId = "1360724954411676";

  async function predictImage(url) {
    let image = await axios.get(url, { responseType: 'arraybuffer' });
    let raw = Buffer.from(image.data).toString('base64');
    let string = "data:" + image.headers["content-type"] + ";base64," + raw;

    let predict = await axios.post(endpoint, {data: [string]});

    console.log(predict.data.data[0].confidences[1].confidence);

    if (await predict.data.data[0].confidences[1].confidence > 0.4) {
      setPredict("There may be a pothole here!");
    }
    else {
      setPredict("");
    }
  }

  return (
    <>
      <div>
        <div>
          <MapillaryViewer
            imageId={imageId}
            onImageChanged={image => predictImage(image.image._spatial.thumb.url)}
          />
        </div>
        {predict !== "" && <Overlay text={predict}></Overlay>}
       
      </div>
    </>

  );
}

export default App;
