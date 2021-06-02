import {useEffect, useState} from "react";
import React from "react";

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times!`;
    }, () => {
        //HERE WE CAN UNSUBSCRIBE FROM DATA SOURCE
    });

    return (
        <div>
            <p>You clicked {count} times!</p>
        <button onClick={() => setCount(count + 1)}> Нажми на меня</button>
    </div>);
}
