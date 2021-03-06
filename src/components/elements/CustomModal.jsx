import React from "react";
import { Modal, Image } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Image src={props.image} />
    </Modal>
  );
}

export default MyVerticallyCenteredModal;

