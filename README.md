# Doing Project

조원 정찬호, 최영준, 이영훈, 김현주, 이광훈

본문과 댓글 구조를 가진 웹서비스 구현

## coding convention

변수 선언: camel case
ex) `let isDone;` `const checkAuth;`

함수 선언: arrow function
ex) `const foo = () => {};`

컴포넌트 선언: arrow function component

```jsx
const Component = (props) => {
  return <div></div>;
};
```

패키지 임포트: package import와 component import 구분
ex)

```jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
////////////////
import MyComponent from "../components/MyComponent";
import MyComponent2 from "../components/MyComponent2";
```

화면 너비:

```css
min-width: 800px;
max-width: 1200px;
```

CSS(UI/UX):
`styled-components` 임포트!!!

컴포넌트 구상:

## Commit Convention

feat : 새로운 기능에 대한 커밋

fix : 버그 수정에 대한 커밋

build : 빌드 관련 파일 수정에 대한 커밋

chore : 그 외 자잘한 수정에 대한 커밋

ci : CI관련 설정 수정에 대한 커밋

docs : 문서 수정에 대한 커밋

style : 코드 스타일 혹은 포맷 등에 관한 커밋

refactor : 코드 리팩토링에 대한 커밋

test : 테스트 코드 수정에 대한 커밋
