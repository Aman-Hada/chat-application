import { Box } from "@mantine/core";
import SideDrawer from "../components/miscellaneous/SideDrawer";

import { ChatState } from "../Context/ChatProvider";


const ChatPage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width:"100%"}}>
      
      {user && <SideDrawer/>}
      <Box d= "flex"
      justifyContent="space-between"> 
      {/* {user && <MyChats/>}
      {user && <ChatBox/>} */}
      </Box>
      
    </div>
  );
};

export default ChatPage;
