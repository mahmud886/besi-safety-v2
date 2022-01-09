import React from 'react';
import { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import neboshCertificate from '../../../../../assets/nesbosh-certificate.jpeg';

const NebosModal = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Container fluid>
                <div className='text-center'>
                    <Button
                        className='btn btn-main btn-md'
                        onClick={() => setShow(true)}>
                        NEBOSH CERTIFICATE
                    </Button>
                </div>

                <Modal
                    className='text-center'
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName='modal-90w'
                    aria-labelledby='example-custom-modal-styling-title'>
                    <Modal.Header closeButton>
                        <Modal.Title id='example-custom-modal-styling-title'>
                            Nebosh Certificate
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={neboshCertificate} alt='' />
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    );
};

export default NebosModal;
