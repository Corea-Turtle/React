/**
 *  구조 분해 할당(Destruct assignment)
 * : 배열이나 객체의 속서을 해체하여 그 값을 개별 변수에
 *   담을 수 있게 하는 자바 스크립트 표현식
 */
let a, b, rest;

[a, b] = [10,20];
[a,b,...rest] = [10,20,30,40,50];

console.log(a);
console.log(b);
console.log(rest);
console.log([a,b,...rest]);

//객체 구조 분해
const o = {p:42,q:true};
let {p,q} = o;
console.log({p,q})
let {r,s} = o;
console.log({r,s}); //이름이 똑같아야 대입됨?
