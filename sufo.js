
for(y=1; y<=24; y++){
    var questionNo = window.frames[0].frames[1].document.getElementsByName('txtanswer'+y);
        questionNo[3].checked=true
}

window.frames[0].frames[1].document.getElementsByName('b2')[0].click();