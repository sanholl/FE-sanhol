import React from 'react';
import { Container, List, Item } from './RecommendationList.styles';

const RecommendationList = () => {
  return (
    <Container>
      <List>
        <Item>
          test
        </Item>
        {/* {       test
          recommendations.map((item, index) => (
            <Item key={index}>
              <label>{`${index + 1}. ${item.title}`}</label>
              <span>{item.description}</span>
            </Item>
          ))
        } */}
      </List>
    </Container>
  );
};

export default RecommendationList;