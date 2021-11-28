# Hook 함수 정리

## useRef
특정 DOM을 조작하고싶을때, 리랜더링 안하고싶을때 사용

## useEffect
리액트 컴포넌트가 처음화면에 나타나게될때,
화면에 사라지게 될때 특정 작업을 할 수 있다.
컴포넌트의 props나 상태가 바뀌어 업데이트될때, 업데이트되기전
리랜더링될때마다등등..
- 마운트 : 만들어질때?
- 언마운트 : 삭제될때

```javascript
useEffect(()=>{
    console.log('컴포넌트가 화면에 나타남')
    //props -> state
    //REST API
    //D3 Video.js
    //setInterval, setTimeout
    return ()=>{
        //값이 바뀌기 직전 호출
        //clearInterval, clearTimeout
        //라이브러리 인스턴스 제거
        console.log('컴포넌트가 화면에 사라짐)
    }
},[])//[]안에 특정 값을 넣게되면 해당값이 바뀔때마다 호출됨

useEffect(()=>{
    loadPost(username, urlSlug)
},[username, urlSlug])
```

# 라이브러리

## React-Route
적용하기
app을 BrowserRouter로 감싸줄것
```
...
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
```
예시
```
<div>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
</div>
```