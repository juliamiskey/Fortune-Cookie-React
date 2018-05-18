import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import Cookie from './cookie';
// import DisplayFortune from './display-fortune';
import Footer from './footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cookie: {},
      showFortune: false
    };

    this.showFortune = this.showFortune.bind(this)
    this.reset = this.reset.bind(this)
  }
  componentDidMount() {
    console.log('component Mounted');

  }

  showFortune(){
    axios.get('http://fortunecookieapi.herokuapp.com/v1/cookie')

      .then((res) => {
        //Here we call for the data from the fortune-cookie API
        // console.log(res.data[0]);
        this.setState({
          cookie: res.data[0],
          //Here we put the state of "showFortune" when the get-fortune button is clicked
          showFortune:true
        });
      });

  }
  reset(e){
    e.preventDefault();
    console.log(this.state.cookie)
    this.setState({
      showFortune: false,
      cookie:{
        lotto:null,
        numbers:null,
        fortune:{
          message:''
        }
      }
    })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <main className="container">
          {/* Add a ternary operator if showFortune = false show div.cookie, if showFortune = true show .display-fortune */}
        {this.state.showFortune ? (
          <div className="display-fortune"> 
            
            <div className="paper">
              <div className="fortune">
                {/* This is how I call the fortune message from the API */}
                <p className="print-fortune"> {this.state.cookie.fortune === undefined ? null : this.state.cookie.fortune.message} </p>
                <p className="print-luckyNumbers"> Lucky Numbers: {this.state.cookie.lotto.numbers === undefined ? null : this.state.cookie.lotto.numbers} </p>
                <div className="rectangle rectangleTop"> </div>
                <div className="rectangle rectangleBottom"> </div>
              </div>
            </div>



          
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="btn tweet-fortune" data-text={this.state.cookie.fortune === undefined ? null : this.state.cookie.fortune.message} data-via="MiskeyJulia" data-hashtags="cohort18" data-show-count="false" data-size="large">
                  Share your Fortune
                </a>

                <button className="btn restart" onClick={this.reset}>
                  Get a new Fortune
                </button>

          </div> //end of display fortune
         ) : (
            <div className="cookie">
              <img src="dev/styles/assets/fortune_uncracked cutout-0.png" alt="fortune-cookie" className="cookie-image" />
              {/* When user clicks the get-fortune button the class of showFortune = true. This is what drives the ternary operator.  */}
              <button type="submit" className="get-fortune btn" onClick={this.showFortune}> Get Your Fortune </button>
            </div>
        )}
        
        </main>
        
        <Footer />
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
