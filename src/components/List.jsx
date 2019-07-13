import React, {Component} from 'react';
import Card from './Card.jsx'
import axios from 'axios';

// const URL = 'https://swapi.co/api/people/1'
const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
const API_KEY = '370a8c560808d34af2348c0932d7a877ee0228ef25f63d0bce81d0e7d3a7e1eb';

export class List extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
        componentDidMount(){
            axios.get(URL,{
                params:{
                    api_key:API_KEY
                }
            })
                .then(res=>{
                console.log("DATA: ", res);
                this.setState({
                    data:res.data.Data
                })
                
            })
        }
        
        
        render(){
            let obj = this.state.data
            let list = obj.map((item, index)=>{
                return (
                    <Card data={item} key={index}/>
                )
            })

            return (
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexFlow:'row wrap'}}>
                    {list}
                </div>
            )
        }
    }
    


export default List