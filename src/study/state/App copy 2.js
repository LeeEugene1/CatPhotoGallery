import './App.css';
import React from 'react';
import { Component } from 'react';

class TOC extends Component{
  render(){
    let lists = []
    let data = this.props.data
    let i = 0;
    while(i < data.length){
      lists.push(
        <li key={data[i].id}>
          <a href={"/content/"+data[i].id}
            data-id = {data[i].id}
            onClick={function(e){
              // console.log(e.target.dataset)
              e.preventDefault()
              this.props.onChangePage(e.target.dataset.id)
            }.bind(this)}>{data[i].title}</a>
        </li>);
      i = i + 1;
    }
    return(
      <nav>
         <ul>
           {lists}
           {/* <li><a href="1.html">HTML</a></li>
           <li><a href="2.html">CSS</a></li>
           <li><a href="3.html">JS</a></li> */}
         </ul>
      </nav>
    )
  }
}

class Subject extends Component{
  render(){
    return(
      <header>
          {/* <h1>WEB</h1>
          World wide web! */}
          <h1><a href="/" onClick={function(e){
            e.preventDefault()
            this.props.onChangePage()
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
      </header>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
      </article>
    )
  }
}

class App extends Component {
  // state = {
  //   count:0
  // }
  constructor(props){//초기화(state안에 props를 설정)
    super(props)
    this.state = {
      mode:'welcome', //렌더링할때 컴포넌트 렌더링값이 변함
      selected_id:null,
      welcome:{title:'Welcome', desc:'welcome!!!!!!!'},
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JS', desc:'JS is for acting'}
      ]
    }
  }
  render(){
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    }else if(this.state.mode === 'read'){
      let i = 0
      while(i < this.state.contents.length){        
        if(this.state.selected_id === this.state.contents[i].id){
          _title = this.state.contents[i].title
          _desc = this.state.contents[i].desc
          break;
        }
        i = i + 1
      }

    }
    return (
      <div>
          <h1>고양이 사진첩</h1>
          {/* <Subject title="WEB" sub="world wide web!"></Subject> */}
          <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
            onChangePage={function(){
              this.setState({
                mode:'welcome',
                // selected_id:null
              })
            }.bind(this)}
          >
          </Subject>
          {/* <h1>WEB</h1>
          World wide web! */}
          {/* data는 TOC componet의 props */}
          <TOC 
          onChangePage={function(id){
            console.log(id)
            this.setState({
              mode:'read',
              selected_id:Number(id)
            })
          }.bind(this)}
          data={this.state.contents}></TOC>
          {/* <Content title="HTML" desc="HTML is blabla"></Content> */}
          <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
