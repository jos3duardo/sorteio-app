import styled from "styled-components";

export const Container = styled.div`
  
`

export const Form = styled.form`
  width: 20%;
  
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 30px;
  margin-bottom: 30px;
  padding: 30px;

  position: relative;

  > input {
    margin: 3px 0;
    padding: 5px;
    border-radius: 5px;
  }
`;