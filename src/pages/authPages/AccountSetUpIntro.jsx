import React, { Component } from 'react';
import withRouter from '../../utils/withRouter';

import AuthHeader from '../../layout/AuthHeader';

import '../../styles/AccountSetUpIntro.scss';


import firstIntroImage from '../../assets/firstIntroImage.svg';
import secondIntroImage from '../../assets/secondIntroImage.svg';
import thirdIntroImage from '../../assets/thirdIntroImage.svg';

const store = ["first one", "second one", "third one"];

const introStore = [
  {
    id: 0,
    imgUrl: firstIntroImage,
    content: "Collaborate with cross functional team by sharing digital folders, management software to enable productivity",
  },
  {
    id: 1,
    imgUrl: secondIntroImage,
    content: "increase your efficiency with our paperless policy, which save cost and reduce clutter",
  },
  {
    id: 2,
    imgUrl: thirdIntroImage,
    content: "with artificial intelligence documents are approved and sent across teams with the aid of finger print",
  },
];
class AccountSetUpIntro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      imgUrl: introStore[0].imgUrl,
      content: introStore[0].content
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
    navigate("/account-setup");
  }

  handleNextButton = () => {
    if (this.state.id === store.length-1) {
      const { navigate } = this.props;
      navigate("/account-setup");
    } else {
      this.setState({
        id: this.state.id + 1
      }, () => { this.displayNextIntro(this.state.id)});
    }
   
  }

  displayNextIntro = (id) => {
    let imgUrl = introStore[id].imgUrl;
    let content = introStore[id].content;
    this.setState({
      imgUrl,
      content
    });
    let dots = document.querySelectorAll(".dots");
    dots[id-1].classList.remove("active");
    dots[id].classList.add("active");
  }
  render() {
    return (
      <React.Fragment>
        <AuthHeader />
        <main className='account_set_up_intro'>
            <section>
                <div className="intro_container">
                    <img src={this.state.imgUrl} alt="" />
                </div>
                <p>{this.state.content}</p>
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
