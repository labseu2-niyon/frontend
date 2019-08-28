import React from 'react';
import styled from 'styled-components';
import {
  Heading,
  Heading2,
  Heading3,
  Heading4,
  Text,
  Avatar,
  TeamCard,
  UserCard,
  Button,
  Divider,
  Icon,
  Spinner,
} from '../components/~common/index';

const exampleAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqXXZ9bvEdMLqeIostuHOdpP4KSwTry_pDOyMTfQCDUKCXiMw';

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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10px 0;

  .icon {
    margin-right: 10px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
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
          <a href="#text">Text</a>
        </div>
        <div>
          <a href="#avatar">Avatar</a>
        </div>
        <div>
          <a href="#buttons">Buttons</a>
        </div>
        <div>
          <a href="#cards">Cards</a>
        </div>
        <div>
          <a href="#divider">Cards</a>
        </div>
        <div>
          <a href="#icons">Icons</a>
        </div>
        <div>
          <a href="#spinner">Spinner</a>
        </div>
        <div>
          <a href="#inputs">Inputs</a>
        </div>
      </Menu>
      <Column>
        <Section id="headings">
          <Heading4>Headings</Heading4>
          <Heading>Heading 1</Heading>
          <Heading2>Heading 2</Heading2>
          <Heading3>Heading 3</Heading3>
          <Heading4>Heading 4</Heading4>
        </Section>

        <Section id="text">
          <Heading4>Text</Heading4>

          <Text large>
            Large Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras auctor nulla non eros varius suscipit. Suspendisse ullamcorper
            urna a ipsum tincidunt accumsan. Fusce ac dui velit.
          </Text>

          <Text medium>
            Medium Text or also the p tag. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras auctor nulla non eros varius
            suscipit. Suspendisse ullamcorper urna a ipsum tincidunt accumsan.
            Fusce ac dui velit.
          </Text>

          <Text small>
            Small Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras auctor nulla non eros varius suscipit. Suspendisse ullamcorper
            urna a ipsum tincidunt accumsan. Fusce ac dui velit.
          </Text>
        </Section>

        <Section id="avatar">
          <Heading4>Avatar</Heading4>
          <Row>
            <Card>
              <Avatar extraLarge source={exampleAvatar} />
              <p>Extra Large</p>
            </Card>
            <Card>
              <Avatar large source={exampleAvatar} />
              <p>Large</p>
            </Card>
            <Card>
              <Avatar medium source={exampleAvatar} />
              <p>Medium</p>
            </Card>
            <Card>
              <Avatar small source={exampleAvatar} />
              <p>Small</p>
            </Card>
          </Row>
        </Section>

        <Section id="buttons">
          <Heading4>Buttons</Heading4>
          <p>Colours</p>
          <Row>
            <Card>
              <Button primary>Primary</Button>
            </Card>

            <Card>
              <Button secondary>Secondary</Button>
            </Card>

            <Card>
              <Button warning>Warning</Button>
            </Card>

            <Card>
              <Button danger>Danger</Button>
            </Card>
          </Row>
          <p>Other Styles</p>
          <Row>
            <Card>
              <Button primary raised>
                Raised
              </Button>
            </Card>

            <Card>
              <Button primary outline>
                Outline
              </Button>
            </Card>
          </Row>
          <p>Sizes</p>
          <Row>
            <Card>
              <Button primary>Small</Button>
            </Card>

            <Card>
              <Button primary large>
                Large
              </Button>
            </Card>
          </Row>
        </Section>

        <Section id="cards">
          <Heading4>Cards</Heading4>
          <p>Team Card</p>
          <Row>
            <Card>
              <TeamCard
                source={exampleAvatar}
                name="Jane Doe"
                jobTitle="Web Developer"
                githubURL="https://github.com/"
                linkedinURL="https://www.linkedin.com/"
                twitterURL="https://twitter.com/"
              />
            </Card>
            <Card>
              <TeamCard
                source={exampleAvatar}
                name="Jane Doe"
                jobTitle="Web Developer"
                githubURL="https://github.com/"
                linkedinURL="https://www.linkedin.com/"
                twitterURL="https://twitter.com/"
              />
            </Card>
            <Card>
              <TeamCard
                source={exampleAvatar}
                name="Jane Doe"
                jobTitle="Web Developer"
                githubURL="https://github.com/"
                linkedinURL="https://www.linkedin.com/"
                twitterURL="https://twitter.com/"
              />
            </Card>
          </Row>

          <p>User Card - Desktop and Mobile</p>
          <Row>
            <UserCard
              desktop
              source={exampleAvatar}
              name="Jane Doe with Long Name"
              jobTitle="Software Engineer"
              city="Lagos"
              country="Nigeria"
            />
            <UserCard
              desktop
              source={exampleAvatar}
              name="Jane Doe"
              jobTitle="Software Engineer"
              city="Port Harcourt"
              country="Nigeria"
            />
            <UserCard
              desktop
              source={exampleAvatar}
              name="Jane Doe"
              jobTitle="Software Engineer"
              city="Long City"
              country="Even Longer Country"
            />
          </Row>
        </Section>

        <Section id="divider">
          <Heading4>Divider</Heading4>
          <p>Dividers will fill up the space of their parent container.</p>
          <Divider />
        </Section>

        <Section id="icons">
          <Heading4>Font Awesome Icons</Heading4>
          <p>
            Icons can be small, medium, large and any color options (e.g.
            primary, secondary, etc). className must be added.
          </p>
          <Row>
            <Icon small primary className="fas fa-cloud icon" />
            <Icon medium secondary className="fas fa-leaf icon" />
            <Icon large warning className="fas fa-poo-storm icon" />
            <Icon small danger className="fas fa-exclamation-triangle icon" />
            <Icon medium black className="fas fa-user-astronaut icon" />
            <Icon large grey className="fas fa-hippo icon" />
          </Row>
        </Section>

        <Section id="spinner">
          <Heading4>Spinner</Heading4>
          <Spinner />
        </Section>
      </Column>
    </Wrapper>
  );
}

export default Components;
