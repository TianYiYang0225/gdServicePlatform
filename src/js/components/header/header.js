import React from 'react'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userState:false,
            username:''
        }
    }
    render(){
     // const getName =()=>{
     //     if(this.props.title!==undefined)
     //         return this.state.name;
     //     else{
     //
     //     }
     // };
        return(
            <div className='title-header'>
                <header>{this.props.title}</header>
            </div>
        )
    }
}
export default Header