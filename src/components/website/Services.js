import React, { useState, useEffect  } from "react";  
import { Container, Row, Col } from 'react-grid-system'; 
import Filter from '../images/Filter.svg'
import Button from '@material-ui/core/Button';  
import FilterDropdown from '../filter/FilterDropdown'

function Services() {
  return (
    <div>
      <Mycomp />
    </div>
  );
}


function Mycomps() { 

  return (
      <>
    <Row >
      <Col lg={3} >
        < FilterDropdown />
      </Col>
      <Col lg={3} >
        < FilterDropdown />
      </Col>
      <Col lg={3} >
        < FilterDropdown />
      </Col>
      <Col lg={3} >
        <button className="Btn_Search_Filter">Submit</button>
      </Col>
    </Row>
      </>
  );
}


function Mycomp() {
  const [dp, setDp] = useState(false);

  return (
    <form> 
      <Button onClick={(e) => {
          e.preventDefault();
          setDp(!dp);
        }} variant="contained" color="default" className="Btn_Filter"><img style={{ paddingRight: 10 }} src={Filter} />Filter</Button>

      {dp && <Mycomps />}
    </form>
  );
}

export default Services;