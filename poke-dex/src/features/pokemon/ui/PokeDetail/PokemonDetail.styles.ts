import styled from "@emotion/styled";

export const Container = styled.section`
  border: 1px solid #c0c0c0;
  margin: 16px 32px;
  border-radius: 16px;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
`;
export const ImageContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  min-height: 350px;
`;
export const Image = styled.img`
  width: 350px;
  height: 350px;
`;
export const Divider = styled.hr`
  margin: 32px;
  border-styled: none;
  border-top: 1px dashed #d3d3d3;
`;
export const Body = styled.section`
  margin: 0 32px;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto 16px;

  th, td {
    padding: 6px 10px;
  }
`;
export const TableRow = styled.tr`
  border: 1px solid #f0f0f0;
`;
export const TableHeader = styled.th`
  width: 1px;
  white-space: nowrap;
  text-align: left;
  font-weight: normal;
  font-size: 14px;
  color: #a0a0a0;
`;
export const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 32px 16px;
`;