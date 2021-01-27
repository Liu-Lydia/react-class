import {Component} from 'react'

class CountClass extends Component{
    constructor(){
        super()
        this.state={
            total: 0,
        }
    }

    render(){
        return(
            <>
            <h1>{this.state.total}</h1>
            <button 
            onClick={() => {
                const newTotal = this.state.total - 1
                this.setState({total: newTotal})
                console.log(newTotal)}
            }>-1</button>
            <button 
            onClick={() => {
                this.setState({total: this.state.total + 1})}
            }>+1</button>
            </>
        )
    }
}

export default CountClass