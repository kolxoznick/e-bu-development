$(document).ready(function () {

    $(".fourthDialog").hide();
    $(".sixDialog").hide();
    $(".seventhVar").hide();
    $(".faqDialog").hide();
        
    



    $("#leksikaGram").click(function () {
        $("#leksikaGram1").show();
        $("#tehnology1").hide();
        $("#practice1").hide();
    })
    $("#leksikaGram1").click(function () {
        $("#leksikaGram1").hide();
    })

    $("#tehnology").click(function () {
        $("#tehnology1").show();
        $("#leksikaGram1").hide();
        $("#practice1").hide();
    })
    $("#tehnology1").click(function () {
        $("#tehnology1").hide();
    })

    $("#practice").click(function () {
        $("#practice1").show();
        $("#leksikaGram1").hide();
        $("#tehnology1").hide();
    })
    $("#practice1").click(function () {
        $("#practice1").hide();
    })


    $("#thirdH").click(function () {
        $("#thirdDialog.thirdDialog").show();
    })   
    $("#thirdDialog").click(function () {
        $("#thirdDialog").hide();
    })

    
    $("#fourthMenu1").click(function () {
        $("#fourth-q1.fourthDialog").show();
    })
    $("#fourth-q1").click(function () {
        $("#fourth-q1.fourthDialog").hide();
    })

    $("#fourthMenu2").click(function () {
        $("#fourth-q2.fourthDialog").show();
    })
    $("#fourth-q2").click(function () {
        $("#fourth-q2.fourthDialog").hide();
    })

    $("#fourthMenu3").click(function () {
        $("#fourth-q3.fourthDialog").show();
    })
    $("#fourth-q3").click(function () {
        $("#fourth-q3.fourthDialog").hide();
    })

    $("#fourthMenu4").click(function () {
        $("#fourth-q4.fourthDialog").show();
    })
    $("#fourth-q4").click(function () {
        $("#fourth-q4.fourthDialog").hide();
    })

    $("#fourthMenu5").click(function () {
        $("#fourth-q5.fourthDialog").show();
    })
    $("#fourth-q5").click(function () {
        $("#fourth-q5.fourthDialog").hide();
    })

    $("#fourthMenu6").click(function () {
        $("#fourth-q6.fourthDialog").show();
    })
    $("#fourth-q6").click(function () {
        $("#fourth-q6.fourthDialog").hide();
    })

    $("#fourthMenu7").click(function () {
        $("#fourth-q7.fourthDialog").show();
    })
    $("#fourth-q7").click(function () {
        $("#fourth-q7.fourthDialog").hide();
    })

    
    $("#programMonth1").click(function () {
        $("#sixDialog1.sixDialog").show();
    })
    $("#sixDialog1").click(function () {
        $("#sixDialog1.sixDialog").hide();
    })

    $("#programMonth2").click(function () {
        $("#sixDialog2.sixDialog").show();
    })
    $("#sixDialog2").click(function () {
        $("#sixDialog2.sixDialog").hide();
    })

    $("#programMonth3").click(function () {
        $("#sixDialog3.sixDialog").show();
    })
    $("#sixDialog3").click(function () {
        $("#sixDialog3.sixDialog").hide();
    })


    $("#seventhMenu1").click(function () {
        $("#seventhDialog2.seventhVar").hide();
        $("#seventhDialog3.seventhVar").hide();
        $("#seventhDialog4.seventhVar").hide();
        $("#seventhDialog1.seventhVar").show();
    })
    $("seventhDialog1").click(function () {
        $("#seventhDialog1.seventhVar").hide();
    })
    
    $("#seventhMenu2").click(function () {
        $("#seventhDialog1.seventhVar").hide();
        $("#seventhDialog3.seventhVar").hide();
        $("#seventhDialog4.seventhVar").hide();
        $("#seventhDialog2.seventhVar").show();
    })
    $("#seventhDialog2").click(function () {
        $("#seventhDialog2.seventhVar").hide();
    })

    $("#seventhMenu3").click(function () {
        $("#seventhDialog1.seventhVar").hide();
        $("#seventhDialog2.seventhVar").hide();
        $("#seventhDialog4.seventhVar").hide();
        $("#seventhDialog3.seventhVar").show();
    })
    $("#seventhDialog3").click(function () {
        $("#seventhDialog3.seventhVar").hide();
    })

    $("#seventhMenu4").click(function () {
        $("#seventhDialog1.seventhVar").hide();
        $("#seventhDialog2.seventhVar").hide();
        $("#seventhDialog3.seventhVar").hide();
        $("#seventhDialog4.seventhVar").show();
    })
    $("#seventhDialog4").click(function () {
        $("#seventhDialog4.seventhVar").hide();
    })

    
    $("#q1").click(function () {
        $("#faq1.faqDialog").show();
    })
    $("#faq1").click(function () {
        $("#faq1.faqDialog").hide();
    })

    $("#q2").click(function () {
        $("#faq2.faqDialog").show();
    })
    $("#faq2").click(function () {
        $("#faq2.faqDialog").hide();
    })

    $("#q3").click(function () {
        $("#faq3.faqDialog").show();
    })
    $("#faq3").click(function () {
        $("#faq3.faqDialog").hide();
    })

    $("#q4").click(function () {
        $("#faq4.faqDialog").show();
    })
    $("#faq4").click(function () {
        $("#faq4.faqDialog").hide();
    })

    $("#q5").click(function () {
        $("#faq5.faqDialog").show();
    })
    $("#faq5").click(function () {
        $("#faq5.faqDialog").hide();
    })

    $("#q6").click(function () {
        $("#faq6.faqDialog").show();
    })
    $("#faq6").click(function () {
        $("#faq6.faqDialog").hide();
    })

    $("#q7").click(function () {
        $("#faq7.faqDialog").show();
    })
    $("#faq7").click(function () {
        $("#faq7.faqDialog").hide();
    })

    $("#q8").click(function () {
        $("#faq8.faqDialog").show();
    })
    $("#faq8").click(function () {
        $("#faq8.faqDialog").hide();
    })

    $("#q9").click(function () {
        $("#faq9.faqDialog").show();
    })
    $("#faq9").click(function () {
        $("#faq9.faqDialog").hide();
    })

    $("#q10").click(function () {
        $("#faq10.faqDialog").show();
    })
    $("#faq10").click(function () {
        $("#faq10.faqDialog").hide();
    })

    $("#q10").click(function () {
        $("#faq10.faqDialog").show();
    })
    $("#faq10").click(function () {
        $("#faq10.faqDialog").hide();
    })

    
    $('#button1.button1, #buttonVarBuy.buttonVarBuy').click( function(event){
        event.preventDefault();
        $('#myOverlay').fadeIn(297,	function(){
          $('#message') 
          .css('display', 'block')
          .animate({opacity: 1}, 198);
        });
      });
    
      $('#myModal__close, #myOverlay').click( function(){
        $('#message').animate({opacity: 0}, 198, function(){
          $(this).css('display', 'none');
          $('#myOverlay').fadeOut(297);
        });
    });

    $('#button2.button2').click( function(event){
        event.preventDefault();
        $('#myOverlay').fadeIn(297,	function(){
          $('#message2') 
          .css('display', 'block')
          .animate({opacity: 1}, 198);
        });
      });
    
      $('#myModal__close, #myOverlay').click( function(){
        $('#message2').animate({opacity: 0}, 198, function(){
          $(this).css('display', 'none');
          $('#myOverlay').fadeOut(297);
        });
    });


});