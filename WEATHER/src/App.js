import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";


const Api_Key = "be7c2643f6fe0c32eb7fe5035e5c8aa5";

class App extends React.Component {

  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //getWeather is a method we'll use to make the api call
  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();   
    try {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
      const response = await api_call.json();
      if(city && country){
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          
          error: ""
        })
      }else{
        this.setState({
          error: "Please fill all fields..."
        })
      }
    } catch (error) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
          error: "Can not find out this city..."
      })
    }

  }

  render() {

    return (

      <div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                
                </div>
                
                <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    
                    error={this.state.error}
                  />
                
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default App;
