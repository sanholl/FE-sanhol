import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 20vw;
  height: 100vh;
  padding: 10px;
  width: 30vw;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 1em;
  text-align: center;
  margin-bottom: 10px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.div`
  background: #e5e5ea;
  color: #000;
  padding: 10px;
  border-radius: 20px;
  margin: 5px 0;
  align-self: flex-start;
  max-width: 80%;
  word-break: break-word;

  h3 {
    margin: 0;
    font-size: 1.2em;
  }

  li {
    margin: 0;
    padding: 0 0 0 20px;
    list-style-type: disc;
  }
`;

export const UserMessage = styled(Message)`
  background: #007aff;
  color: #fff;
  align-self: flex-end;
`;

export const LoadingMessage = styled(Message)`
  background: #d3d3d3;
  color: #888;
  align-self: flex-start;
`;