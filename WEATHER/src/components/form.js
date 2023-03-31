import React from "react";

class Form extends React.Component{

    render(){

        return(
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" placeholder="thành phố"/>
                        <input type="text" name="country" placeholder="quốc gia"/>
                    <button>tìm </button>
                </form>
           
        )
    }
}

export default Form;