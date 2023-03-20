import React from 'react';

class QuestionsAndAnswers extends React.Component{

    state = {question:"", answers:{1:""}, addNpublish:false, add: false, publish:false}

    id = 1;

    incrementHandler = () => {
        this.id = this.id +1 ;
        if(this.props.selected === "Multi-select" && this.id<=4){
            this.setState({answers: {...this.state.answers, [this.id]:""}})
            }
        if(this.props.selected === "Single select" && this.id<=2){
            this.setState({answers: {...this.state.answers, [this.id]:""}})
        }
        if((this.props.selected === "Multi-select" && this.id===4) ||(this.props.selected === "Single select" && this.id===2)){
            this.setState({addNpublish: true})
            //this.id=1;
        }

    }

    decrementHandler = (e) =>{
        
        if(e.target.accessKey>1){const row = parseInt(e.target.accessKey);
        const ans = this.state.answers;
        console.log(ans)
        delete ans[row]
        
        this.setState({answers:{...ans}})
        console.log(ans)
        this.setState({addNpublish: false})
    }
    this.id = this.id-1
    }

    onInputChange = (e) => {
        const key = e.target.accessKey
        this.setState({answers: {...this.state.answers, [key]:e.target.value}})
    }

    onQuestionChange = (e) => {
        this.setState({question: e.target.value})
    }

    submitQuestion = (e)=> {
        e.preventDefault();
        if(this.state.add){
            this.props.setQuestions({question:this.state.question, answers: this.state.answers})
            this.setState({question:"", answers:{1:""}, addNpublish:false, add: false})
            this.id = 1;
        }else if(this.state.publish){
            this.props.setQuestions({question:this.state.question, answers: this.state.answers}, this.state.publish)
            this.setState({question:"", answers:{1:""}, addNpublish:false, publish: false})
        }
        
    }

    render(){
        const ans = this.state.answers
        
        return(
            <div>
                <form onSubmit={this.submitQuestion}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">?</span>
                        </div>
                        <input type="text" className="form-control"  aria-label="Username"
                               value ={this.state.question}
                               onChange={this.onQuestionChange}
                               aria-describedby="basic-addon1" />
                    </div>
                    <span style={{float:"left", margin:"10px 0px"}}>Options</span>
                    <div>
                    {(Object.keys(this.state.answers)).map((key) => {return (<div key ={key} 
                        className={`input-group`}>
                        <input accessKey ={key} type="text" className="form-control" value = {ans[key]} 
                            onChange={this.onInputChange} 
                            aria-label="Amount (to the nearest dollar)" />
                        <div className="input-group-append">
                            <span key ={key} onClick={this.incrementHandler} className={`input-group-text ${this.state.addNpublish?"disable":""}`}>+</span>
                            <span accessKey ={key} onClick={this.decrementHandler}className="input-group-text">-</span>
                        </div>
                    </div>  )
                    }
                    )
                    }
                    </div>
                    <div className={this.state.addNpublish?"":"hide"}style={{ float: "right" }}>
                        <button type='submit' 
                                onClick ={() => {
                                                this.setState({add:true})
                                            }} 
                                className="tiny ui button">Add Question</button>
                        <button type="submit" 
                                onClick ={() => {this.setState({publish:true})}} 
                                className="tiny ui button">Publish</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default QuestionsAndAnswers;
