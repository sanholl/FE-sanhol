import styled from "@emotion/styled";
import { FormEvent, useEffect, useRef, useState } from "react";
import { PlaceType } from "../../../shared/lib/types";
import { useMap } from "../../../entities/map/lib/context/useMap";
import { TestButton } from "trip-recommender";
import { Container, Form, Input, Item, List } from "./SearchLocation.styles";


interface SearchLocationProps {
  isOpen: boolean,
  onUpdatePlaces: (places:PlaceType[]) => void
  onSelect: (placeId:string) => void
}

const SearchLocation = ({ isOpen, onUpdatePlaces, onSelect }:SearchLocationProps) => {
  const map = useMap();
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const placeService = useRef<kakao.maps.services.Places | null>(null);
  
  useEffect(() => { 
    if(placeService.current) {
      return;
    }

    placeService.current = new kakao.maps.services.Places();
  }, []);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPlaces(keyword);
  }
  const searchPlaces = (keyword:string) => {
    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return;
    }

    if(!placeService.current) {
      //TODO - placeService.current error handling
      return;
    }
    
    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    placeService.current.keywordSearch( keyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const placeInfos = data.map(placeSearchResultItem => {
          return {
            id: placeSearchResultItem.id,
            position: new kakao.maps.LatLng(Number(placeSearchResultItem.y), Number(placeSearchResultItem.x)),
            title: placeSearchResultItem.place_name,
            address: placeSearchResultItem.address_name
          }
        })
        
        onUpdatePlaces(placeInfos);
        setPlaces(placeInfos);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
          return;
      } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
      }
    }); 
  }
  const handleItemClick = (place:PlaceType) => {
    map.setCenter(place.position);
    map.setLevel(4);
    onSelect(place.id);
  }


  return (
    <Container isOpen={isOpen}>
      <Form onSubmit={handleSubmit}>
        <Input value={keyword} onChange={(e) => {
          setKeyword(e.target.value);
        }} />
        <button>검색</button>
      </Form>
      <List>
        {
          places.map((item, index) => {
            return (
              <Item key={item.id} onClick={() => handleItemClick(item)}>
                <label>{`${index + 1}. ${item.title}`}</label>
                <span>{item.address}</span>
              </Item>
            )
          })
        }
      </List>
    </Container>
  );
}

export default SearchLocation;