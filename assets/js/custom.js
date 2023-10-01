const main = () => {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
        
    //INSERT EVENT DATE AND TIME HERE IN THIS FORMAT: 'June 1, 2023, 19:00:00'
    const EVENTDATE = new Date('July 27, 2023, 19:00:00')
   
    const countDown = new Date(EVENTDATE).getTime()
    const x = setInterval(() => {
  
          const now = new Date().getTime()
          const distance = countDown - now
  
          document.getElementById("days").innerText = Math.floor(distance / day)
          document.getElementById("hours").innerText =  Math.floor((distance % day) / (hour))
          document.getElementById("minutes").innerText =   Math.floor((distance % hour) / (minute))
          document.getElementById("seconds").innerText =    Math.floor((distance % minute) / second)
  
        //delay in milliseconds
        }, 0)
    }
  
  main();


$(document).ready(function(){


    $(".monekey_button button").on('click',function(){
        $(".monekey_button button").removeClass('active');
        $(this).addClass('active');
        var attr_id = $(this).attr('id'); 
        $('.monkey_form').hide();
        $('.'+attr_id).show();

        return false;

    }); 





});




const buttons = document.querySelectorAll(".accordion-title");

buttons.forEach((btn) => {
  let target = btn.parentElement.nextElementSibling;

  // init each button with properties
  btn.setAttribute("aria-expanded", "false");

  btn.parentElement.addEventListener("click", (e) => {
    let isExpanded = btn.getAttribute("aria-expanded") === "true" || false;

    btn.setAttribute("aria-expanded", !isExpanded);
    btn.parentElement.classList.toggle("opened");
    btn.previousElementSibling
      .querySelector("span:nth-of-type(2)")
      .classList.toggle("open-icon");
    target.classList.toggle("opened");
    target.hidden = isExpanded;
  });
});


$(document).ready(function(){
  $('.accordion-head.active').click();
});

$(document).on('click','.bars_menu',function(){
  $('.menu').slideToggle();
});