function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

export function changeLanguage() {
    let arr = ["arm", "rus", "eng"];
    for (let i = 0; i < arr.length; i++) {
        if (getCookie("language") == arr[i]){
            let first = $(".first").html().trim()
            let second = $("#"+arr[i]).parent().html().trim()
            console.log(first)
            $("#"+arr[i]).parent().html(first)
            $(".first").html(second)
            
        }
    }
}

