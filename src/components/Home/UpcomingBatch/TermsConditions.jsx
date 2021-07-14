import React from 'react';
import { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';

const TermsConditions = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Container fluid>
                <div className='text-center'>
                    <Button variant='light' onClick={() => setShow(true)}>
                        TERMS AND CONDITIONS
                    </Button>
                </div>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName='modal-90w'
                    aria-labelledby='example-custom-modal-styling-title'>
                    <Modal.Header closeButton>
                        <Modal.Title id='example-custom-modal-styling-title'>
                            Terms & Conditions
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ol>
                            <li>
                                The candidate/student who is enrolled with
                                Bangladesh Engineering and safety Institute will
                                have to attend the class regularly. In case, if
                                the teachers feel that the student is not
                                participating properly, creating indiscipline in
                                the institute, irregular in attendance, no0t
                                responding properly, he/she may be expelled from
                                the institute. The decision of the centre In
                                charge in this regard will be final and binding
                                on the student. No fee or part of the fee will
                                be refunded in such cases.
                            </li>
                            <li>
                                After depositing money towards registration, if
                                a student becomes disinterested in the institute
                                due to any reason whatsoever and wants to take
                                his/her money back, the institute will not
                                refund the money deposited towards
                                registration/admission fees. The
                                registration/admission deposited towards a
                                particular coursed will not be adjusted against
                                any other course as mentioned for students who
                                pay the fee instalments.
                            </li>
                            <li>
                                In case if any parent/guardian misbehave with
                                any staff of the institute, his/her ward can be
                                rusticated from the institution and no claim of
                                refund of such student will be entertained. The
                                decision of the Managing Director will be final
                                and binding on the student and parent/guardian.
                            </li>
                            <li>
                                A student is not allowed to carry mobile
                                phone/i-pod in the institute, if feel necessary
                                to carry same, then it should be switched off.
                                The institute is not responsible for any
                                loss/theft of mobile phone in the institute.
                            </li>
                            <li>
                                If any student absent himself/herself for more
                                than 7 days continuously without prior written
                                application, he/she may be seems to be expelled
                                from the institute. No fee or part of the fee
                                will be refunded in such cases. The decision of
                                the Academic Head in this regard will be final
                                and binding on the students and parents.
                            </li>
                            <li>
                                Candidate has to pay attention in learning. It
                                is candidates responsibility to learn from the
                                faculty as per course contents.
                            </li>
                            <li>
                                If faculty is irregular or not teaching
                                properly, than candidate can put written
                                complain to Academic Head in the regard.
                            </li>
                            <li>
                                BESI reserves it’s right to make any alterations
                                in its programs/fees without any prior notice to
                                anybody.
                            </li>
                            <li>
                                Candidate need to attend classes with proper
                                dress, ID card and study material.
                            </li>
                            <li>
                                If any student/candidate found in any
                                illegal/gossip/rumor activities against BESI in
                                or outside of the institutions, he/she will be
                                rusticated immediately and Institute can take
                                legal against him/her, if required.
                            </li>
                            <li>
                                All course materials provided to
                                student/candidates are reserved right to
                                BESI&gt;
                            </li>
                            <li>
                                Monthly instalment is payable on 7 th of each
                                month, failing which tk. 500/- will be fined for
                                each day.
                            </li>
                            <li>
                                BESI do not guarantee or assure any job in any
                                course. Job assistance will be provided.
                            </li>
                            <li>
                                Admission charge, Registration charge, Exam
                                charge or certificate charge are separate for
                                University degree./diploma.
                            </li>
                            <li>
                                Exam fees are extra from the total course fees.
                                That has to bear by the candidate two or three
                                months before the final exam.
                            </li>
                            <li>
                                Universities certificate fees is extra. If a
                                student wants to get certificate from
                                University, he/she has to pay certificate fees
                                to university.
                            </li>
                            <li>
                                Practical training cost (outdoor) and outdoor
                                week long or month long practical training cost
                                is extra. Not inclusive with total course fees.
                            </li>
                            <li>
                                Fee structure of the student/candidate will be :
                            </li>
                            <li>Total fees…………………………………………….</li>
                            <li>Monthly instalment.………………………………..</li>
                            <li>
                                I have read the terms and conditions and other
                                information as mentioned in the prospectus &amp;
                                promise to abide by the same.
                            </li>
                        </ol>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    );
};

export default TermsConditions;
