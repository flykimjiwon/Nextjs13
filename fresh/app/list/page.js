
export default function List() {

    let 상품 = ["토마토","파스타","코코넛"]
    // let array = [2,3,4]
    // array.map((a,i)=>{
    //     console.log(a,i)
    // })
    // // let a = [20,30,40]

    // let b = array.map((a)=>{
    //     return 10
    // })

    // console.log(b)

    

    return (
        <div>
        <h2>Products</h2>
        {
            상품.map((a,i)=>{
                return(
                    <div className="food">
                        <h4>{a} $40</h4>
                    </div>
                )
                // 새로운 array에 담아서 전달해주기대문에 return이다
                // [div,div,div] 느낌인거임
            })
        }
        {/* <div className="food">
          <h4>{상품[0]} $40</h4>
        </div>
        <div className="food">
          <h4>상품명 $40</h4>
        </div>
        <div className="food">
          <h4>상품명 $40</h4>
        </div> */}
      </div>
    )

  
  
  }
  
//   컴포넌트 만들어서 exoprt default를 넣는개념이다. page를 만든다는건!