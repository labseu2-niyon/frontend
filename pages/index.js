import React from "react";
import styled from 'styled-components';
import Counter from "../components/Counter";
import Button from "../components/~common/Button";


function Home() {
  return (
    <div>
     <Counter />
     <Button outline onClick={() => console.log('hello')}>Hello</Button>
    </div>
  );
}

export default Home;
