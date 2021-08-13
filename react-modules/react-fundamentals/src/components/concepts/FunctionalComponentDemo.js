import React from 'react';


const FunctionalComponentDemo = function () {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Functional Component</h1>
                <h6>Functional Components are the primary tool in React to build a small, modular piece of your page.</h6>
                <dl>
                    <dt>Can use state</dt>
                    <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                    <dt>No 'this' keyword </dt>
                    <dd>Older class components use 'this', functional components have no 'this' object.</dd>
                    <dt>Can use effects</dt>
                    <dd>With the 'useEffect' hook, functional components can perform side effect with any props or state changes.</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element, but this element may have nested elements inside.</dd>
                </dl>
                <h1>Functional Syntax versus Arrow Function</h1>
            </div>
        </div>
    );
};



export default FunctionalComponentDemo;