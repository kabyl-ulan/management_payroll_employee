import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'

const ModalAdminAdd = ({ isOpen, onClose, headerText, children }) => {
  return (
    <Modal
      isCentered
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{headerText}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalAdminAdd
