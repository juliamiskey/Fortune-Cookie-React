import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Footer from './footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cookie: {},

      showFortune: false
    };

    this.showFortune = this.showFortune.bind(this)
  }
  componentDidMount() {
    console.log('component Mounted');
    axios.get('http://fortunecookieapi.herokuapp.com/v1/cookie')

      .then((res) => {
        //Here we call for the data from the fortune-cookie API
        // console.log(res.data[0]);
        this.setState({
          cookie: res.data[0] 
        });
      });
  }

  showFortune(){
    //Here we put the state of "showFortune" when the get-fortune button is clicked
    this.setState({
      showFortune: true
    });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        
          {/* add a ternary operator here saying: if showFortune = false show .cookie, if showFortune = true show .display-fortune */}
          {/* {this.state.showFortune === true ? this.cookie : this.display-fortune} */}

        <main className="container">

          <div className="cookie">
            <img src="dev/styles/assets/fortune_uncracked cutout-0.png" alt="fortune-cookie" className="cookie-image" />
              <button type="sumbit" className="get-fortune btn" onClick={this.showFortune} > Get Your Fortune </button>
          </div>

          <div className="display-fortune">
            <div className="fortune">
              <p className="print-fortune"> {this.state.cookie.fortune === undefined ? null : this.state.cookie.fortune.message} </p>
              <div className="rectangle rectangleTop"> </div>
              <div className="rectangle rectangleBottom"> </div>
            </div>

            <button className="btn tweet-fortune">Share your Fortune</button>
            <button className="btn restart" action="./index.html">Get a new Fortune</button>
          </div>

        </main>
        
        <Footer />
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
