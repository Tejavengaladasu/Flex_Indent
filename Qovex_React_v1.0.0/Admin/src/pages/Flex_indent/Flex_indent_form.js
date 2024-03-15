import React, { useState } from "react"

import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Label,
  Input,
  Button
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const BasicElements = () => {
  const [customchk, setcustomchk] = useState(true)
  const [toggleSwitch, settoggleSwitch] = useState(true)
  const [formdata,setFormdata]=useState({
    'college':'',
    'department':'',
    'others':'',
    'event':'',
    'date':'',
    'resource_person':'',
    'flexsize':'',
    'flexcop':'',
    'flexquality':'',
    'flexfile':'',
    'stickersize':'',
    'stickercop':'',
    'stickerfile':'',
    'foamBoardsize':'',
    'foamBoardcop':'',
    'foamBoardfile':'',
    'certifisize':'',
    'certificop':'',
    'certififile':''



  })
  const [properties, setProperties] = useState({
    Flex: false,
    Stickers: false,
    FoamBoards: false,
    Certificates: false,
  });
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setProperties({
      ...properties,
      [id]: checked,
    });
  };
  const formsubmit=()=>{
    console.log(formdata)
  }
  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Flex" breadcrumbItem="Flex Indent" />

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle className="h4">INDENT</CardTitle>
                {/* <p className="card-title-desc">
                  Here are examples of <code>.form-control</code> applied to
                    each textual HTML5 <code>&lt;input&gt;</code>{" "}
                  <code>type</code>.
                  </p> */}

                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Text
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Artisanal kale"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-search-input"
                    className="col-md-2 col-form-label"
                  >
                    Search
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="search"
                      defaultValue="How do I shoot web"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-email-input"
                    className="col-md-2 col-form-label"
                  >
                    Email
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="email"
                      defaultValue="bootstrap@example.com"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-url-input"
                    className="col-md-2 col-form-label"
                  >
                    URL
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="url"
                      defaultValue="https://getbootstrap.com"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-tel-input"
                    className="col-md-2 col-form-label"
                  >
                    Telephone
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="tel"
                      defaultValue="1-(555)-555-5555"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-password-input"
                    className="col-md-2 col-form-label"
                  >
                    Password
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="password"
                      defaultValue="hunter2"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-number-input"
                    className="col-md-2 col-form-label"
                  >
                    Number
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="number"
                      defaultValue="42"
                      id="example-number-input"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-datetime-local-input"
                    className="col-md-2 col-form-label"
                  >
                    Date and time
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="datetime-local"
                      defaultValue="2019-08-19T13:45:00"
                      id="example-datetime-local-input"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-date-input"
                    className="col-md-2 col-form-label"
                  >
                    Date
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="date"
                      defaultValue="2019-08-19"
                      id="example-date-input"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-month-input"
                    className="col-md-2 col-form-label"
                  >
                    Month
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="month"
                      defaultValue="2019-08"
                      id="example-month-input"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-week-input"
                    className="col-md-2 col-form-label"
                  >
                    Week
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="week"
                      defaultValue="2019-W33"
                      id="example-week-input"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-time-input"
                    className="col-md-2 col-form-label"
                  >
                    Time
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="time"
                      defaultValue="13:45:00"
                      id="example-time-input"
                    />
                  </div>
                </Row> */}
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-color-input"
                    className="col-md-2 col-form-label"
                  >
                    Color
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control form-control-color mw-100"
                      type="color"
                      defaultValue="#556ee6"
                      id="example-color-input"
                    />
                  </div>
                </Row> */}
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label">Name Of The College:</label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={(e)=>setFormdata({...formdata,college:e.target.value})} >
                      <option>Select</option>
                      <option>Aditya Engineering College(A)</option>
                      <option>Aditya College Of Engineering & Technology(A)</option>
                      <option>Aditya College Of Engineering</option>
                      <option>Aditya Polytechnic Colleges(A)</option>
                      <option>Aditya Pharmacy College (A)</option>
                      <option>Aditya College of Pharmacy (A)</option>
                      <option>Aditya Global Business School</option>
                      <option>Aditya Degree and PG College</option>
                      <option>Technical Hub</option>
                      
                    </select>
                  </div>
                </Row>
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label">Name Of The Department:</label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={(e)=>setFormdata({...formdata,department:e.target.value})} >
                      <option>Select</option>
                      <option>CSE</option>
                      <option>ECE</option>
                      <option>EEE</option>
                      <option>CE</option>
                      <option>ME</option>
                      <option>IT</option>
                      <option>Min.E</option>
                      <option>PT</option>
                      <option>Ag.E</option>
                      <option>AIML</option>
                      <option>DS</option>
                      <option>HBS</option>
                      <option>Other</option>
                      
                    </select>
                  </div>
                </Row>
                <Row className="mb-3">
                <label className="col-md-2 col-form-label">If Selected Others:</label>
                <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue=""
                      onChange={(e)=>setFormdata({...formdata,others:e.target.value})}
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Name Of The Event:
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue=""
                      onChange={(e)=>setFormdata({...formdata,event:e.target.value})}
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-date-input"
                    className="col-md-2 col-form-label"
                  >
                    Date
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="date"
                    //   defaultValue="2019-08-19"
                      id="example-date-input"
                      onChange={(e)=>setFormdata({...formdata,date:e.target.value})}
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Name Of The Resource Person:
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue=""
                      onChange={(e)=>setFormdata({...formdata,resource_person:e.target.value})}
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                <div className=" mb-3">
                    <label>Indent For: {"   "}</label>{"       "}
                      <input className="form-check-input" type="checkbox" value="" id="Flex"
                      checked={properties.Flex} onChange={handleCheckboxChange} 
                      required
                         />{"    "}{"  "}
                      <label className="form-check-label" htmlFor="invalidCheck">
                        Flex
                                        </label>{"   "}
                        <input className="form-check-input" type="checkbox" value="" id="Stickers"
                        checked={properties.Stickers} onChange={handleCheckboxChange} 
                        required
                         />{" "}
                      <label className="form-check-label" htmlFor="invalidCheck">
                        Stickers
                                        </label>{"   "}
                        <input className="form-check-input" type="checkbox" value="" id="FoamBoards"
                        checked={properties.FoamBoards} onChange={handleCheckboxChange} 
                        required
                         />{" "}
                      <label className="form-check-label" htmlFor="invalidCheck">
                        Foam Boards
                                        </label>{"   "}

                                        <input className="form-check-input" type="checkbox" value="" id="Certificates"
                        checked={properties.Certificates} onChange={handleCheckboxChange} required/>{" "}
                      <label className="form-check-label" htmlFor="invalidCheck">
                        Certificates
                                        </label>
                    </div>
                </Row>
                {properties.Flex &&(<Row className="mb-3">
                    <label>Flex:</label>{"   "}
                    <div className="mb-3">
                        <label>Flex Size:</label>{"  "}
                        <input
                      className=""
                      type="text"
                      defaultValue=""
                      onChange={(e)=>setFormdata({...formdata,flexsize:e.target.value})}
                    />{"   "}
                    <label>No.of Copies:</label>{"  "}
                        <input
                      className=""
                      type="number"
                      defaultValue=""
                      onChange={(e)=>setFormdata({...formdata,flexcop:e.target.value})}
                    />{"   "}
                    <label>Quality:</label>{"  "}
                        <select className="" onChange={(e)=>setFormdata({...formdata,flexquality:e.target.value})}>
                           <option>select</option>
                           <option>Flex</option>
                           <option>Star Flex</option> </select>{"   "}

                    </div>
                    <div className="mb-3 " onChange={(e)=>setFormdata({...formdata,flexfile:e.target.files[0]})}>
                        <label htmlFor="resume">Upload A Flex</label>
                        <input type="file" className="form-control" id="flex_file" />
                      </div>
                </Row>)}
                {properties.Stickers &&(<Row className="mb-3">
                    <label>Stickers:</label>{"   "}
                    <div className="mb-3">
                        <label>Stickers  Size:</label>{"  "}
                        <input
                      className=""
                      type="text"
                      defaultValue=""
                      onChange={(e)=>setFormdata({...formdata,stickersize:e.target.value})}
                    />{"   "}
                    <label>No.of Copies:</label>{"  "}
                        <input
                      className=""
                      type="number"
                      defaultValue=""
                      onChange={(e)=>setFormdata({...formdata,stickercop:e.target.value})}
                    />{"   "}
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="resume">Upload A Sticker</label>
                        <input type="file" className="form-control" id="sticker_file" onChange={(e)=>setFormdata({...formdata,stickerfile:e.target.files[0]})}/>
                      </div>
                </Row>)}
                {properties.FoamBoards && (<Row className="mb-3">
                    <label>Foam Boards:</label>{"   "}
                    <div className="mb-3">
                        <label>Foam Board Size:</label>{"  "}
                        <input
                      className=""
                      type="text"
                      defaultValue=""
                      onChange={(e)=>setFormdata({...formdata,foamBoardsize:e.target.value})}
                    />{"   "}
                    <label>No.of Copies:</label>{"  "}
                        <input
                      className=""
                      type="number"
                      defaultValue=""
                      onChange={(e)=>setFormdata({...formdata,foamBoardcop:e.target.value})}
                    />{"   "}
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="resume">Upload A Foam Board</label>
                        <input type="file" className="form-control" id="foam_board_file" onChange={(e)=>setFormdata({...formdata,foamBoardfile:e.target.value})}/>
                      </div>
                </Row>)}
                {properties.Certificates &&(<Row className="mb-3">
                    <label>Certificates:</label>{"   "}
                    <div className="mb-3">
                        <label>Certificate Size:</label>{"  "}
                        <input
                      className=""
                      type="text"
                      defaultValue="A4"
                      onChange={(e)=>setFormdata({...formdata,certifisize:e.target.value})}
                    />{"   "}
                    <label>No.of Copies:</label>{"  "}
                        <input
                      className=""
                      type="number"
                      defaultValue=""
                      onChange={(e)=>setFormdata({...formdata,certificop:e.target.value})}
                    />{"   "}
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="resume">Upload A Certificate</label>
                        <input type="file" className="form-control" id="foam_board_file" onChange={(e)=>setFormdata({...formdata,certififile:e.target.files[0]})}/>
                      </div>
                </Row>)}
                <Row>
                    <label>Indent By:</label>
                    <div>
                        <label>Name Of The Coordinator:</label>{"   "}<span>surya teja</span><br/>
                        <label>Employee Id:</label>{"   "}<span>1234567890</span>
                    </div>
                </Row>
                <Row>
                      <div>
                        <Button type="submit" color="primary" className="ms-1" onClick={()=>{formsubmit()}} >
                          Submit
                        </Button>{" "}
                        
                        <Button type="reset" color="secondary">
                          Cancel
                        </Button>
                      </div>
                </Row>
                {/* <Row>
                  <label className="col-md-2 col-form-label">
                    Datalists
                    </label>
                  <div className="col-md-10">
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <datalist id="datalistOptions">
                      <option value="San Francisco" />
                      <option value="New York" />
                      <option value="Seattle" />
                      <option value="Los Angeles" />
                      <option value="Chicago" />
                    </datalist>
                  </div>
                </Row> */}
              </CardBody>
            </Card>
          </Col>
        </Row>

       

                  

                

        

      </div>
    </React.Fragment>
  )
}

export default BasicElements
