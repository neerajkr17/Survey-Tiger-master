import React from 'react';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import TakeSurvey from './TakeSurvey';

class CreateSurvey extends React.Component{

    state = {open:false, selected:"Select Question Type", shouldPublish:false}

    questionId=0;
    questions=[]

    onSelectedChange(selected){
        console.log(selected.trim());
        this.setState({selected:selected.trim()});
        
    }


    setQuestions = (question, publish) => {
        // this.questionId = this.questionId + 1;
       if(question){ 
           this.questions.push({question, questionType: this.state.selected})
            if(publish){
                this.setState({shouldPublish:true})
                console.log("create => ", this.questions)
                // this.props.getQuestions(this.questions)
            }
        }
    }

    publishConfirmed = () => {
        this.props.getQuestions(this.questions)
    }


    render(){
        return (
                <div>
                    {!this.state.shouldPublish?<> <div className="dropdown">
                            <div onClick={()=>{
                            this.setState({open: !(this.state.open)})}} className={`graydiv ui selection dropdown ${this.state.open ? 'visible active' :''}`}>
                            <i className="dropdown icon"></i>
                            <div className="text">{this.state.selected}</div>
                            <div className={`menu ${this.state.open ? 'visible transition':''}`}>
                                <div
                                    onClick={(e) => { 
                                        console.log(this.id = this.id+1)
                                        this.onSelectedChange(e.target.innerHTML) 
                                        }}
                                        className="item">
                                        Multi-select
                                </div>
                                <div
                                    onClick={(e) => { 
                                        this.onSelectedChange(e.target.innerHTML) 
                                        }}
                                        className="item">
                                        Single select
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        { (this.state.selected !== "Select Question Type") ?
                            <div>
                                <QuestionsAndAnswers selected={this.state.selected} setQuestions = {this.setQuestions}/>
                            </div>
                            :null
                        }

                    </div>
                    </>:<TakeSurvey publishConfirmed={this.publishConfirmed} questions={this.questions}/>}
                </div>
        );
    }

}

export default CreateSurvey;
