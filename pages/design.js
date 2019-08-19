import React from "react";
import styled from "styled-components";
import {
  Button,
  Heading,
  Heading2,
  Heading3,
  Heading4,
  Card,
  CardContent,
  Input
} from "niyon-design";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  padding-bottom: 50px;
`;

const Menu = styled.div`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 250px;
  background: #fff;
  min-height: 100vh;
  padding: 40px 20px;
  border-right: 1px solid #ddd;

  div {
    box-sizing: border-box;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  a {
    color: #484848;
    text-decoration: none;
  }

  a:hover {
    color: #000;
  }
`;

const Column = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100vh;
  padding: 20px;
  margin-left: 20%;
`;

const Section = styled.div` 
  box-sizing: border-box;
  border-bottom: #ddd 1px solid;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function Components() {
  return (
    <Wrapper>
      <Menu>
        <div>
          <Heading3>Components</Heading3>
        </div>
        <div>
          <a href="#headings">Headings</a>
        </div>
        <div>
          <a href="#buttons">Buttons</a>
        </div>
        <div>
          <a href="#cards">Cards</a>
        </div>
        <div>
          <a href="#inputs">Inputs</a>
        </div>
      </Menu>
      <Column>
        <Section id="headings">
          <p>Heading</p>
          <Heading>Heading</Heading>
          <p>Heading2</p>
          <Heading2>Heading</Heading2>
          <p>Heading3</p>
          <Heading3>Heading</Heading3>
          <p>Heading4</p>
          <Heading4>Heading</Heading4>
        </Section>

        <Section id="buttons">
          <p>Button</p>
          <Button>Hello</Button>
          <p>Button Raised</p>
          <Button raised>Hello</Button>
          <p>Button Outline</p>
          <Button outline>Hello</Button>
          <p>Button Secondary</p>
          <Button variant="secondary">Hello</Button>
          <p>Button Raised Secondary</p>
          <Button raised variant="secondary">
            Hello
          </Button>
          <p>Button Outline Secondary</p>
          <Button outline variant="secondary">
            Hello
          </Button>
        </Section>

        <Section id="cards">
          <p>Card</p>
          <Card height="200px" width="500px">
            <CardContent>
              <Heading3>Hello</Heading3>
              <p>Here's some card contents</p>
            </CardContent>
          </Card>
        </Section>

        <Section id="inputs">
          <p>Input</p>
          <Input placeholder="Text here..."/>
          <p>Input Error</p>
          <Input placeholder="Password here..." type="password" value='1234' error errorMsg="Password must be longer than 4 characters" />
        </Section>

      </Column>
    </Wrapper>
  );
}

export default Components;
