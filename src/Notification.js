import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { themes } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
  // Your global styles go here
`;

const notify = () => {
  toast("first Notification");
};

function Notification() {
  return (
    <ThemeProvider theme={themes}>
      <>
        <GlobalStyle />
        <button onClick={notify}>Notify</button>
        <ToastContainer />
      </>
    </ThemeProvider>
  );
}

export default Notification;
