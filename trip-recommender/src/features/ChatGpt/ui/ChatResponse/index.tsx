import React, { useEffect, useState } from "react";
import { chatResponse } from "../../api/ChatGptApi";
import { Container, Title, List, Message, UserMessage, LoadingMessage } from "./ChatResponse.styles";
import { receiveMessageOnPort } from "worker_threads";

import { dummyResponse } from './../../consts/dummyResponse';

const recommendation = dummyResponse.recommendation;
interface ChatResponseProps {
  keyword: string;
  openAiKey: string;
}

// export const ChatResponse = ({ keyword, openAiKey }: ChatResponseProps) => {
export const ChatResponse = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<{ type: 'user' | 'bot' | 'loading'; content: string }[]>([]);

  // useEffect(() => {
  //   if (keyword && !isLoading) {
  //     setMessages(prev => [...prev, { type: 'user', content: keyword }]);
  //     fetchResponse(keyword);
  //   }
  // }, [keyword]);

  // const fetchResponse = async (message: string) => {
  //   setLoading(true);
  //   setMessages(prev => [...prev, { type: 'loading', content: '...loading' }]);
  //   try {
  //     const response = await chatResponse(message, openAiKey);
  //     const parsedResponse = parseResponseToHtml(response);
  //     setMessages(prev => prev.filter(msg => msg.type !== 'loading')); // Remove loading message
  //     setMessages(prev => [...prev, { type: 'bot', content: parsedResponse }]);
  //   } catch (error) {
  //     console.error("send message error", error);
  //     setMessages(prev => prev.filter(msg => msg.type !== 'loading')); // Remove loading message
  //     setMessages(prev => [...prev, { type: 'bot', content: "추천을 가져오는 중 문제가 발생했습니다." }]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Container>
      <List>
        <Title>Trip Recommendation</Title>
        {/* {
          isLoading  
          ? <span>Loading...</span>
          : messages.map((msg, index) => (
            msg.type === 'user' ? (
              <UserMessage key={index}>{msg.content}</UserMessage>
            ) : msg.type === 'bot' ? (
              <Message key={index} dangerouslySetInnerHTML={{ __html: msg.content }} />
            ) : (
              <LoadingMessage key={index}>{msg.content}</LoadingMessage>
            )
        ))} */}
        {
          isLoading
          ? <span>Loading...</span>
          : recommendation.map((rec, index) => (
            <span>{rec.tripStyle}</span>
          ))
        }
      </List>
    </Container>
  );
};