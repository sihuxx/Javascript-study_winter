## 1. Map (변형하기)

> **개념:** 배열의 **모든 요소**를 1:1로 변형하여 **새로운 배열**을 만듦. (길이 변함 없음)

```javascript
const numbers = [1, 2, 3];
// 모든 숫자를 2배로 뻥튀기
const doubled = numbers.map(num => num * 2); 

console.log(doubled); // [2, 4, 6]
```

## 2. Filter (골라내기)

> **개념:** 조건에 **맞는(`true`) 요소만** 남겨서 **새로운 배열**을 만듦. (길이 줄어듦)

```javascript
const ages = [10, 25, 30, 15];
// 20세 이상 성인만 출입 가능
const adults = ages.filter(age => age >= 20);

console.log(adults); // [25, 30]
```

## 3. Reduce (합치기 & 뭉치기) 

> **개념:** 배열을 순회하며 데이터를 **하나의 값(숫자, 객체, 배열 등)**으로 누적함. (눈덩이 굴리기)

### ① 숫자 합치기 (기본)

```javascript
const scores = [10, 20, 30];
// 초기값 0부터 시작해서 다 더하기
const total = scores.reduce((acc, cur) => acc + cur, 0);

console.log(total); // 60
```

### ② 그룹화 하기 (심화 패턴)

```javascript
const items = ["apple", "banana", "apple"];
// 과일 개수 세기 (없으면 1, 있으면 +1)
const count = items.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log(count); // { apple: 2, banana: 1 }
```

## 4. Method Chaining (연결하기)

> **개념:** `filter`, `map`, `reduce` 등을 **파이프라인**처럼 연결해서 한 번에 처리함.

```javascript
const users = [
  { name: "Mike", age: 30, point: 100 },
  { name: "Jane", age: 15, point: 50 }
];

// 성인(filter)의 점수만 뽑아서(map) 합산(reduce)
const result = users
  .filter(u => u.age >= 20)
  .map(u => u.point)
  .reduce((acc, cur) => acc + cur, 0);

console.log(result); // 100
```

## 5. 필수 문법

> **개념:** 코드를 더 짧고 직관적으로 만들어주는 현대 자바스크립트 문법.

### ① 구조 분해 할당 (Destructuring)

```javascript
const user = { name: "Tom", age: 25 };
// user.name 대신 변수로 바로 꺼내기
const { name, age } = user;
```

### ② 전개 연산자 (Spread)

```javascript
const oldArr = [1, 2];
// 원본 건드리지 않고(push 안 쓰고) 새 요소 추가
const newArr = [...oldArr, 3, 4]; // [1, 2, 3, 4]
```

---

## 💡 헷갈릴 때 보는 꿀팁

* **`map`**: "내용물만 바꿔줘" (사과 -> 사과주스)
* **`filter`**: "이것만 남겨줘" (채로 거르기)
* **`reduce`**: "결과물 하나로 만들어줘" (재료 -> 요리)
* **`join`**: 배열을 문자열로 (`['a','b']` -> `"a-b"`)
* **`splice`**: 배열 수술 (원본 자르고 붙임 / **주의!**)