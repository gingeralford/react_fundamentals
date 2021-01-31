import React from 'react';
import Resources from '../site/Resources';
import HelloWorld from './HelloWorld';
import HelloWorldFatArrow from './HelloWorldFatArrow';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row, Col } from 'reactstrap';

const FunctionalComponentDemo =  () => {
    return (
        <Container className="main">
            <Row>
                <Col xs="12">
                    <h1>Functional Component</h1>
                    <p>Functional Components are the primary tool in React to build a small, modular piece of your page.</p>
                    <dl>
                        <dt>Can use state</dt>
                        <dd>With the '\useState' hook, functional components can now both render a display to the page and update the informatiion to be shown.</dd>
                        <dt>No 'this' keyword</dt>
                        <dd>Older class components use 'this', functional components have no 'this' object.</dd>
                        <dt>Can use effects</dt>
                        <dd>With the 'useEffect' hook, functional compenents can perform side effect with an props or state changes.</dd>
                        <dt>return()</dt>
                        <dd>Must return a single element, but this element may have nested elements inside.</dd>
                    </dl>
                </Col>
            </Row>
            <hr />    
            <h1>Challenge</h1>
            <Row>
                <Col md="6">
                    <HelloWorld />
                </Col>
                <Col md="6">
                    <HelloWorldFatArrow />
                </Col>
            </Row>
        </Container>
    );
};

export default FunctionalComponentDemo;