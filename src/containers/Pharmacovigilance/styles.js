import styled from 'styled-components'

export const PageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: relative;

    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
`;

export const Message = styled.div`
    font-size: 14px;
    color: white;
    margin-left: 400px;
`;

export const Name = styled.div`
  width: 70vw;
  height: 5vh;
  color: white;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  align-items: left;
  position: relative;
  font-size: 30px;
  font-weight: bold;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`

export const Experience = styled.div`
  width: 200px;
  height: 40px;
  background: black;
  margin-top: 100px;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  color: white;
  border-radius: 50px;
`

export const Heading = styled.h1`
    color: white;
    margin-left: 400px;
    margin-top: 100px;
`;

export const Description = styled.textarea`
    width: 70%;
    font-size: 14px;
    padding: 6px 8px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.error ? 'red' : 'black'};
    margin: 0;
    height: ${ props => props.height };
    padding: 12px 20px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
    font-size: 20px;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`

export const ResponseDescription = styled.div`
    width: 70%;
    font-size: 20px;
    padding: 6px 8px;
    border-style: solid;
    margin-top: 70px;
    height: ${ props => props.height };
    padding: 12px 20px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
    font-size: 20px;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`