import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import "../assets/styles/Email.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { BsReply } from "react-icons/bs";
import { RiReplyLine } from "react-icons/ri";
import { RiShareForwardLine } from "react-icons/ri";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { CourierProvider, Inbox } from "@trycourier/react-inbox";

function EmailFunctionality() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const handleEmail = async () => {
    const response = await axios.get("http://localhost:8000/user/getAllData");
    if (response.status === 200) {
      setData(response.data.data);
      setInfo(response.data.data[0]);
    }
  };
  useEffect(() => {
    handleEmail();
  }, []);
  return (
    <>
      <MainLayout>
        <div className="row z-1 mt-1 " style={{ padding: "20px" }}>
          <div className="col-sm-4  pt-2 rounded-3  ">
            <div className=" bg-light p-2 w-100 rounded-1">
              <div className="row p-2 d-flex justify-content-center align-items-center w-full  ">
                <div className="col-sm-4">
                  <img
                    width={50}
                    src="https://giftolexia.com/wp-content/uploads/2015/11/dummy-profile.png"
                    alt=""
                  />
                </div>
                <div className=" column col-sm-8 ml">
                  <div className="ml-40" >
                    <button
                      className="text-truncate"
                      type="button"
                      onClick={handleShow}
                      style={{ backgroundColor: "hsl(192, 75%, 85%)" }}
                    >
                      Compose
                    </button>
                  </div>
                </div>
              </div>
              <div className="searchBox">
                {/* <CiSearch /> */}
                <input
                  class="mainLoginInput"
                  type="text"
                  placeholder="&#61442; Search"
                />
              </div>

              <hr />

              {/* <div></div> */}

              {/* <div className="asd"> */}
              {data.map((val, index) => {
                return (
                  <div className="responsive">
                    <Link className="list-group-item list-group-item-action ">
                      <div className="d-flex">
                        <div className=" px-1 text-start">
                          <img
                            className="w-75"
                            //  style={{width:"80px"}}
                            src={val.image}
                          />
                        </div>
                        <div className="">
                          <div className="d-flex justify-content-between w-100">
                            <h5 className=" p-1 mb-1 fs-6 fw-bold">
                              {val.name}
                            </h5>
                            <small className="text-end">12:29 PM</small>
                          </div>
                          <p className="p-1 mb-1 text-start">
                            Some placeholder content in a paragraph. And some
                            small print.{" "}
                          </p>
                        </div>
                      </div>
                    </Link>
                    <hr />
                  </div>
                );
              })}
              {/* </div> */}
            </div>
          </div>
          {/* email Layout box */}

          <div className="  responsive col-sm-8  pt-2   ">
            <div className="bg-light rounded-3  " style={{ height: "100%" }}>
              <div className="row p-2 d-flex justify-content-center align-items-center w-full  ">
                <div className="col-sm-4">
                  <img width={50} src={info.image} alt="" />
                </div>
                <div className=" column col-sm-8 ml">
                  <h>
                    {info.createdAt
                      ? info.createdAt.toString().slice(11, 19)
                      : ""}
                  </h>
                  <div className="ml-40" style={{ marginLeft: "90%" }}>
                    <BsReply />
                  </div>
                </div>
              </div>
              {/* <br/> */}
              <div className="p-3">
                <h6>Its here! Figma design UI</h6>
                <p>
                  Dear,
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque modi
                  <br />
                  <br />
                  asperiores ut voluptates id sunt, amet, dolor laborum vel ad
                  eum quasi nostrum accusamus ratione voluptate culpa commodi
                  numquam hic! Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Vitae pariatur exercitationem consequuntur,
                  distinctio officia alias natus,
                  <br />
                </p>
                <h6>Best Regard </h6>
                <p>speriores ut</p>
                <br />
                <div className="">
                  {" "}
                  <h6> 2 Attachments</h6>
                </div>
                <br /> <br />
                <div className=" ">
                  <button
                    type="button"
                    className=""
                    style={{ backgroundColor: "hsl(192, 75%, 85%)" }}
                  >
                    <RiReplyLine /> Reply
                  </button>
                  <button
                    type="button"
                    className=""
                    style={{ backgroundColor: "hsl(192, 75%, 85%)" }}
                  >
                    {" "}
                    <RiShareForwardLine /> Forward
                  </button>
                </div>
              </div>

              {/* Email Modal  */}
              {/* <div className="position-absolute bottom-0 end-0 pe-4 w-75"> */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>New Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <div className=" d-flex  ">
                        <label htmlFor="">To : </label>{" "}
                        <input
                          type="text"
                          className=" form-control w-75  border-0"
                        />
                      </div>{" "}
                      <hr className="m-0" />
                      <div className=" d-flex  ">
                        <label htmlFor="">Cc : </label>{" "}
                        <input
                          type="text"
                          className=" form-control w-75  border-0"
                        />
                      </div>
                      <hr className="m-0" />
                      <div className=" d-flex  ">
                        <label htmlFor="">Bcc : </label>{" "}
                        <input
                          type="text"
                          className=" form-control w-75  border-0"
                        />
                      </div>
                      <hr className="m-0" />
                      <div className=" d-flex  ">
                        <label htmlFor="">Subject : </label>{" "}
                        <input
                          type="text"
                          className=" form-control w-75  border-0"
                        />
                      </div>
                      <hr className="m-0" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      {/* <Form.Label>Example textarea</Form.Label> */}
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* </div> */}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default EmailFunctionality;
