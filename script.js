var table=document.createElement("table");
table.setAttribute("class","table");

var head=document.createElement("thead");
head.setAttribute("class","thead-dark");

var trh=document.createElement("tr");

var th1=document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHtml="FIRST";

var th2=document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHtml="MIDDLE";

var th3=document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHtml="LAST";

var body=document.createElement("tbody");

var trb=document.createElement("tr");

var tb1 = document.createElement("td");
tb1.innerHTML="Mark";

var tb2 = document.createElement("td");
tb2.innerHTML="Otto";

var tb3 = document.createElement("td");
tb3.innerHTML="@mdo";

trb.append(tb1,tb2,tb3);
body.append(trb);

trh.append(th1,th2,th3);
head.append(trh);

table.append(head,body);
document.body.append(table);









