$(function(){

    $(".left_arrow").click(function(){
        img_number = $(".header").attr("id");
        $(".c"+img_number).toggleClass("full");
        img_number--;
        img_number==0 ? img_number=3 : img_number;
        for(let i = 1; i <= 3; i++)
        {
            if(i==img_number){
                img_url = "url('./Img/"+i+".jpg') no-repeat center/cover";
                $(".header").attr("id", img_number);
                $(".header").css("background", img_url);
                $(".c"+img_number).toggleClass("full");
            }
        }
    })

    $(".right_arrow").click(function(){
        img_number = $(".header").attr("id");
        $(".c"+img_number).toggleClass("full");
        img_number++;
        img_number==4 ? img_number=1 : img_number;
        for(let i = 1; i <= 3; i++) {
            if(i==img_number){
                img_url = "url('./Img/"+i+".jpg') no-repeat center/cover";
                $(".header").css("background", img_url);
                $(".header").attr("id", img_number);
                $(".c"+img_number).toggleClass("full");
            }
        }
    })

    $(".circle").click(function(){
        if(!$(this).hasClass("full")){
            let b = $(this)
            $(".circle").removeClass("full");
            $(this).addClass("full");
            for(let i=1; i<4; i++){
                if($(this).hasClass("c"+i)){
                    img_url = "url('./Img/"+i+".jpg') no-repeat center/cover";
                    $(".header").css("background", img_url);
                    $(".header").attr("id", i);

                }
            }
        }
    })
   

})