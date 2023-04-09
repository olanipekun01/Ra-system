import React, { Component } from 'react'
import AuthHeader from '../../layout/AuthHeader';
import '../../styles/SignUpOTPPage.scss';

import logo from '../../assets/Vector-i.svg';

// const inputs = document.querySelectorAll(".otp_box input");

// inputs.forEach((input, index) => {
//   input.dataset.index = index;
//   input.addEventListener("paste", this.handleOtppaste(inputs));
//   input.addEventListener("keyup", this.handleOtp(inputs));
// });

class SignUpOTPPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      otp: new Array(6).fill("")
    }
  }

  handleChange = (element, index) => {
    if (isNaN(element.target.value)) return false; 

    this.setState({
      otp: this.state.otp.map((d, idx) => (idx === index) ? element.target.value : d)
    });

    //focus next input
    if (element.target.nextSibling) {
      element.target.nextSibling.focus()
    }
    
  }

  handleKeyDown = (e, index) => {
    console.log("User pressed: ", e.key)

    if (e.key === 'Backspace') {
      console.log('Backspace key pressed')
      e.target.previousSibling.focus();
    }
  }

  // handleOtppaste = (e, inputs)=> {
  //   const data = e.clipboardData.getData("text");
  //   const value = data.split("");
  //   if (value.length === inputs.length) {
  //     inputs.forEach((input, index) => (input.value = value[index]));
  //     this.submit(inputs);
  //   }
  // }

  // handleOtp = (e, inputs) => {
  //   const input = e.target;
  //   let value = input.value;
  //   input.value = "";
  //   input.value = value ? value[0] : "";

  //   let fieldIndex = input.dataset.index;
  //   if (value.length > 0 && fieldIndex < inputs.length - 1) {
  //     input.nextElementSibling.focus();
  //   }

  //   if (e.key === "Backspace" && fieldIndex > 0) {
  //     input.previousElementSibling.focus();
  //   }

  //   if (fieldIndex === inputs.length - 1) {
  //     this.submit(inputs);
  //   }
  // }

  // submit = (inputs) => {
  //   console.log("Submittin....!");
  //   let otp ="";
  //   inputs.forEach((input) => {
  //     otp += input.value;
  //     input.disabled = true;
  //     input.classList.add("disabled");
  //   });
  //   console.log(otp);
  // }
  render() {
    return (
      <React.Fragment>
        <AuthHeader />
        <main className='sign_up_otp_page'>
            <section>
                    <div className="header_wrapper">
                        <img src={logo} className="header_logo" alt="logo" />
                        <h1>RA_SYS</h1>
                    </div>
                    <h4>The paperless organisation</h4>
                    <h6>Please enter the code sent to your mail</h6>
                    <div className="otp_div_wrapper">
                        <div className="otp_box">
                          {this.state.otp.map( (data, index) => {
                            return (
                              <input 
                                onChange={e => this.handleChange(e, index)} 
                                value={data} 
                                key={index} 
                                name="otp" 
                                type="text" 
                                maxLength={1}
                                onFocus={e => e.target.select()}
                                onKeyDown={e => this.handleKeyDown(e, index)}
                                />
                            )
                          })}
                            {/* <input onChange={this.handleChange} type="text" maxLength={1}/>
                            <input onChange={this.handleChange} type="text" maxLength={1}/>
                            <input onChange={this.handleChange} type="text" maxLength={1} className="space"/>
                            <input onChange={this.handleChange} type="text" maxLength={1}/>
                            <input onChange={this.handleChange} type="text" maxLength={1}/>
                            <input onChange={this.handleChange} type="text" maxLength={1}/> */}
                        </div>

                        <span>Code will expire in 5 mins</span>
                    </div>
                    {/* <p>OTP Entered - {this.state.otp.join("")}</p> */}
                    <button>Next</button>

                    <span className='other_links'>Resend code</span>

                    <span className='other_links'>Use different mail</span>
                    
            </section>
        </main>
      </React.Fragment>
     
    )
  }
}

export default SignUpOTPPage;
