import React from 'react';
import LandingPage from './LandingPage';
import './App.css';
import Header from './Header';
import CreateSurvey from './CreateSurvey';
import TakeSurvey from './TakeSurvey';

class App extends React.Component{

    state = {survey:false, question:[], createOrTake: true};

    getQuestions = (questions) =>{
        // console.log("before=>", questions)
        this.setState({question:questions, survey:false})
    }

    changeSurvey = (sur=true, val) => {
        // console.log("val=>",val)
        this.setState({survey:sur, createOrTake:val})
    }

    render(){
        // console.log("app => ", this.state.survey)
        return (<div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3"></div>
                        <div className="col-lg-6 col-md-6" style={{textAlign:"-webkit-center"}}>
                            <Header />
                            {
                                !(this.state.survey) ? 
                                <LandingPage changeSurvey={this.changeSurvey} /> :
                                this.state.createOrTake ?
                                    <CreateSurvey getQuestions={this.getQuestions} questions={this.state.question}/>:
                                    <TakeSurvey  changeSurvey={this.changeSurvey} questions={this.state.question} />    
                            }

                        </div>
                        <div className="col-lg-3 col-md-3"></div>
                    </div>
                    
                </div>
        )
    }
}

export default App;