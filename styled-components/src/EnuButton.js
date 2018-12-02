import styled from 'styled-components';
import * as React from 'react';

const x = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "blue" : "red"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: inline-block;
    text-decoration:none;
`;

  export default x;