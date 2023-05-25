import Link from "next/link"

export default function Home() {

  let name = "kimjiwon"
  let age  = 32
  let link = "http://google.com"

  return (
<div>


      <h1 className="title">Programming Log</h1>
      <p className="title-sub">by dev kim</p>

    {/* <h4 className="red">안녕</h4> */}
    {/* <h4 className="title" style={{color:'red'}}>애플후레시</h4>
    <p className="title-sub">by dev {name} {age}</p>
    <a href={link}>링크</a> */}
</div>
  )
  // 1.return()안에는 1개의 태그로 시작해서 끝나야한다.
  // 2.style을 집어 넣고 싶다면? class를 넣고 싶으면 className 이라고 사용해야한다. JS문법과 겹치기 때문
  // 사실 여기는 js넣는 공간, JSX의 특성이다.
  // 3.HTML안에 변수 넣으려면 {}를 사용한다.
  // 속성 안에도 변수를 넣을 수 있다. 링크, src, id 등...
  // 4.style속성 넣으려면 style ={{ , }} 이와같이 넣어줘야한다.
  // 대신 - 기호를 못쓰기때문 font-size등, fontSize와같이 써줘야함


}
