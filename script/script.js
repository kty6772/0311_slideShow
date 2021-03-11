$(function () {

    setInterval(sample , 3000);
     sample();

    function sample() {

        $("#innerFrame").animate({
                "marginLeft": "-200px"
            },
            1000,
            "swing",
            function () {
                $("span:first-child").insertAfter("span:last-child");

                $("#innerFrame").css({
                    "marginLeft": "0"});
            }
        );


    } /*커스텀함수 = 사용자 정의함수, 호출하기전엔 실행 안됨*/




});
