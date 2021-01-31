import React from 'react';

const JSXRules = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h1 classname="section-title">JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actually closer to Javascript.</dd>
                    <dt>React Elements</dt>
                    <dd>These are use to construct and update the DOM, or what you see on the screen.</dd>
                    <dt>Not Required</dt>
                    <dd>You can write in vanilla JS, but most sane people use JSX.</dd>
                </dl>
                <hr />
            </div>
            <NormalComponent />
            <CreateElementComponent />
        </div>
    );
};

export default JSXRules;

const NormalComponent = () => {
    return (
        <div style={{ border: '2px solid black' }}>
        <h1>Normal Functional Component</h1>
        <p>This was constructed with JSX in the return.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLsZtEs4N7hlthpkaRUBwqcToenaNK7tpEg&usqp=CAU" />
        </div>
    );
};

const CreateElementComponent = () => {
    return (
        React.createElement("div", {style: { border: '2px solid black' }}, 
        React.createElement("h1", null, "Normal Functional Component"), 
        React.createElement("p", null, "This was constructed with CreateElement calls in the return."), 
        React.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"}, null)
        )
    );
};