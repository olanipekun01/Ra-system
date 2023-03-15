import React, { Component } from 'react';
import withRouter from '../utils/withRouter';

import AuthHeader from '../layout/AuthHeader';

import '../styles/AccountSetUpIntro.scss';

const store = ["first one", "second one", "third one"];
class AccountSetUpIntro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      imgValue: store[0]
    }
  }

  handleButton = (e) => {
    if (e.target.innerHTML === "Next") {
      this.handleNextButton();
    } else if (e.target.innerHTML === "Skip") {
      this.handleSkipButton();
    }
  }

  handleSkipButton = () => {
    const { navigate } = this.props;
    navigate("/accountSetUp");
  }

  handleNextButton = () => {
    if (this.state.id === store.length-1) {
      const { navigate } = this.props;
      navigate("/accountSetUp");
    } else {
      this.setState({
        id: this.state.id + 1
      }, () => { this.displayNextIntro(this.state.id)});
    }
   
  }

  displayNextIntro = (id) => {
    let imgValue = store[id];
    this.setState({
      imgValue
    });
    let dots = document.querySelectorAll(".dots");
    dots[id-1].classList.remove("active");
    dots[id].classList.add("active");
  }
  render() {
    return (
      <React.Fragment>
        <AuthHeader />
        <main>
            <section>
                <div className="intro_container">
                     {this.state.imgValue}
                </div>

                <div className="dots_wrapper">
                    <div className="dots active"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                </div>
                <button onClick={this.handleButton}>Next</button>
                <button onClick={this.handleButton} className="skip_button">Skip</button>
            </section>
        </main>
      </React.Fragment>
    )
  }
}

export default withRouter(AccountSetUpIntro);
