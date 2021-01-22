import React from 'react' //React是物件 / React.{Component}

//類別繼承
class CountClass extends React.Component {
  //Component
  constructor() {
    super() //宣告React.Component繼承物件
    this.state = {
      total: 0,
    }
  }

  //方法回傳值
  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button
          onClick={() => {
            //先計算最後的更新值,建立一個新的值的變數(or常數)
            const newTotal = this.state.total - 1
            //**後執行** 給react設定狀態用(呈現畫面用)
            this.setState({ total: newTotal })
            //**先執行** 做其他事用
            console.log(newTotal)
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total + 1 }) //物件
          }}
        >
          +1
        </button>
      </>
    )
  }
}

export default CountClass
