import styled from "@emotion/styled";

export const Chip = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #c0c0c0;
  border-radius: 16px;

  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`;
export const NumberChip = styled.div<{ color: string }>`
  padding: 4px 6px;
  background-color: ${props => props.color};
  border-radius: 16px;
  opacity: 0.8;
`;
export const Number = styled.label`
  opacity: 1;
`;
export const Text = styled.label`
  margin: 0 8px 0 5px;
`;