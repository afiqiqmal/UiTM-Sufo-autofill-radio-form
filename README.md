# UiTM-Sufo-autofill-radio-form

SUFO FORM ONLY!!

Simple javascript

Budak UiTM yang malas nak tekan satu2 form SUFO

Cara2<br>
1. Right Click -> Inspect Element<br>
2. Tekan Console<br>
3. Paste Code<br>


```javascript


for(y=1; y<=24; y++){
    var questionNo = window.frames[0].frames[1].document.getElementsByName('txtanswer'+y);
        questionNo[3].checked=true
}

window.frames[0].frames[1].document.getElementsByName('b2')[0].click();

```

<br>
Or just bookmark in your browser (Ctrl + D and replace the URL part to below code)

```javascript

javascript(function(){
	for(y=1; y<=24; y++){
    var questionNo = window.frames[0].frames[1].document.getElementsByName('txtanswer'+y);
        questionNo[3].checked=true
    }
    window.frames[0].frames[1].document.getElementsByName('b2')[0].click();
})();

```
