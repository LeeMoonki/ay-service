# ay-service
NodeJs Express 서버 + MySQL Database 서비스 입니다.
## 포트 및 접속정보
- 서버 : 3000
- MySQL : 3306
  - host: localhost
  - port: 3306
  - user: root
  - password: ayservice
  - database: aydb


## 명령어

- `yarn dev`: 개발환경에서 프로그램을 실행합니다.
- `yarn dev:build`: 프로그램을 다시 빌드하고 실행합니다.
- `yarn stop`: 프로세스를 종료합니다.
- `yarn down`: 프로세스를 종료하고 컨테이너를 삭제합니다.
- `yarn resetdb`: 데이터베이스를 초기화합니다.
- `yarn rmi`: 불필요한 도커 이미지를 제거합니다.