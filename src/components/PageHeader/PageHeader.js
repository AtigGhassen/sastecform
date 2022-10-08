/*!

=========================================================
* BLK Sastec Diagnostic - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Iframe from 'react-iframe';
// reactstrap components
import {
  // Button,
  Card,
  // CardHeader,
  CardBody,
  // CardFooter,
  // CardImg,
  // CardTitle,
  Container,
} from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center ">
        <Card className="card-register" >
              {/* <CardHeader>
                <CardImg
                  alt="..."
                  src={require("assets/img/square-purple-1.png")}
                />
                <CardTitle tag="h4">Register</CardTitle>
              </CardHeader> */}
              <CardBody>
              <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSdJDcBsutfZEFAzE_ZUDhanHistpOHkcaQpnw9j5pZ9wGfTQQ/formResponse"
               width="1040px"
               height="740px"
               id=""
               className=""
               display="block"
               position="relative"/>
              </CardBody>
              {/* <CardFooter>
                <Button className="btn-round" color="primary" size="lg">
                  Get Started
                </Button>
              </CardFooter> */}
            </Card>
        </div>
      </Container>
    </div>
  );
}
