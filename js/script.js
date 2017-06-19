 window.onload = function() {
    /*
    $(document).ready(function(){
        $('.results_block .result .arrow').click(function(){
            console.log('arrow clicked');
            $(this).parents('.result').find('.result_content').slideToggle();
            $(this).toggleClass('rotate');
        });
        //copy code 
        function copyToClipboard(element) {
  var p = $(this).parents('.result').find('p');
  $("body").append(p);
  p.val($(element).text()).select();
  document.execCommand("copy");
  p.remove();
}

    });
*/
  /*  document.addEventListener("DOMContentLoaded", function(){

        var result = document.querySelectorAll(".results_block .result .arrow");
        for(var i=0;i<result.length;i++){
          result[i].addEventListener('click',slideToggle,false);
        }
    }*/
        // Slide toggle function
function select(currObj){
var parentofSelected = currObj.parentNode; // gives the parent DIV

var children = parentofSelected.childNodes;
var target_element = parentofSelected.querySelector(".result_content");
return target_element;
 } // end function         

/*function slideToggle() {
      
var open = this.getAttribute('data-id');
console.log(open);
//var heightChecked = false;
var initHeight = 90;
var intval = null;
    window.clearInterval(intval);
    var mdiv = select(this);
    console.log(mdiv);
    /*if(!heightChecked) {
        initHeight = mdiv.offsetHeight;
        heightChecked = true;
    }*/
   /*if(open) {
        var h = 0;
        open = false;
        intval = setInterval(function(){
            //h--;
            mdiv.style.height = h + 'px';
            if(h <= 0)
                window.clearInterval(intval);
            }, 1
        );
    }
    else {
        var h = initHeight;
        open = true;
        intval = setInterval(function(){
            //h++;
            mdiv.style.height = h + 'px';
            if(h >= initHeight)
                window.clearInterval(intval);
            }, 1
        );
    }
}

    });*/


/*document.addEventListener("DOMContentLoaded", function(){

        var result = document.querySelectorAll(".results_block .result .arrow");
        for(var i=0;i<result.length;i++){
          result[i].addEventListener("click", function(){
    slideToggle(this);
});
        }
        console.log('event listener added');
    });*/
document.getElementById("slide").addEventListener("click", function(){
    slideToggle(this);
});
//select sibling (result content)
function select(currObj){
var parentofSelected = currObj.parentNode; // gives the parent DIV
var children = parentofSelected.childNodes;
var target_element = parentofSelected.querySelector(".result_content");
return target_element;
} 


    var minheight = 0;
var maxheight = 100;
var time = 1000;
var timer = null;
var toggled = false;

function slideToggle(arrow) {
    //console.log(select(this));
    //arrow.style.display = 'none';
    var controler = arrow;
    var slider = select(arrow);
    //slider.style.height = minheight + 'px'; //not so imp,just for my example
    controler.onclick = function() {  
        clearInterval(timer);
        var instanceheight = parseInt(slider.style.height);  // Current height
        var init = (new Date()).getTime(); //start time
        var height = (toggled = !toggled) ? maxheight: minheight; //if toggled

        var disp = height - parseInt(slider.style.height);
        timer = setInterval(function() {
            var instance = (new Date()).getTime() - init; //animating time
            if(instance <= time ) { //0 -> time seconds
                var pos = instanceheight + Math.floor(disp * instance / time);
                slider.style.height =  pos + 'px';
            }else {
                slider.style.height = height + 'px'; //safety side ^^
                clearInterval(timer);
            }
        },1);
    };
};
  };
