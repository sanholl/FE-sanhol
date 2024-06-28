# 1. Node.js LTS 버전을 베이스 이미지로 설정
FROM node:20

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json과 package-lock.json을 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 소스 코드를 작업 디렉토리로 복사
COPY . .

# 6. 애플리케이션 빌드
RUN npm run build

# 7. 정적 파일을 제공하는 서버로 이동
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# 8. Nginx 설정 복사 (필요한 경우)
# COPY nginx.conf /etc/nginx/nginx.conf

# 9. 컨테이너가 시작될 때 Nginx 실행
CMD ["nginx", "-g", "daemon off;"]

# 10. 컨테이너의 80번 포트를 노출
EXPOSE 80