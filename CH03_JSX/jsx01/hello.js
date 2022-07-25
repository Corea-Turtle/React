
class Hello extends React.Component { //얘는 클래스가 아니라 컴포넌트다.   리액트에서 쓰려면 상속을 받아야됨. 리액트 컴포넌트의 핵심 기능은 랜더링이다.
    render(){   
        return <h1>Hello, {this.props.nickname}</h1>
    }
}

ReactDOM.render(
    // 컴포넌트 사용
    <Hello nickname='사용자'/>,
    document.getElementById('root') //어디에 사용할지 정해줌
);