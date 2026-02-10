/* 
 문제 1. 장바구니 결제 금액 구하기 (Method Chaining)
 상황: 장바구니에서 '선택된(selected: true)' 상품들의 총 결제 금액(가격 * 수량)을 구하시오.
*/
const cart = [
  { item: "노트북", price: 1200000, quantity: 1, selected: true },
  { item: "마우스", price: 35000, quantity: 2, selected: true },
  { item: "키보드", price: 89000, quantity: 1, selected: false }
];

cart.filter(c => c.selected == true).reduce((acc, cur) => acc + (cur.price * cur.quantity), 0)
const cartResult = cart
  .filter(c => c.selected == true)
  .reduce((acc, cur) => acc + (cur.price * cur.quantity), 0);


/* 
  문제 2. 닉네임 정리하기(문자열 조작)
  상황: 닉네임 목록에서 공백을 제거(trim)하고, 5글자 이상인 것만 남긴 뒤,
  모두 대문자로 변환하여 쉼표(,)로 연결한 문자열을 만드시오.
*/
const nicknames = ["  code ", "react", "html", "javascript  ", "css"];

const nicknameResult = nicknames
  .map(n => n.trim())
  .filter(n => n.length >= 5)
  .map(n => n.toUpperCase())
  .join(",");


/* 
  문제 3. 우수 학생 점수 총합 구하기(객체 배열)
  상황: 성적(grade)이 "A"인 학생들만 골라내어, 그 학생들의 점수(score) 총합을 구하시오.
*/
const students = [
  { name: "Anna", grade: "A", score: 90 },
  { name: "John", grade: "B", score: 75 },
  { name: "Judy", grade: "A", score: 85 },
  { name: "Paul", grade: "B", score: 60 },
];

const scoreResult = students
  .filter(s => s.grade == "A")
  .map(s => s.score)
  .reduce((acc, cur) => acc + cur, 0);


/* 
  문제 4. 구조 분해 할당(Destructuring)
  상황: 객체의 속성값(color, price)을 꺼내어 동일한 이름의 변수로 만드시오. 
*/
const product = {
  id: 1,
  title: "NoteBook",
  color: "Silver",
  price: 1500000
};

const { color, price } = product;


/* 
  문제 5. 전개 연산자 (Spread Syntax)
  상황: 기존 팀원(oldTeam) 배열을 유지하면서 뒤에 "David"를 추가한 새로운 배열(newTeam)을 만드시오.
  (push 사용 금지)
*/
const oldTeam = ["John", "Mike", "Amy"];
const newTeam = [...oldTeam, "David"];


/* 
  문제 6. 투표 결과 집계하기(Reduce 심화)
  상황: 투표 목록(votes)을 확인하여 각 과일이 몇 번 투표되었는지 개수를 세어 객체 형태로 만드시오.
  목표 결과: { apple: 3, banana: 2, orange: 1 }
*/
const votes = ["apple", "banana", "apple", "orange", "banana", "apple"];

const voteResult = votes.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur] += 1; // 이미 있으면 +1
  } else {
    acc[cur] = 1;  // 처음이면 1로 초기화
  }
  return acc; // 수정된 객체 반환
}, {});

/* 
  문제 7. 배열 수술하기 (Splice)
  상황: colors 배열에서 "Green"을 삭제하고, 그 자리에 "Purple"과 "Lime"을 추가하세요. (주의: splice는 원본 배열을 직접 변경합니다.)
  목표 결과: ["Red", "Purple", "Lime", "Blue", "Yellow"]
*/
const colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(1, 1, "Purple", "Lime")

/* 
  문제 8. URL 슬러그 만들기 (Split & Join)
  상황: 블로그 제목(title)을 URL 주소로 쓰기 좋게 **소문자로 바꾸고, 띄어쓰기는 하이픈(-)**으로 연결하세요.
  목표 결과: "welcome-to-javascript-world"
*/
const title = "Welcome to Javascript World";
title.toLowerCase().split(" ").join("-")

/* 
  문제 9. 카테고리별로 그룹화하기 (Reduce 끝판왕) ⭐⭐⭐⭐⭐
  상황: 전자제품과 가구 목록이 섞여 있습니다. 카테고리(category) 별로 제품 이름(name)을 묶어서 객체로 만드세요. (이게 되면 프론트엔드 데이터 가공은 하산하셔도 됩니다.)
   목표 결과:
  {
    Electronics: ["TV", "Monitor", "Mouse"],
    Furniture: ["Sofa", "Desk"]
  }
*/

const products = [
  { name: "TV", category: "Electronics" },
  { name: "Sofa", category: "Furniture" },
  { name: "Monitor", category: "Electronics" },
  { name: "Desk", category: "Furniture" },
  { name: "Mouse", category: "Electronics" }
];
products.reduce((acc, cur) => {
  if(!acc[cur.category]) {
    acc[cur.category]= []
  }

  acc[cur.category].push(cur.name)
  return acc
}, {})