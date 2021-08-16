import React from "react";
import {
  useDisclosure,
  AlertDialog,
  Button,
  AlertDialogFooter,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { removeApplicant } from "../redux/modules/applicants";
import { useDispatch } from "react-redux";

const Remove = ({ data }: { data: any }) => {
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        <FaTrash />
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {data.email}
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  dispatch(removeApplicant(data._id));
                  onClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Remove;
