// React
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Months from './Months.js'



class Main extends React.Component{
  constructor() {
    super()
    this.state = {
      months: [],
      // month: {
      //   id:'',
      //   name:'',
      //   flavor1:'',
      //   flavor2:''
      // }
    }
  }
  async componentDidMount(){
    const responses=await axios.get('/api/months')
    const months=responses.data
    console.log(months)
    this.setState({months})
  }
  render () {
    return (
      <div id="main" className="container">
        <h2 id="title"> Kettlebell Creamery </h2>
        < Months months= {this.state.months}/>
      </div>
    )
  }

}


// const root = document.querySelector('#root');
ReactDOM.render(<Main/>, document.querySelector('#root'));

export default Main
