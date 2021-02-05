import React from "react";
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            answers:[]
        }
    }
    renderSearch=(e)=>{
        fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${e.target.value}&num=10`, {
	        "method": "GET",
	        "headers": {
		    "x-rapidapi-key": "d6be5a03b7mshb3b5f8449577fefp162eeajsne7b371d04cb0",
		    "x-rapidapi-host": "google-search3.p.rapidapi.com"
	        }
        })
        .then(res=>res.json())
        .then(data=>this.setState({answers:data.results}))
    }
    renderList=()=>{
        if(this.state.answers){
            var count=0
            return this.state.answers.map((val,idx)=>{
                if(count===7){
                    return
                }
                else{
                    count++
                return(
                    <div>
                        <h4 className="text-center"><a href={val.link}  key={idx}>{val.title}</a></h4>
                    </div>
                )
                }
            })
        }
    }
    render(){
        console.log(this.state.answers)
        return(
            <>
                <div  className="container d-flex justify-content-center">
                    <ul className="d-flex flex-row" style={{fontSize:"14vh",marginTop:"20vh",listStyle:"none"}}>
                    <li style={{color:"#4285F4"}}>G</li>
                    <li style={{color:"#DB4437"}}>o</li>
                    <li style={{color:"#F4B400"}}>o</li>
                    <li style={{color:"#4285F4"}}>g</li>
                    <li style={{color:"#0F9D58"}}>l</li>
                    <li style={{color:"#DB4437"}}>e</li>
                    </ul>
                </div>
                <div className="d-flex justify-content-center">
                <input onChange={this.renderSearch} type="text" className="col-10 col-md-5 form-control mt-4" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        {this.renderList()}
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center mt-4">
                <button className="btn btn-light mr-5">Google Search</button>
                <button className="btn btn-light">I'm Feeling Lucky</button>
                </div>
            </>
        )
    }
}
export default Home;