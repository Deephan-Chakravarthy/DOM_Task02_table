function create_tr(){
    var tr = document.createElement("tr");
    return tr; 
}
function create_th(tagname,attrname,attrvalue,content){
var ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}

function create_td(tagname,content){
var ele = document.createElement(tagname);
ele.innerHTML = content;
return ele;
}


var table= document.createElement("table");
table.className = "table"

var thead = document.createElement("thead")
thead.className = "thead-dark"

var thead_tr = create_tr();

var th1 = create_th("th","scope","col","#");
var th2 = create_th("th","scope","col","first");
var th3  = create_th("th","scope","col","last");
var th4 = create_th("th","scope","col","handle");

thead_tr.append(th1,th2,th3,th4)
thead.append(thead_tr)

var tbody = document.createElement("tbody");
var body_tr1 = create_tr();
var body_th1 = create_th("th","scope","row","1");
var td11 = create_td("td","mark")
var td12 = create_td("td","otto")
var td13 = create_td("td","@mdo")

var body_tr2 = create_tr();
var body_th2 = create_th("th","scope","row","2");
var td21 = create_td("td","Jacob")
var td22 = create_td("td","Thornton")
var td23 = create_td("td","@fat")

var body_tr3 = create_tr();
var body_th3 = create_th("th","scope","row","3");
var td31 = create_td("td","Larry")
var td32 = create_td("td","the Bird")
var td33 = create_td("td","@twitter")


body_tr1.append(body_th1,td11,td12,td13);
body_tr2.append(body_th2,td21,td22,td23);
body_tr3.append(body_th3,td31,td32,td33);
tbody.append(body_tr1,body_tr2,body_tr3);


table.append(thead,tbody)
document.body.append(table)

