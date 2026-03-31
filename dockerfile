FROM node:20-alpine
WORKDIR /app

# 라이브러리 설치 (캐싱을 위해 이 부분을 먼저 실행합니다)
COPY package*.json ./
RUN npm install

# 소스 코드 전체 복사
COPY . .

# 실행 (package.json에 --host를 넣었으므로 단순하게 작성)
CMD ["npm", "run", "dev"]
EXPOSE 5173