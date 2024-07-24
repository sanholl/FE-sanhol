import { ChatResponse } from "trip-recommender";
import { usePlaceDispatch, usePlaceState } from "../../../../entities/map/lib/context/PlaceProvider";
import { Container } from "./ChatLocation.styles";

const OPEN_AI_KEY = process.env.OPEN_AI_KEY as string;

const ChatLocation = () => {
  const placeState = usePlaceState();
  const place = placeState.selectedPlace;
  const placeDispatch = usePlaceDispatch();

  return (
    <Container>
      {
        place && <ChatResponse keyword={place.title} openAiKey={OPEN_AI_KEY}/>
      }
    </Container>
  );
}

export default ChatLocation;