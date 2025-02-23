  /***** for pricing table (tabs | monthly & yearly) ******/
  $(document).ready(function() {
    $("#monthly").click(function(){
            $(this).addClass('active');
            $("#yearly").removeClass('active')

            $(".monthlyPriceList").removeClass('d-none');
            $(".monthlyPriceList").addClass('fadeIn');
            $(".yearlyPriceList").addClass('d-none');

            $(".indicator").css("left","2px");
    })

    $("#yearly").click(function(){
            $(this).addClass('active');
            $("#monthly").removeClass('active');

            $(".yearlyPriceList").removeClass('d-none');
            $(".yearlyPriceList").addClass('fadeIn');
            $(".monthlyPriceList").addClass('d-none');

            $(".indicator").css("left","163px");
    })
})
/***** for pricing table (tabs | monthly & yearly) ******/