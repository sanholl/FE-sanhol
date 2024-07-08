import { FC, PropsWithChildren, ReactNode, useEffect, useState } from "react"

const KAKAO_MAP_SCRIPT_ID = process.env.KAKAO_MAP_SCRIPT_ID as string;
const KAKAO_MAP_APP_KEY = process.env.KAKAO_MAP_APP_KEY;

interface KakaoMapScriptLoaderProps {
  children: ReactNode
}

const KakaoMapScriptLoader: FC<PropsWithChildren<KakaoMapScriptLoaderProps>> = ({children}) => {
  const [mapScriptLoaded, setMapScriptLoaded] = useState(false);
  
  useEffect(() => {
    const mapScripts = document.getElementById(KAKAO_MAP_SCRIPT_ID);

    if(mapScripts && !window.kakao) {
      return;
    }
    
    // <script></script>
    const script = document.createElement('script');
    script.id = KAKAO_MAP_SCRIPT_ID;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY}&libraries=services&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        setMapScriptLoaded(true);
      });
    }
    script.onerror = () => {
      setMapScriptLoaded(false);
    }

    document.getElementById('root')?.appendChild(script);
  }, []);
  
  return (
    <>
    {
      mapScriptLoaded ? children : (
        <div>
          지도를 가져오는 중입니다.
        </div>
      )
    }
    </>
  )
}

export default KakaoMapScriptLoader;