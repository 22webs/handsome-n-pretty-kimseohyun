# handsome-n-pretty-kimseohyun

## Member

||지수|형근|
|--|--|--|
|사진|<img src="https://avatars.githubusercontent.com/u/76681519?v=4" alt="jisoo-profile" width="160px" height="160px" />|<img src="https://avatars.githubusercontent.com/u/86425955?v=4" alt="geun-oh-profile" width="160px" height="160px" />|
|깃허브|<div align='center'> [seojisoosoo](https://github.com/seojisoosoo) </div>|<div align='center'>[Geun-Oh](https://github.com/Geun-Oh)</div>|
|역할| <div align='center'> PUT 로직 구현 </div> | <div align='center'> GET 로직 구현 </div> |

<br />

## Convention & Configuration

<br />

### 1. Github

- 기능별로 Issue 파기 ( feat, fix, refactor, etc)
이슈제목은 [ 페이지명 ] - 기능명 으로 하실께요~`ex. [ myPage ] - 내 정보 수정`
- 작업할 이슈에 대해 Label & assign 꼭 달아주세요
- 브랜치 파고 작업하기 전에 main브랜치에서 꼭 pull 받기
- 꼭 커밋 단위를 쪼개서 올려주세요!!🔥🔥
- 작업 다 하면 PR 올리고 웹파트원 리뷰어 등록 & Label 달아놓기 & PR 템플릿에 맞게 작업내용 기록해두기
- PR 제목은 브랜치명으로 할께요~~

<br />

### 2. 커밋 

| feat : | 새로운 기능이 추가되었을 때  |
| --- | --- |
| fix : | 버그를 고친 경우 |
| design : | css 혹은 UI를 생성 & 변경한 경우 |
| style : | 코드포맷 변경 (기능에 변화가 없는 경우) |
| refactor : | 더 좋은 코드로 개선한 경우 ( 기능에 변화가 없는 경우) |
| docs : | readMe 등 문서를 추가한 경우 |
| test : | 테스트코드 작성 |
| etc : | 이 외 잡일들~ |

<br />

### 3.  브랜치 전략

- Default branch: main

- feat#{이슈번호}-{page}/{기능명}  EX. `**feat#1-myPage/bannerUI**`

<br />

### 4. 코드 컨벤션

#### 변수 & 컴포넌트

- 상수는 영문 대문자 스네이크 표기법 (예를 들면 키값)
    - const API_KEY
- 클래스나 컴포넌트는 파스칼 케이스를 사용한다. (함수형 컴포넌트)
    - mainPage.tsx  → 컴포넌트명은 MainPage로 바꿔주기
- 변수는 var 사용 금지
- const 를 let 보다 위에 선언한다
- 변수 등을 조합해서 문자열을 생성할 때는 무조건 **리터럴**을 이용한다(**백틱**)
- **스타일링 된 컴포넌트명에 `St`혹은 `Styled`를 붙이지 않는다. (이미 대/소문자로 구별가능 & 컴포넌트명이 길어지면 가독성 저하) → 스타일 파일을 따로 분리해서 St.가져와서 사용하기!(아래의 스타일 방식 참고)**
- **변수명은 의미를 잘 나타낼 수 있는 간결한 표현을 사용합시다. 변수명을 충분히 고민하는게 필요!!
특히 배열 & 객체의 변수명을 정할 때, `~Arr` 이나 `~Obj` 보다는 `변수s` 라는 네이밍으로 의미를 더 잘 나타낼 수 있는 네이밍 규칙을 사용해봅시다! list, array ❌ 좀 더 의미를 담아보자!
(ex. `const nameArr = [지수,형근,서현]`  ❌  `const names = [지수,형근,서현]` ⭕️ )**
- **변수 선언 먼저 ⇒ 한칸 띄고 ⇒ 함수 선언 쫘라락**
- **interface 선언시, 함수의 인자는 `~Type(s)`, 컴포넌트의 인자는 `propsType(s)`이라는 네이밍을 사용해봅시다!**

#### 함수

- **함수의 선언은 `function() {}` 을 이용하도록하자.**
    - **`rfc` vs rafce → 메인 로직을 가독성 있게 분리하기**
    - **function vs `화살표 함수` → 호이스팅 측면에서**
- **이벤트 핸들링함수에 `handle`을 붙이기**
- **함수명은 어떤 일을 하는지 명확히 알 수 있도록 `동사+명사` 의 형식을 지켜주세요 ex. `handle_moveToPage` / `get_randomArray`**
- 함수 간에 한 줄 띄우도록 하자.
- 함수 내에서 반환문은 한번만 쓰도록 하자!!!
- fetch에 대한 함수는 따로 정의하고, 이 함수를 호출해서 쓰자. api 파일 따로 만들어서 정의하고 호출하기
- return 문 바로 위는 한칸 띄운다

#### 메소드

- 배열 복사 시 순환문을 사용하기 보다는 **스프레드 연산자**를 사용하자. ex. […]
- **구조분해할당을 적극 이용하자.**
- **switch-case 사용시 return이 없다면 break를 강제하자. case문 사이들끼리는 가독성을 위해 띄어주자.**
- for는 지양하고 forEach, map를 사용 → 명령형 vs 선언형

#### 기타 문법

- wildcard import (`import * from “~”`)는 사용하지 않는다.
- **color & font 사용할 때는 
`${({theme}) ⇒ theme.colors.main}` `${({theme}) ⇒ theme.fonts.headline}`을 사용해주세요!**

#### 이슈 & PR 작성할 때!

- assign 꼭 해주기!
- 라벨도 꼭 달기!

<br />

### 5. 스타일 적용방식

[Client/shopList.jsx at develop · Matzzang/Client](https://github.com/Matzzang/Client/blob/develop/src/pages/shopList.jsx)

> style 파일을 분리
> 

`import * as St from "./style`로 가져와서 사용하기! 스타일은 객체로 선언하지 않기!

[client/src/@components at develop · TeamPiickle/client](https://github.com/TeamPiickle/client/tree/develop/src/%40components)

[KkaBi-Frontend/style.tsx at develop · KB-KkaBi/KkaBi-Frontend](https://github.com/KB-KkaBi/KkaBi-Frontend/blob/develop/src/@pages/invest/style.tsx)

<br />

### 6. 폴더 구조 

```tsx
|-- .husky
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 @components
	|-- 📁 @pages
	|-- 📁 api
	|-- 📁 assets
			|-- 📁 icon
			|-- 📁 image
			|-- 📁 assets.d.ts
	|-- 📁 core
	|-- 📁 style
			|-- globalStyle.ts
			|-- style.d.ts
			|-- theme.ts
	|-- App.tsx
	|-- main.tsx
	|-- Router.tsx
	|-- vite-env.d.ts
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
|-- tsconfig.json 
|-- tsconfig.node.json
|-- vite.config.ts
|-- yarn.lock
```

<br />

### 7. TS 컨벤션

ts 쓸 때, 

- 타입 단언보다 선언을 적극 활용하기(정말 빈 배열을 초기값으로 두어야할 때만 단언으로 쓰기!)

```jsx
const a: number[] = [] // error => 타입 선언

const b = [] as number[] // correct => 타입 단언
```

- any를 사용하게 되는 경우는 이유를 명시하기(도저히 모르겠는 경우만 적용 +이유 주석 달아두기)
