$(function(){
    setInterval(() => {
        let img_number;
        let class_check = $(".full").attr("class");
        if (class_check.indexOf("c1") >=0){
            img_number = 1;
        }
        else if(class_check.indexOf("c2") >=0){
            img_number = 2;
        }
        else if(class_check.indexOf("c3") >=0){
            img_number = 3;
        }
        img_number++;
        img_number == 4 ? img_number = 1 : img_number;
        img_url = "url('./Img/"+img_number+".jpg') no-repeat center/cover";
        $(".header").attr("id", img_number);
        $(".header").css("background", img_url);
        if (img_number - 1 == 0){
            $(".c"+(3)).toggleClass("full");
        }
        else{
            $(".c"+(img_number-1)).toggleClass("full");
        }
        $(".c"+img_number).toggleClass("full");
    }, 5000);

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