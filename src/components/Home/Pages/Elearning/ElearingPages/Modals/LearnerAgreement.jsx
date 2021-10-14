import React from 'react';
import { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import Learner from './learner1.png';

const LearnerAgreement = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Container fluid>
                <div className='text-center'>
                    <Button
                        className='btn btn-main btn-main btn-md'
                        onClick={() => setShow(true)}>
                        Learner Agreement
                    </Button>
                </div>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName='modal-90w'
                    aria-labelledby='example-custom-modal-styling-title'>
                    <Modal.Header closeButton>
                        <Modal.Title id='example-custom-modal-styling-title'>
                            Learner Agreement
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='text-center'>
                            <img
                                src={Learner}
                                alt=''
                                srcset=''
                                width='100%'
                                height='auto'
                            />
                        </div>
                        <div>
                            <ol>
                                <h2>STUDENT DECLARATION</h2>
                                <li>
                                    I understand that by signing this Learning
                                    Agreement I am entering into a contractual
                                    agreement with the BESI in relation to the
                                    delivery of the study programme listed
                                    overleaf, and the conditions listed below.
                                </li>
                                <li>
                                    The information given on this learner
                                    agreement is correct and I have received the
                                    appropriate information, advice and guidance
                                    to assist me in my choice of study
                                    programme. This study programme is available
                                    to me subject to recruiting a viable cohort
                                    of students. I accept that the study
                                    programme onto which I have enrolled will
                                    last for the duration of the dates shown on
                                    this Learning Agreement. The BESI retains
                                    the right to extend, or not extend, these
                                    dates. I consent to the BESI’s processing of
                                    my personal data, and understand that in the
                                    event of outstanding fees, my personal data
                                    may be disclosed to a third party for debt
                                    collection purposes. understand that by
                                    signing this Learning Agreement I agree to
                                    abide by the conditions set out in that
                                    agreement.
                                </li>
                                <li>
                                    <strong>Fees –</strong>I agree to confirm
                                    that I will pay the full course fees before
                                    the registration if I will fail to pay the
                                    full fees before registration then BESI has
                                    right not to do my registration I will give
                                    50% of the tuition fees during the
                                    admission.
                                </li>
                                <li>
                                    <strong>Exams –</strong>I agree to be
                                    entered into all examinations relevant to my
                                    programme of study.
                                </li>
                                <li>
                                    <strong>Attendance -</strong>I agree to
                                    attend all classes and, if the study
                                    programme is delivered via
                                    distance-learning, to frequently access the
                                    learning materials. I will seek prior
                                    approval for any planned absences and will
                                    notify the BESI of any illness as soon as
                                    possible, in accordance with BESI policy.
                                </li>
                                <li>
                                    <strong>Study Agreement -</strong>I agree to
                                    complete all work on time and to the best of
                                    my ability; to make appropriate use of study
                                    resources and to contribute to my Individual
                                    Learning Plan reviews.
                                </li>
                                <li>
                                    <strong>Disability –</strong>
                                    Please note that, where applicable, the BESI
                                    uses the information that you provide for
                                    the purposes of considering the support that
                                    may be relevant for your disability. It also
                                    passes the information to third parties as
                                    described in the Privacy Notices above. If
                                    you have any concerns or objections to the
                                    use of this data for these reasons, or if
                                    you require further details about any
                                    disability matters, please contact the
                                    Inclusive Learning Team or the Equality &
                                    Diversity Officer.
                                </li>
                                <li>
                                    <strong>Cooling-off period -</strong> If you
                                    change your mind about coming to BESI, you
                                    have 7 days from the date of signature on
                                    this agreement, (if signed prior to starting
                                    course), to inform the BESI that you wish to
                                    cancel or change your study programme.
                                    Furthermore, after commencing your study
                                    programme, should you decide you wish to
                                    cancel or change your programme you have a
                                    further 7 days from the start date of the
                                    programme to inform the BESI of your wishes.
                                </li>
                            </ol>
                        </div>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    );
};

export default LearnerAgreement;
