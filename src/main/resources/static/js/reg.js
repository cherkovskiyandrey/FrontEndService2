window.addEventListener("load", function() {var o = new CountryLoader(); o.loadCountry();});
window.addEventListener("load", function() {var o = new LoginHandler(); o.init();});

function CountryLoader() {
    this.debugField = document.getElementById("debug");
    this.selectNode = document.getElementById("country");

    this.loadCountry = function() {
        ajaxLoader('GET', '/country/test', this.writeCountriesToForm.bind(this), this.writeError.bind(this));
    }

    this.writeCountriesToForm = function(countries) {
        clearContext(this.selectNode);
        var i;
        for(i = 0; i < countries.length; ++i) {
            var opt = document.createElement("option");
            opt.setAttribute("value", countries[i].name);
            var txt = document.createTextNode(countries[i].description);
            opt.appendChild(txt);
            this.selectNode.appendChild(opt);
        }
    }

    this.writeError = function(err) {
        alert("Не удалось загрузить страны: " + err);
    }

    this.loadCountry();
}


function LoginHandler() {
    this.offerLogins = [];

    this.checkLogin = function() {
        var login = document.getElementById("login").value;
        console.log("Current value: " + login);
        ajaxLoader('GET', '/users/check/login?login=' + login, this.checkLoginComplete.bind(this), function() {});
        console.log(document.getElementById("login").value);
    }

    this.checkLoginComplete = function(variants) {
        if(variants.length == 0) {
            document.getElementById("login").style.background = "white";
            document.getElementById("login_warning").style.display = 'none';
            this.offerLogins = [];
        } else {
            this.offerLogins = [];
            console.log("offerLogins: " + this.offerLogins);
            this.offerLogins = variants;
            console.log("variants: " + variants);
            document.getElementById("login").style.background = "#ffcccc";
        }
    }

    this.resumeLogin = function() {
        if(this.offerLogins.length == 0) {
            return;
        }
        var offerLoginsList = document.getElementById("login_offers");
        clearContext(offerLoginsList);
        for(i = 0; i < this.offerLogins.length; ++i) {
            var opt = document.createElement("li");
            var txt = document.createTextNode(this.offerLogins[i]);
            opt.appendChild(txt);
            offerLoginsList.appendChild(opt)
        }
        document.getElementById("login_warning").style.display = 'block';
    }

    this.init = function() {
        document.getElementById("login").oninput = this.checkLogin.bind(this);
        document.getElementById("login").onblur = this.resumeLogin.bind(this);
        document.getElementById("login").onpaste = this.resumeLogin.bind(this);
        document.getElementById("login").onclick = this.resumeLogin.bind(this);
    }
}



// Module example of LoginHandler
//(function() {
//    var offerLogins = null;
//    function checkLogin() {
//        var login = document.getElementById("login").value;
//        console.log("Current value: " + login);
//        ajaxLoader('GET', '/users/check/login?login=' + login, checkLoginComplete, function() {});
//        console.log(document.getElementById("login").value);
//    }
//
//    function checkLoginComplete(variants) {
//        if(variants.length == 0) {
//            document.getElementById("login").style.background = "white";
//            document.getElementById("login_warning").style.display = 'none';
//            offerLogins = null;
//        } else {
//            offerLogins = null;
//            console.log("offerLogins: " + offerLogins);
//            offerLogins = variants;
//            console.log("variants: " + variants);
//            document.getElementById("login").style.background = "#ffcccc";
//        }
//    }
//
//
//    function resumeLogin() {
//        //login_offers
//        var offerLoginsList = document.getElementById("login_offers");
//        clearContext(offerLoginsList);
//        for(i = 0; i < offerLogins.length; ++i) {
//            var opt = document.createElement("li");
//            var txt = document.createTextNode(offerLogins[i]);
//            opt.appendChild(txt);
//            offerLoginsList.appendChild(opt)
//         }
//        if(offerLogins.length != 0) {
//            document.getElementById("login_warning").style.display = 'block';
//        }
//    }
//
//    function init() {
//        document.getElementById("login").oninput = checkLogin;
//        document.getElementById("login").onblur = resumeLogin;
//    }
//
//    window.addEventListener("load", init);
//}());



