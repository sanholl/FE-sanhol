import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  margin: 0 auto;
`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  width: 100%
`;