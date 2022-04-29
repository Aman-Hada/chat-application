import React from 'react';
import { useState } from 'react';
import { Modal, Button, Group, useMantineTheme, CloseButton } from '@mantine/core';

const GroupChatModal = ({children}) => {
    const [opened, setOpened] = useState(false);
     const theme = useMantineTheme();
    return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={5}
      >
          <Button colorScheme="blue" mr={3} onClick={()=>setOpened(false)}>close</Button>
       
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
  
};

export default GroupChatModal;