### 스피드 테스트 풀면서 정리해둔 거

#### B2

```js
  /* Object.assign */

  const li = Object.assign(document.createElement("li"), {
    innerHTML: `<p>${input.value}</p><button class="des" onclick="parentElement.remove()">삭제</button>`
    classname: "todo"
  })
```

#### B3

- **offsetWidth**: 테두리(Border)까지 포함한 눈에 보이는 진짜 박스 크기. `(⭐가장 많이 씀)`
- **clientWidth**: 테두리 빼고 패딩까지만 포함한 안쪽 공간 크기.
- **scrollWidth**: 스크롤 내려야 보이는 내용까지 합친 전체 내용물 크기.

- **clientX**: 스크롤 무시하고 현재 보이는 화면 기준. `(ex. 팝업창)`
- **pageX**: 스크롤 포함해서 문서 맨 꼭대기 기준. `(ex. 페이지 어딘가에 점 찍기)`
- **offsetX**: 클릭한 박스의 왼쪽 모서리 기준. `(ex. 그림판 그리기)`

- **innerWidth**: 탭/메뉴바 뺀 순수 웹사이트 화면 크기.
- **screen.width**: 그냥 모니터 해상도 크가

#### B4 
* **setTimeout**
  - 설정한 시간이 지나면 딱 한 번만 실행
  - `clearTimeout()`로 취소
  
* **setInterval**
  - 설정한 시간 간격으로 계속 무한히 반복 실행
  - `clearInterval()`로 중단

#### B6
- **target과 currentTarget의 차이**
  - `e.target`: 클릭된 가장 안쪽 요소 (이미지를 눌렀다면 `<img>`).
  - `e.currentTarget`: addEventListener가 붙은 요소 (자식을 눌러도 무조건 `<li>`)- 

- **드래그 앤 드롭**
  - `dragover`: 요소가 구역 위에 떠 있을 때 `(e.preventDefault()를 써야 드롭 허용됨)`.
  - `dragenter`: 요소가 구역 안으로 처음 진입했을 때 
  - `dragleave`: 요소가 구역 밖으로 나갔을 때 
  - `drop`: 마우스를 놓아 요소를 실제로 떨어뜨렸을 때
  - `draggable="true"`: 이 속성이 HTML에 있어야 드래그가 시작
  - `e.preventDefault()`: dragover에서 이걸 안 해주면 브라우저가 드롭을 거부 `(금지 표시 뜸)`

#### B7

**1. 백스페이스를 눌렀을 때**
  현재 칸이 비어 있고, 첫 번째 칸이 아니라면
  이전`(왼쪽)` 입력창으로 포커스 이동
```js
if(e.key === "Backspace") {
  if (input.value === "" && i > 0) {
    inputs[i - 1].focus();
  }
}
```

**2. 값이 입력되었을 때**
  한 글자가 입력되었고, 마지막 칸이 아니라면
  다음`(오른쪽)` 입력창으로 포커스 이동
```js
input.addEventListener("input", () => {
  if (input.value.length === 1 && i < inputs.length - 1) {
    inputs[i + 1].focus();
  }
})
```

**3. 전체 입력 상태 확인**
 모든 input이 채워졌으면
 숨겨진 버튼을 화면에 표시
```js
if(inputs.every(input => input.value.length > 0)) {
  $("button").style.display = 'block'
}
```
  