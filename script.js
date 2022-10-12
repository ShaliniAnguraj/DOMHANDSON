var label=createlabels("label","for","firstname","FIRSTNAME");
var br1=createlinebreak("br");
var input=createinput("input","type","firstname","id","firstname");
var br2=createlinebreak("br");

var label2=createlabels("label","for","middlename","MIDDLENAME");
var br3=createlinebreak("br");
var passlabel2=createinput("input","type","middlename","id","middlename");
var br4=createlinebreak("br");

var label3=createlabels("label","for","lastname","LASTNAME");
var br5=createlinebreak("br");
var passlabel3=createinput("input","type","lastname","id","lastname");
var br6=createlinebreak("br");

var label4=createlabels("label","for","phonenumber","PHONENUMBER");
var br7=createlinebreak("br");
var passlabel4=createinput("input","type","phonenumber","id","phonenumber");
var br8=createlinebreak("br");



document.body.append(label,br1,input,br2,label2,br3,passlabel2,br4,label3,br5,passlabel3,br6,label4,br7,passlabel4);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}