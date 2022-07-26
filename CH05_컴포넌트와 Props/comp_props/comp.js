/**
 * 컴포넌트
 */

/**
 * 함수 컴포넌트
 */

function welcome1(props) {
	return <h1>Hello, {props.name}</h1>
}

/**
 * 클래스 컴포넌트
 */
class welcome2 extends React.Component { //클래스 컴포넌트는 리액트 컴포넌트를 상속 받고 
	render() {	//랜더 함수를 재정의 해서 사용한다.
		return <h1>Hello, {this.props.name}</h1> //클래스 컴포넌트는 내부에 props가 있다 따라서 this로 받는다.
	}
}

<div>
	<welcome1 name="철수"></welcome1>
	<welcome2 name="철수"></welcome2>
</div>
