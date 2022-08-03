import React from 'react'
import styled from 'styled-components'
/**styled-components
 * :CSS 문법을 그대로 사용
 *  결과물을 스타일링딘 컴포넌트 형태로 만들어주는 오픈소스 라이브러리
 * 
 */

const Wrapper = styled.div`
  padding: 1em;
  background: green;
  border-radius: 50%;
`;

const SmartButton = styled.button`
  color: ${props => props.dark? 'white':'dark'};
  background : ${props => props.dark? 'black': 'white'};
  border: 1px solid crimson;
  padding: 3px;
`;

const WrapperButton = styled.button`
  background: brown;
  border: none;
`;


function MainPage() {
  return (
    <>
    
    <Wrapper>
      <div>
        내일 세상이
      </div>
    </Wrapper>
    <WrapperButton>
      멸망<br/>
      해도<br/>
      나는<br/>
      나무를<br/>
      심는다.<br/>
    </WrapperButton>
    <SmartButton dark>button</SmartButton>
    </>
  )
}

export default MainPage