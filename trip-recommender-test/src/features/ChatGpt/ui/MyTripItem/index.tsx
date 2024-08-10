import React from "react";
import {
  Container,
  Request,
  ListItem,
  Number,
  ActivityLink,
  ActivityContainer,
  ActivityTitle,
  ActivitySubtitle,
  ActivityDescription,
  Divider,
  Span,
  MyTripMenu,
} from "./MyTripItem.styles";
import { ChatResponseType } from "@/@types/types";

interface MyTripItemProps {
  myTrip: ChatResponseType;
}

export const MyTripItem = ({ myTrip }: MyTripItemProps) => {
  const recommendation = myTrip.recommendation;
  const destination = myTrip.destination;

  return (
    <Container>
      <Request>
        My Trip
        <Span>{destination}</Span>
      </Request>

      {recommendation.tripActivities.map((act, index) => {
        const { placeType, name, description, location, link, recommendedMenu } = act;

        return (
          <ListItem
            key={index}
            isLast={index === recommendation.tripActivities.length - 1}
          >
            <Number type={placeType}>{index + 1}</Number>
            <ActivityLink
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActivityContainer>
                <ActivityTitle>{name}</ActivityTitle>
                <ActivitySubtitle>{placeType}</ActivitySubtitle>
                <ActivityDescription>{location}</ActivityDescription>
                <Divider />
                <ActivityDescription>
                  <Span>추천</Span> {description}
                </ActivityDescription>
                {recommendedMenu && <MyTripMenu>{recommendedMenu}</MyTripMenu>}
              </ActivityContainer>
            </ActivityLink>
          </ListItem>
        );
      })}
    </Container>
  );
};
