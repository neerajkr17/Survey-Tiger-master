import React from 'react';


class LandingPage extends React.Component {

    goToCreatePage = () =>{
        this.props.changeSurvey(true,true)
    }

    goToTakePage = () => {
        this.props.changeSurvey(true,false)
    }

    render(){
        return (
          <div>
            <div
              onClick={this.goToCreatePage}
              className="survey-button text-center"
            >
              Create Survey
            </div>
            <div
              onClick={this.goToTakePage}
              className="survey-button text-center"
            >
              Take Survey
            </div>
          </div>
        );
    }
}

export default LandingPage; 