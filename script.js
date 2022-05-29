import {changeLanguage} from './functions.js';
$(document).ready(function(){
    $(".lang").click(function(){
        let first = $(".first").parent().html()
        $(".first").parent().html($(this).parent().html())
        console.log($(this).attr("id"))
        $(this).parent().html(first)
        document.cookie = "language="+$(this).attr("id");
        location.reload(true)
    })
    changeLanguage()
})