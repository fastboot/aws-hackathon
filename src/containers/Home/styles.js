import styled from 'styled-components'

export const SolutionDiv = styled.div`
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: linear-gradient(215deg, ${ props => props.fromcolor } 0%, ${ props => props.tocolor } 100%);
`;

export const Message = styled.div`
    font-size: 14px;
    color: white;
    margin-left: 400px;
`;

export const Name = styled.div`
  width: 100vw;
  height: 80vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  font-size: 100px;
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

  transition: transform .3s;

    &:hover {
        transform: scale(1.1);
    }
`

export const Heading = styled.h1`
    color: white;
    margin-left: 400px;
    margin-top: 100px;
`;