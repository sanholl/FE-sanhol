import { Container, Image } from "./ChatLoading.styles";

export const ChatLoading = () => {
  const Spinner = "/images/Spinner.gif";

  return (
    <Container>
      <Image src={Spinner} alt="로딩" width="80%" />
    </Container>
  );
}