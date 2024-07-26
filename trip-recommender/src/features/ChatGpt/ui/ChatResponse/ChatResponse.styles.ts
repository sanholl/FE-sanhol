import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 1.5em;
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
