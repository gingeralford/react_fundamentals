import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const HelloWorld = function () {
    return (
        <div>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Regular Ol' Function</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">A JS Library</CardSubtitle>
          <CardText>const Helloworld = function()</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
      </Card>
    </div>
    );
}

export default HelloWorld;