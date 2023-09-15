import React from 'react'

export default function Component(props) {
    return (
        <div>
            <hr />
            {props.children}
            <hr />
        </div>
    )
}
