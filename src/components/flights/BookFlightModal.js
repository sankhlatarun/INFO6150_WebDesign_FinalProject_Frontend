import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Bookings from "./Bookings";

const BookFlight = ({item}) => {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false)


    return (
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Flight Booking</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Bookings item={item} />

      </Modal.Body>
    </Modal>
    )

}

export default BookFlight;