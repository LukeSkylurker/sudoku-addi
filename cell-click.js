// JavaScript source code
$(document).ready(function() {
    $(document).on('click', '.cell', function() {
        $(".cell").removeClass("click-state");
        $(".cell").removeClass("utility-state");
        $(this).addClass("utility-state");
        clickedId = $(this).children(".number").attr("id");
        console.log(clickedId);
        //check value of cell (make first and put value)
        //for each candidate and scratch candidate check if visible (maybe add utility class to all)
        //append 1 (visible) or 0 (not visible) for all 18
        //in subsequent clicks (after this function initializes) if change occurs put current state cell value into array and resave to currentState of cell
        lastEvent = [];
        lastEvent.push(clickedId);
        
        if ($(".hide-candidates").text() === "Show Candidates") {
            lastEvent.push("hidden");
        }
        else if ($(".hide-candidates").text() === "Hide Candidates") {
            lastEvent.push("visible");
        }

        if ($(this).children(".number").text().length < 1) {
            lastEvent.push(0);
            console.log("added 0 number");
            //console.log(lastEvent);
        }
        else if ($(this).children(".number").text().length > 0) {
            var tempValNumber = $(this).children(".number").text();
            tempValNumber = Number(tempValNumber);
            lastEvent.push(tempValNumber);
            console.log("added non 0 number");
            //console.log(lastEvent);
        }
        //start of candidate opacity check
        var deTrues = $(this).children(".candidate");
        var deQuads = $(this).children(".scratch-candidate");
        
        deTrues.each( function( i ) { 
        
        if ($(this).css("opacity") == 0.9) {
            lastEvent.push(1);
        }
        else if ($(this).css("opacity") !== 0.9) {
            lastEvent.push(0);
        }
        })

        deQuads.each( function( j ) { 
        
        if ($(this).css("opacity") == 0.9) {
            lastEvent.push(1);
        }
        else if ($(this).css("opacity") !== 0.9) {
            lastEvent.push(0);
        }
        })

        //end of candidate opacity check

        if($(this).hasClass("rowone")) {
            $(".rowone").addClass("click-state");
        }
        if($(this).hasClass("rowtwo")) {
            $(".rowtwo").addClass("click-state");
        }
        if($(this).hasClass("rowthree")) {
            $(".rowthree").addClass("click-state");
        }
        if($(this).hasClass("rowfour")) {
            $(".rowfour").addClass("click-state");
        }
        if($(this).hasClass("rowfive")) {
            $(".rowfive").addClass("click-state");
        }
        if($(this).hasClass("rowsix")) {
            $(".rowsix").addClass("click-state");
        }
        if($(this).hasClass("rowseven")) {
            $(".rowseven").addClass("click-state");
        }
        if($(this).hasClass("roweight")) {
            $(".roweight").addClass("click-state");
        }
        if($(this).hasClass("rownine")) {
            $(".rownine").addClass("click-state");
        }


        if($(this).hasClass("columnone")) {
            $(".columnone").addClass("click-state");
        }
        if($(this).hasClass("columntwo")) {
            $(".columntwo").addClass("click-state");
        }
        if($(this).hasClass("columnthree")) {
            $(".columnthree").addClass("click-state");
        }
        if($(this).hasClass("columnfour")) {
            $(".columnfour").addClass("click-state");
        }
        if($(this).hasClass("columnfive")) {
            $(".columnfive").addClass("click-state");
        }
        if($(this).hasClass("columnsix")) {
            $(".columnsix").addClass("click-state");
        }
        if($(this).hasClass("columnseven")) {
            $(".columnseven").addClass("click-state");
        }
        if($(this).hasClass("columneight")) {
            $(".columneight").addClass("click-state");
        }
        if($(this).hasClass("columnnine")) {
            $(".columnnine").addClass("click-state");
        }



        if($(this).hasClass("boxone")) {
            $(".boxone").addClass("click-state");
        }
        if($(this).hasClass("boxtwo")) {
            $(".boxtwo").addClass("click-state");
        }
        if($(this).hasClass("boxthree")) {
            $(".boxthree").addClass("click-state");
        }
        if($(this).hasClass("boxfour")) {
            $(".boxfour").addClass("click-state");
        }
        if($(this).hasClass("boxfive")) {
            $(".boxfive").addClass("click-state");
        }
        if($(this).hasClass("boxsix")) {
            $(".boxsix").addClass("click-state");
        }
        if($(this).hasClass("boxseven")) {
            $(".boxseven").addClass("click-state");
        }
        if($(this).hasClass("boxeight")) {
            $(".boxeight").addClass("click-state");
        }
        if($(this).hasClass("boxnine")) {
            $(".boxnine").addClass("click-state");
        }
        if (highlightMode) {
            $(this).addClass("highlight-active")
            //console.log("yes it is");
        }
       
        findNumberForHighlight = $(this).children(".number").text();
        //console.log(findNumberForHighlight);
        
        $( ".cell " ).each( function( i ) {

        if ($(this).hasClass("highlight-og")) {
            $(this).removeClass("highlight-og");
        }

        if ($(this).children(".number").text() === findNumberForHighlight && $(this).hasClass("number-highlight-all") === false && findNumberForHighlight.length > 0) {
            $(this).addClass("number-highlight-all");
        }
        //if ($(this).children(".number").text() === findNumberForHighlight && $(this).hasClass("number-highlight-all") === true) {
        //  console.log("highlight already present");
        //    } 
        if ($(this).children(".number").text() !== findNumberForHighlight && $(this).hasClass("number-highlight-all") === true) {
            $(this).removeClass("number-highlight-all");
        }
        if ($(this).hasClass("click-state") && $(this).hasClass("original-cell-number")) {
            $(this).addClass("highlight-og");
        }
        if ($(this).hasClass("utility-state") && $(this).hasClass("original-cell-number")) {
           $(this).removeClass("highlight-og");
        }
        //else {
           // console.log("not sure what went wrong");
       // }
        })
    }
  );
});