const str =
  "Rhdxoals is my love. phone number is : 010-9329-3933. phone is ipone__goot.";

// 1. String.prototype.match(RegEx) & RegEx.exec(string)
// - 둘다 같은 결과를 반환한다. 처음으로 채팅된 문자열의 정보를 객체로 반환
// - 차이점은 g 플래그를 사용했을 때 match 는 매칭된 문자열을 배열로 반환하고, exec()는 적용되지 않는다.
console.log(str.match(/phone/));
console.log(/phone/.exec(str));

// [
//     'phone',
//     index: 21,
//     input: 'rhdxoals is my love. phone number is : 010-9329-3933. phone is ipone.',
//     groups: undefined
// ]

// 2. RegEx.test(String)
// - 문자열이 정규식에 만족하는지는 boolean 값으로 반환
console.log(/phone/.test(str));

// 3. 정규식이 일치하는 인덱스를 반환
console.log(str.search(/010-/));

// 4. [] 안의 문자집합은 단일 문자로 취급 , ^ 표시가있다면 차집합
console.log(str.match(/[^0-9|' '|r]/g));

// 5. . 은 임의의 문자를 나타냄(개행문자 재외)
console.log(str.match(/p...e/g));

// 6. \d 는 숫자 [0-9] 와 같음
console.log(str.match(/\d/g));

// 7. \D 는 숫자를 제외한 문자
console.log(str.match(/\D/g));

// 8. \w 영어 대소문자 + 언더바 + 숫자
console.log(str.match(/\w/g));

// 9. \w 를 제외한 문자들 (공백, 특수문자, 마침표, 쉼표 ...)
console.log(str.match(/\W/g));

// 10. 공백
console.log(str.match(/\b/g));

// 11. 조건{m,n} 조건을 최소 m번 반복, 최대 n 번반복 찾기. 최대는 생략가능
console.log(str.match(/\d{3,4}/g));

// 12. ? 는 최대 한번 반복(있어도되고, 없어도되는것)
console.log(str.match(/\d{3}-?/g));

