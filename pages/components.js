import React from 'react';
import styled from 'styled-components';
import Button from '../components/~common/Button';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 10% 5%;
`;

function Components() {
    return (
        <Wrapper>
            <small>Heading</small>
            <small>Heading2</small>
            <small>Heading3</small>
            <small>Heading4</small>
            <small>Button</small>
            <Button>Hello</Button>
            <small>Button Raised</small>
            <Button raised>Hello</Button>
            <small>Button Outline</small>
            <Button outline>Hello</Button>
            <small>Button Secondary</small>
            <Button variant="secondary">Hello</Button>
            <small>Button Raised Secondary</small>
            <Button raised variant="secondary">Hello</Button>
            <small>Button Outline Secondary</small>
            <Button outline variant="secondary">Hello</Button>
        </Wrapper>
    );
}

export default Components;