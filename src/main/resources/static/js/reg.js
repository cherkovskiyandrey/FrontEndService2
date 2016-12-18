window.addEventListener("load", loadCountry);

function writeCountriesToForm(countries) {
    //var out = "";
    var selectNode = document.getElementById("country");
    clearContext(selectNode);
    var i;
    for(i = 0; i < countries.length; ++i) {
         //out += "<option value=\"" + countries[i].name + "\">" + countries[i].name + "</option>";
        var opt = document.createElement("option");
        opt.setAttribute("value", countries[i].name);
        var txt = document.createTextNode(countries[i].description);
        opt.appendChild(txt);
        selectNode.appendChild(opt);
    }
    //document.getElementById("country").innerHTML = out;
}
function clearContext(mainNode) {
    while(mainNode.firstChild) {
        mainNode.removeChild(mainNode.firstChild);
    }
}

function writeError(err) {
    document.getElementById("debug").innerHTML = "Не удалось загрузить страны: " + err;
}
function loadCountry() {
    ajaxLoader('GET', '/country/test', this.writeCountriesToForm, this.writeError);
}

var offerLogins = [];
function checkLogin() {
    var login = document.getElementById("login").value;
    ajaxLoader('GET', '/users/check/login?login=' + login, checkLoginComplete, function() {});
    console.log(document.getElementById("login").value);
}

function checkLoginComplete(variants) {
    if(variants.length == 0) {
        document.getElementById("login").style.background = "white";
        document.getElementById("login_warning").style.display = 'none';
    } else {
        offerLogins = null;
        console.log("offerLogins: " + offerLogins);
        offerLogins = variants;
        console.log("variants: " + variants);
        document.getElementById("login").style.background = "#ffcccc";
    }
}


function resumeLogin() {
    if(offerLogins.length != 0) {
        document.getElementById("login_warning").style.display = 'block';
    }
    //login_offers
    var offerLoginsList = document.getElementById("login_offers");
    clearContext(offerLoginsList);
    for(i = 0; i < offerLogins.length; ++i) {
        var opt = document.createElement("li");
        var txt = document.createTextNode(offerLogins[i]);
        opt.appendChild(txt);
        offerLoginsList.appendChild(opt)
     }
}


function ajaxLoader(method, url, onSuccess, onFail) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        if(this.status == 200) {
            onSuccess(JSON.parse(this.responseText));
        } else {
            onFail(this.status);
        }
    }
  };
  xhttp.open(method, url, true);
  xhttp.send();
}



