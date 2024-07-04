import styled from "@emotion/styled";
import { FormEvent, useState } from "react";


const SearchLocation = () => {
  const [keyword, setKeyword] = useState('');
  
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input value={keyword} onChange={(e) => {
          setKeyword(e.target.value);
        }} />
      </Form>
      <List>
        {
          Array.from({ length: 28}).map((item, index) => {
            return (
              <Item key={index}>
                <label>지역</label>
                <span>서울 강남구</span>
              </Item>
            )
          })
        }
      </List>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  background: white;
  opacity: 0.8;
  overflow-y: auto;
`;

const Form = styled.form`
  display: flex;
  position: sticky;
  top: 0;
`;

const Input = styled.input`
  width: 100%;
  min-width: 200px;
  padding: 8px;
  border: 1px solid #c0c0c0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-bottom: 1px dashed #d2d2d2;
  cursor: pointer;

  &:hover {
    background-color: #d2d2d2;
    opacity: 1;
    transition: background-color 0s;
  }
`;

export default SearchLocation;