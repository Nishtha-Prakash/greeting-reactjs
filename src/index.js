import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date(2022, 4,15,14);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate <= 12) {
    greeting = "Good Morning";
    cssStyle.color = "red";
}
else if (curDate >= 12 && curDate < 20) {
    greeting = "Good Afternoon";
    cssStyle.color = "green";
}
else {
    greeting = "Good Night";
    cssStyle.color = "blue";
}

ReactDOM.render(
    <>
        <div className='container'>
            <h1>
                Hello, <span style={cssStyle}> {greeting}</span>
            </h1>
        </div>
        <p >
            <h2>This page will greet you, according to the time by your clock!!</h2>
        </p>
    </>

    , document.getElementById("root")
);



