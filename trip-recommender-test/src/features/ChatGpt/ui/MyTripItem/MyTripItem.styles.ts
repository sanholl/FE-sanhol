import styled from 'styled-components';

export const Container = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  list-style-type: none;
  position: relative;
`;

export const Request = styled.div`
  font-weight: bold;
  line-height: 36px;
  font-size: 28px;
  margin-bottom: 40px;
  text-align: center;
`;

export const ListItem = styled.li<{ isLast: boolean }>`
  display: flex;
  align-items: flex-start;
  border-left: ${({ isLast }) => (!isLast ? '2px dotted #d3d3d3' : '')};
  padding-left: 30px;
  padding-bottom: 20px;
  position: relative;
`;

export const Number = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${({ type }) => (type.includes('관광') || type.includes('체험') ? '#a0c080' : '#80a0d0')};
  color: white;
  border-radius: 50%;
  font-size: 15px;
  font-weight: bold;
  position: absolute;
  z-index: 1;
  left: -13px;
`;

export const ActivityLink = styled.a`
  text-decoration: none;
  color: inherit;
  flex-grow: 1;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.1s ease-in-out;
  }
`;

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ActivityTitle = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
  display: flex;
  font-weight: bold;
  align-items: center;
`;

export const ActivitySubtitle = styled.div`
  font-size: 16px;
  color: gray;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ActivityDescription = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 10px 0;
`;

export const Span = styled.span`
  font-weight: bold;
  margint-right: 8px;
  color: #0385ff;
`;

export const MyTripMenu = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;