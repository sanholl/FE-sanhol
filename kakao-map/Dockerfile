# 1. Node.js LTS 버전을 베이스 이미지로 설정
FROM node:20 as build

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json과 package-lock.json을 복사
COPY package*.json ./

# 4. 의존성 설치 (devDependencies 포함)
RUN npm install

# 5. 소스 코드를 작업 디렉토리로 복사
COPY . .

# 6. npm의 bin 경로를 PATH에 추가하여 webpack을 찾을 수 있도록 함
ENV PATH /app/node_modules/.bin:$PATH

# 7. 설치된 패키지 확인
RUN ls -la /app/node_modules/.bin

# 8. 애플리케이션 빌드
RUN npm run build

# 9. 정적 파일을 제공하는 서버로 이동
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# 10. Nginx 설정 복사 (필요한 경우)
# COPY nginx.conf /etc/nginx/nginx.conf

# 11. 컨테이너가 시작될 때 Nginx 실행
CMD ["nginx", "-g", "daemon off;"]

# 12. 컨테이너의 80번 포트를 노출
EXPOSE 80
