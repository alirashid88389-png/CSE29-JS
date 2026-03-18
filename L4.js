function calculateResult(){
    let n=document.getElementById("subject")
    CSSMathValue;
    let i;

    for(i=0;i<=n;i++){
        let x=perselent(prompt("Enter the marks the subject"+(i+1)));
        total +=x;
    }

    let average=total/n;
    let grade;
    if(average>=90){
        grade ='A+';}
    else if(average>=75){
        grade ="A";
    }
    else if(average>=60){
        grade ="B";
    }
    else if(average>=60){
        grade ="C";
    }
    else{ 
        grade="Fail";
    }
    
    let result = document.getElementById
    ("result").innerhtml="total marks"+total+"<br/>"+"average marks"+average+"<br/>"
}