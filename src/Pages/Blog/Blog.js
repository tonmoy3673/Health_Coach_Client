import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <div className='container py-5'>
            <h3 className='all-text mb-3 text-center py-2'>Frequently Asked Questions & Answer</h3>
        <div className='py-4'>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
            <Accordion.Header>Question-1:- Difference between SQL and NoSQL</Accordion.Header>
            <Accordion.Body>
            
            <p className='text-start'>
                1. SQL databases are relational, NoSQL databases are non-relational.<br/>
                2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.<br/>
                4. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br/>
                5. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                6. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Question-2:- What is JWT, and how does it work?</Accordion.Header>
        <Accordion.Body>
          <p className='text-start'><strong>JWT</strong> or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
          <p>
          Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.<br/>
          1. User sign-in using username and password or google/facebook.<br/>
          2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.<br/>
          3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.<br/>
          4. Resource server then verifies the authenticity of the token using the secret salt/ public key.
          
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Question-3:- What is the difference between javascript and NodeJS?</Accordion.Header>
        <Accordion.Body>
          <p className='text-start'>
            1. JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google's v8 engine.<br/>
            2. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.<br/>
            3. JavaScript can manipulate DOM or add HTML within whereas Node.js doesn't have the capability to add HTML.<br/>
            4. JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development.<br/>
            5. JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.<br/>
            6. JavaScript requires any running environment as it can execute on any engine such as Firefox's spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Question-4:- How does NodeJS handle multiple requests at the same time?</Accordion.Header>
        <Accordion.Body>
          <p className='text-start'>
          NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br/>
          If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        </div>
    );
};

export default Blog;