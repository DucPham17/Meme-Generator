import React from "react"

class MemeGenerator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            topText: "",
            botText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allImg : [],
            topDisplay :"",
            botDisplay: ""
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => this.setState({
            allImg : response.data.memes
        }))
        
        
    }

    handleChange(event){
       const {name,value} = event.target
       this.setState({
            [name] : value
       })
       console.log(this.state)
       console.log(this.state)
    }

    handleClick(event){
        event.preventDefault()
        const num = Math.floor(Math.random()*this.state.allImg.length)
        this.setState({
            topDisplay : this.state.topText,
            botDisplay : this.state.botText
        })
        this.setState({
           topText : "",
           botText : "",
           randomImg: this.state.allImg[num].url
        })
    }

    render(){
        return(
            <div>
                <label>
                Top
                <input placeholder="Top Text"
                className="holder" 
                 type="text" 
                name="topText" 
                onChange={this.handleChange.bind(this)}
                value = {this.state.topText} 
                />
                </label>
                <label>
                Bottom
                <input className="holder"  
                placeholder="Bottom Text" 
                type="text" name="botText" 
                onChange={this.handleChange.bind(this)}
                value = {this.state.botText}
                />
                </label>
                <button className="btn-default" onClick={this.handleClick.bind(this)} >Generate</button>
                <div id="textAndImage">
                <div className="text-top">
                {this.state.topDisplay}
                </div>
                <img id="meme" src= {this.state.randomImg} alt="randomImg"/>
                <div className="text-bot">
                {this.state.botDisplay}
                </div>
                </div>             
            </div>
        )
    }
}

export default MemeGenerator