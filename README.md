# :: 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제
API Repository를 활용한 `Todo App`

# 1-1) 클라이언트 구현 과제

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다 
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
    - [라우팅][라우팅]
    - [로그인&회원가입][로그인&회원가입]
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
    - [useValidate Hook][useValidate Hook]
    - [Validate regex 적용][Validate regex 적용]
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
    - [조건 만족][조건 만족]
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
    - [토큰 저장][토큰 저장]
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
    - [AuthContext 두번째 useEffect][AuthContext]
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요
    - [AuthContext 내부 TODO][AuthContext]

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
    - [Todo 상세: useSearchParams 이용, query params에 해당 todo의 id가 있다면 상세영역 표시][Todo 상세]
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
    - [Todo 추가][Todo 추가]
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
    - [Todo 수정][Todo 수정]
    - [Todo 수정 취소][Todo 수정 취소]
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
    - [이전 URL 유지: 상세보기 클릭 시 localStorage에 현재 SearchParams 저장][이전 URL 유지]
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
    - [Todo 상세: useSearchParams 이용하여 자동으로 뒤로가기 조회기능 가능][Todo 상세]
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다
## how to use
### Server
Following this repository

https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api
### Client (this repository)
```bash
> yarn install

> yarn start
```

## 😥 개선 전

## 🤩 개선 후


<!-- COMMIT BASEURL -->
[라우팅]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/de92369d53ddb515db2e6a9f1714d6f65b9f5b3a
[로그인&회원가입]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/5b1a9c5df3c650af2b9ae8c1c96eced8e273234c
[useValidate Hook]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/cff9dac6d32755f2072753f47f00042425fd9036
[Validate regex 적용]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/370f2b52d714453a2c6fc50d29c1b877c33c683f
[조건 만족]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/c37db0fc910eb666055740935aeb129b336afe71
[토큰 저장]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/d5cebf67363af875ab7aea135a8adc2189b7d908
[AuthContext]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/41e8dba787fd4e35fce057af349ef0b95699d8a9
[Todo 상세]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/172c739dc0a41b428f49fdc958aae6390b63c39f
[Todo 추가]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/fcea5e91a93a40e0a075ccb025ca18f0baa9b4c3
[Todo 수정]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/6c8943ccf6b28407d46a76808585f031e6d75f2a
[Todo 수정 취소]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/ed180197b60cfd66fefd93952c4a4a7a52a14004
[이전 URL 유지]: https://github.com/yogjin/wanted-pre-onboarding-challenge-fe-1/commit/886717f5efca1e65c3fa503fd33fcd28c35c7de2
