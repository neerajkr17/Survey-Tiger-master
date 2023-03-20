import React from 'react';

class TakeSurvey extends React.Component{

    confirmed = (e) => {
        e.preventDefault()
        if(this.props.publishConfirmed){
            this.props.publishConfirmed()
        }else{
            this.props.changeSurvey(false);
        }
        
    }

    

    render(){
       const questions = this.props.questions
       console.log(questions)
        return (<div>
            {(questions.length>0)?<div >
                     <form>

                    {  
                        questions.map((ques, index) => {
                            return ( 
                               <div style={{float:"left", clear:"left"}}>
                                   {   <>
                                       <p key={index}>{`${index+1} : ${ques.question['question']}`}</p>
                                       {Object.keys(ques.question['answers']).map((key)=>{
                                            return (<div key={key} style={{float:"left", clear:"left", margin:"0px 0px 5px 0px"}} className="form-check">
                                                        {ques.questionType==="Multi-select"?<label key={key +1} className="form-check-label" htmlFor="check1">
                                                        <input type="checkbox" className="form-check-input" id="check1" name="option1" value="something" />
                                                        {ques.question['answers'][key]}
                                                        </label>:<label key={key +1} className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="optradio" />
                                                        {ques.question['answers'][key]}
                                                        </label>
                                                        }
                                                    </div>)
                                       }
                                       )}
                                       </>
                                   }
                                   
                               </div>
                               
                            )
                        })
                    } <button style={{float:"right", clear:"left"}} onClick={this.confirmed} className="tiny ui button">Confirm</button>
                    </form>
                </div>:<div>"Survey not available. Please create survey first."
                            <button style={{float:"right", clear:"left"}} onClick={this.confirmed} className="tiny ui button">Go Back</button>
                    </div>}</div>
                )
    }

}

export default TakeSurvey;