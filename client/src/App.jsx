import React from "react";
import { Typography, AppBar } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Option from "./components/Option";
import Notification from "./components/Notification";
import { makeStyles } from "@mui/styles"; // Import makeStyles from @mui/styles



const App = () => {
 // Fix the variable name
  return (
    <div>
      <AppBar  position="static" color="inherit">
        {" "}
        {/* Fix the class name */}
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Option>
        <Notification />
      </Option>
    </div>
  );
};

export default App;
