/**
 *  화살표 함수
 */

// map()과 ()=>{}

const materials = [
	'Hydrogen',
	'Helium',
	'Lithum',
	'Beryllium'
];

let newArr = materials.map((e, idx)=>{ //react할때 key를 idx로 잡아주면 좋음
	return e.length *2; //map은 배열이 리턴된다.
});	

console.log(newArr);

const abc =[
	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
]

let newAbc = abc.map((e,idx)=>{
	return e.charAt();
});

console.log(newAbc)


//회문
let palindromes = [
	'스위스',
	'팥콩밭'
]