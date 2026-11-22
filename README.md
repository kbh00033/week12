# OSS Week 12 — React Hooks Playground (Student Starter)

## 실행 방법
Node.js 20.19+ 또는 22.12+ 권장. 프로젝트 폴더에서 실행:

```bash
npm install
npm run dev
```

브라우저에 터미널의 Local URL을 열고 LAB 탭을 이동하세요. 제출 전 `npm run build`도 실행하세요.

## 수행 방법
1. `src/components/` 아래의 LAB 1~4 파일에 있는 `TODO`를 직접 완성합니다.
2. `src/App.jsx`, `src/App.css`는 공통 화면이므로 가급적 수정하지 않습니다.
3. 각 LAB의 동작 화면과 콘솔 결과를 기록합니다.
4. 한 LAB에서 다른 LAB으로 탭을 전환하면 기존 컴포넌트가 언마운트됩니다. Cleanup 결과를 관찰합니다.


## 이해도 확인 질문
1. `setCount(prev => prev + 1)`은 왜 유용한가?
2. `useEffect(fn, [])`과 `useEffect(fn)`은 어떻게 다른가?
3. Cleanup은 언제 실행되는가? 개발 환경 StrictMode 영향은?
4. `useState`와 `useRef`의 값 변경 시 렌더링 차이는?
5. LAB 2와 LAB 4에서 Timer를 관리하는 방식의 차이는?



2. Installation
터미널에서 npm install 실행한 뒤 npm run dev로 실행
3. Source Code Exploration
 useEffect의 return () => clearInterval(id)는 타이머를 정리한다(Cleanup).
 useRef의 inputRef.current.focus()는 입력창을 강조한다.
4. Lab Implementation
Lab 1은 숫자가 자동으로 올라가고, Lab 2는 Start·Stop·Reset으로 더욱 정교한 조작이 가능하다.
(버튼은 호출한다->실제로 타이머를 관리하는 건 useEffect이다)
Lab 3에서 Focus를 누르면 입력창이 강조된다. Clear를 누르면 입력한 글자가 지워지고, 다시 입력할 수 있다.
Lab 4에서 Start를 누르면 타이머가 실행된다. 실행 중에는 Start 버튼이 비활성화되고, Stop을 누르면 Start를 다시 누를 수 있다.
5. Lab Comparison
 1. []를 쓰면 Effect는 페이지가 로드 될 때 실행된다. 
 2. Cleanup(return)은 Effect가 다시 실행되기 전에 실행된다.
 3. Lab 2는 타이머가 실행되면 useEffect가 타이머를 시작하도록 하고, Lab 4는 start, stop 버튼에서 타이머 실행을 직접 관리한다. 
 4. 타이머 ID는 정지에 쓰고, count와 running은 화면 표시에 씁니다.
6. Customizing
App.jsx에서 제목을 React Hooks 실습실로 바꿈, App.css에서 페이지와 선택된 탭의 배경색을 바꿈.

새롭게 배운 내용
-useEffect에서 정리를 하지 않으면 다른 화면으로 넘어가도 그 동작이 계속 작동하게 되어 더 큰 오류의 원인이 되거나 메모리에 부담을 줄 수 있다는 것을 알게 되었습니다.
- useEffect는 화면 변경 처리 후 정리를 실행할 수 있고, useRef는 렌더링을 하지 않는, 단지 값을 담을 수 있는 상자라는 것을 알게 되었습니다.
- 여러 파일을 한 번에 수정해도 원하는 파일만 스테이징해서 커밋을 각각할 수 있다는 것을 배웠습니다.
어려웠던 점과 해결 방법
버튼으로 타이머를 직접 관리하는 부분이 어려웠습니다. useRef에 타이머 값 변수를 저장하고, Stop을 누르면 그 변수를 사용해 타이머를 멈추는 방식으로 해결했습니다. 
AI 활용 내용 및 느낀 점
이해하기 어려웠던 타이머 코드와 파일을 나눠 스테이징하는 방법을 AI에 물어봤습니다. 설명을 코드와 비교해 보니 버튼을 눌렀을 때 어떤 값이 바뀌는지 이해하기 쉬웠습니다.