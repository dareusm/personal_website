/*$(document).ready(function(){
    //Take your div into one js variable
    var div_ids = ["#introduction", "#work-experience", "#skills", "#hobbies"];
    for(let divs in div_ids){
        //Take the current position, (vertical position from top) of your div in the variable
        var pos = divs.position();
        //Now when scroll event trigger do the following
        $(window).scroll(function() {
            var windowpos = $(window).scrollTop();
            //Now if you scroll more than 100 pixels verticall change to AfterScroll
            //I am taking 100px scroll, you can take whatever you need 
            if(windowpos >= (pos.top - 100)){
                divs.addClass("AfterScroll");
            }
        })
    }
})*/
