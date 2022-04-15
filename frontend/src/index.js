import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import ChatProvider from "./Context/ChatProvider";

ReactDOM.render(
  <ChatProvider>

    <BrowserRouter>
      <MantineProvider>
        <NotificationsProvider position="bottom-right">
          <App />
        </NotificationsProvider>
      </MantineProvider>
    </BrowserRouter>

  </ChatProvider>,
  document.getElementById("root")
);
