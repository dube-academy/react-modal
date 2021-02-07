import React, { useState } from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";

import Modal from "../components/Modal";

const Application = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Building a Reusable Modal Component in React.js</h1>
        <button onClick={() => setOpen(true)}>Open the Modal!</button>
        <img
          src="https://images.unsplash.com/photo-1612673769667-cf044ad1459b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
          style={{ width: "100vw" }}
          alt=""
        />
        <Modal isOpen={isOpen} close={() => setOpen(false)}>
          <h2>Hello from the Modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
        </Modal>
      </div>
    </>
  );
};

export default Application;
