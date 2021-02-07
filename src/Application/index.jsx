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
        <p>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis
          consectetur purus sit amet fermentum. Etiam porta sem malesuada magna
          mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Sed posuere consectetur est at lobortis.
          Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta
          sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
          vehicula ut id elit. Donec sed odio dui. Cras mattis consectetur purus
          sit amet fermentum. Etiam porta sem malesuada magna mollis euismod.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur.
          Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est
          non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
          nec elit. Sed posuere consectetur est at lobortis. Nulla vitae elit
          libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at
          eget metus.Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
          mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada
          magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id
          elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
          eget lacinia odio sem nec elit. Sed posuere consectetur est at
          lobortis. Vestibulum id ligula porta felis euismod semper. Aenean eu
          leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id
          nibh ultricies vehicula ut id elit. Donec sed odio dui. Cras mattis
          consectetur purus sit amet fermentum. Etiam porta sem malesuada magna
          mollis euismod. Sed posuere consectetur est at lobortis. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum
          nulla sed consectetur. Donec ullamcorper nulla non metus auctor
          fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor
          ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at
          lobortis. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis
          lacus vel augue laoreet rutrum faucibus dolor auctor. Donec id elit
          non mi porta gravida at eget metus.Nullam id dolor id nibh ultricies
          vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.
          Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id
          nibh ultricies vehicula ut id elit. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Sed posuere consectetur est at lobortis. Vestibulum id ligula porta
          felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem
          lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna
          mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.
          Etiam porta sem malesuada magna mollis euismod. Sed posuere
          consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas
          eget quam. Aenean lacinia bibendum nulla sed consectetur. Donec
          ullamcorper nulla non metus auctor fringilla. Duis mollis, est non
          commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit. Sed posuere consectetur est at lobortis. Nulla vitae elit
          libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at
          eget metus.
        </p>
        <div style={{ transform: "translateX(50px)" }}>
          <Modal isOpen={isOpen} close={() => setOpen(false)}>
            <h2>Hello from the Modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus. Cras justo odio, dapibus
              ac facilisis in, egestas eget quam. Cras mattis consectetur purus
              sit amet fermentum.
            </p>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Application;
