import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center mt-5 pt-5 pb-5 fw-bold fs-1 text-uppercase text-success'>My Blogs</h1>

            <h3><strong>Questions 13.1:</strong>Difference between javascript and nodejs .</h3>
            <p><strong>Answer: </strong>
                <li>JavaScript is a simple programming language that runs in any browser
                    JavaScript Engine. But Node JS is an interpreter or running environment for
                    a JavaScript programming language that holds many excesses</li>
                <li>JavaScript running in any engine like Spider monkey, JavaScript Core, V8
                    engine. But Node Js only support V8 Engine. </li>
                <li>JavaScript is normally used for any client-side activity for one web
                    application but Node JS mainly used for accessing or running any operating
                    system for non-blocking operation</li>
                <li>JavaScript is normally following Java Programming language standard but
                    node JS is written in C++ and provides a V8 engine base browser javascript
                    running engine.</li>
                <li>JavaScript is a programming language. It is running in any web browser with
                    a proper browser engine but Nodejs is an interpreter and environment for
                    JavaScript with some specific useful libraries which JavaScript programming
                    can use separately.
                </li>
            </p>

            <h3><strong>Questions 13.2:</strong> When should you use nodejs and when should you use mongodb .</h3>

            <p><strong>Answer: </strong>MongoDB and NodeJS are two different technologies. MonogDB is a
                database system which gives you a chance to efficiently store documents in
                a database and to perform operations like data updates, or to search
                documents by some criteria.
                MongoDB offers an API library that runs within a Nodejs application to give
                you programmatic access to MongoDB so you can create databases and then
                add, query, update or delete data from the MongoDB database. </p>
            <h3><strong>Questions 13.3:</strong>Differences between sql and nosql databases. .</h3>
            <p><strong>Answer: </strong>
                <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                <li>SQL databases are better for multi-row transactions, while NoSQL is
                    better for unstructured data like documents or JSON.</li>
                <li>SQL databases are table-based, while NoSQL databases are
                    document, key-value, graph, or wide-column stores.</li>
                <li>SQL databases are vertically scalable, while NoSQL databases are
                    horizontally scalable</li>
                <li>SQL databases use structured query language and have a predefined
                    schema. NoSQL databases have dynamic schemas for unstructured
                    data</li>
            </p>
            <h3><strong>Questions 13.4:</strong>What is the purpose of jwt and how does it work .</h3>
            <p><strong>Answer: </strong> JWT stand for JSON Web Token. purpose of JWT which actually is: Getting
                rid of stateful authentication! In the old days of the Web, authentication was
                a pure stateful affair. With a centralized overlord entity being responsible for
                tokens, the world was fairly simple. </p>
            <li>Tokens are issued and stored in a single service for future checking and revocation</li>
            <li>Clients and resource servers know a single point of truth for token verification and
                information gathering</li>
            <li>Basically no service can operate without having a synchronous dependency towards
                the central token store</li>
            <li>The token overlord becomes an infrastructural bottleneck and single point of failure.</li>
        </div>
    );
};

export default Blogs;