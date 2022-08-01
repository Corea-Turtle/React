import logo from './logo.svg';
import './App.css';
//import UseState01 from './hooks/1_useState/UseState01'; //import 뒤에 이름은 변수명으로 생각하면 좋다.
// import UseState02 from './hooks/1_useState/UseState02';
// import UseState03 from './hooks/1_useState/UseState03';
// import UseEffect01 from './hooks/2_useEffect/UseEffect01';
// import UseEffect02 from './hooks/2_useEffect/UseEffect02';
// import UseEffect03 from './hooks/2_useEffect/UseEffect03';
// import UseRef01 from './hooks/3_useRef/UseRef01';
// import UseRef02 from './hooks/3_useRef/UseRef02';
// import UseRef03 from './hooks/3_useRef/UseRef03';
// import UseMemo01 from './hooks/4_useMemo/UseMemo01';
// import UseCallBack01 from './hooks/5_useCallback/UseCallBack01';
// import UseCallback02 from './hooks/5_useCallback/UseCallback02';
// import UseCallBack03 from './hooks/5_useCallback/UseCallBack03';
// import UseReducer02 from './hooks/6_useReducer/UseReducer02';
// import UseReducer03 from './hooks/6_useReducer/UseReducer03';
import Child from './hooks/7_React.memo/Child';
import Parents from './hooks/7_React.memo/Parents';

function App() {
  return (

    <div className="App">
      <Parents/>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
