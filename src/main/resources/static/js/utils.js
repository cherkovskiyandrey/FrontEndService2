function clearContext(mainNode) {
    while(mainNode.firstChild) {
        mainNode.removeChild(mainNode.firstChild);
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
