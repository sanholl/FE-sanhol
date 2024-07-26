import { Container, Image, Text } from "./ChatLoading.styles";

export const ChatLoading = () => {
  const Spinner = "/images/Spinner.gif";

  return (
    <Container>
      <Image src={Spinner} alt="로딩" width="80%" />
      <Text>여행 추천 생성중</Text>
    </Container>
  );
}