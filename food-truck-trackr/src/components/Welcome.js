import React from "react";
import styled from "styled-components";


const PrettyWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  border-radius: 20px;
  border: 4px dashed black;
  width: 550px;
  background-color: yellow;
  p {
    margin: 10px auto;
  }
  h3 {
    margin: 20px auto;
  }

  
  
`;


function Welcome() {
    return (
      <div className="Welcome">
        <PrettyWelcome>
            WELCOME TO THE food truck JUNGLE ! <br /> <br />This will be removed.
        </PrettyWelcome>
         
      </div>
    )
}

export default Welcome;