import * as React from 'react'
import { useEffect, useState } from 'react';
export interface ListProps {
    val: number;
    obj: {x: number}
}
export const List: React.FC<ListProps> = (props: ListProps) => {
    const [count, setCount] = useState(props.val);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${props.val} times`;
        return () => {
            setCount(0);
        }
    }, [props.val]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}