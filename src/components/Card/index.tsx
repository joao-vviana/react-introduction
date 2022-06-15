import React from 'react';

type CardProps = {
    title: string;
    text?: string;
    list?: string[];
    children?: React.ReactNode
}

export default function Card({ title, text, list, children }: CardProps) {
    return (
        <div>
            <h2>{ title }</h2>
            <p>
                { text }
            </p>
            <ul>
                { list?.map(item => <li>{item}</li>) }
            </ul>
            { children }
        </div>
    )
}