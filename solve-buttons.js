// JavaScript source code



$(document).ready(function() {
    $(document).on('click', '.big-numbers', function() {
            if ($('#' + clickedId).parent(".cell").hasClass("original-cell-number")) {
                console.log("this is an original cell");
            } else {
            
            

            recordOfEvents.push(lastEvent);// pushing this to parent array because state is changing
            console.log(recordOfEvents);
            lastEvent = [];
            lastEvent.push(clickedId);
            var existingNumber = document.getElementById(clickedId).innerHTML;

            if (existingNumber.length > 0 == true) {
            document.getElementById(clickedId).innerHTML = "";
            $(".candidate").css("visibility", "visible");
            rebuildCandidates();
            }
            if ($(this).hasClass("solve-button-1")) {
            document.getElementById(clickedId).innerHTML = "1";
            aOfaActuals[clickedId] = 1;
            checkWhichHouse();   
            }
            if ($(this).hasClass("solve-button-2")) {
            document.getElementById(clickedId).innerHTML = "2";
            aOfaActuals[clickedId] = 2;
            checkWhichHouse();
            }
            if ($(this).hasClass("solve-button-3")) {
            document.getElementById(clickedId).innerHTML = "3";
             aOfaActuals[clickedId] = 3;
            checkWhichHouse();
            }
            
            if ($(this).hasClass("solve-button-4")) {
            document.getElementById(clickedId).innerHTML = "4";
             aOfaActuals[clickedId] = 4;         
             checkWhichHouse();
             console.log("checking for 4 log");
            }
            if ($(this).hasClass("solve-button-5")) {
            document.getElementById(clickedId).innerHTML = "5";
            aOfaActuals[clickedId] = 5;
            checkWhichHouse();
            }
            if ($(this).hasClass("solve-button-6")) {
            document.getElementById(clickedId).innerHTML = "6";
             aOfaActuals[clickedId] = 6;
             checkWhichHouse();
            }
            if ($(this).hasClass("solve-button-7")) {
            document.getElementById(clickedId).innerHTML = "7";
             aOfaActuals[clickedId] = 7;
             checkWhichHouse();
            }
            if ($(this).hasClass("solve-button-8")) {
            document.getElementById(clickedId).innerHTML = "8";
             aOfaActuals[clickedId] = 8;
             checkWhichHouse();
            }
            if ($(this).hasClass("solve-button-9")) {
            document.getElementById(clickedId).innerHTML = "9";
             aOfaActuals[clickedId] = 9;
             checkWhichHouse();
            }
            $("#" + clickedId).siblings(".candidate").css("visibility", "hidden");
            $("#" + clickedId).siblings(".scratch-candidate").css("visibility", "hidden");
            addingNewNumber();

            //start incorrect check

            var allCells = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];


            for (i=0;i<allCells.length;i++) {
                if (aOfaActuals[allCells[i]] !== aOfaSolved[allCells[i]]) {
                        console.log("incorrect notice fired");
                            $("#" + allCells[i]).addClass("incorrect");
                    } else {
                         $("#" + allCells[i]).removeClass("incorrect");
                    }   
            }

            //end incorrect check
     
    //start of state building
        var numberCheckForUndo = document.getElementById(clickedId).innerHTML;
        var tempValNumber;
        //lastEvent.push(Number(numberCheckForUndo));
        
        if ($(".hide-candidates").text() === "Show Candidates") {
            lastEvent.push("hidden");
        }
        if ($(".hide-candidates").text() === "Hide Candidates") {
            lastEvent.push("visible");
        }

        if (numberCheckForUndo.length < 1) {
            lastEvent.push(0);
            console.log("added 0 number");
            //console.log(lastEvent);
        }
        if (numberCheckForUndo.length > 0) {
            var tempValNumber = numberCheckForUndo;
            tempValNumber = Number(tempValNumber);
            lastEvent.push(tempValNumber);
            console.log("added non 0 number");
            //console.log(lastEvent);
        }
        //Good up to here
        //start of candidate opacity check
        var deTrues = $("#" + numberCheckForUndo).siblings(".candidate");
        var deQuads = $("#" + numberCheckForUndo).siblings(".scratch-candidate");
        
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
        })//end of state building

            }
      })
    
})


///
///
////

$(document).ready(function() {
    $(document).keydown(function(event) {
            if ($('#' + clickedId).parent(".cell").hasClass("original-cell-number")) {
                console.log("this is an original cell");
            } else {

             //start incorrect check

            for (i=0;i<allHouseNums.length;i++) {
                for (j=0;j<allHouseNums[i].length;j++) {
                    if (aOfaActuals[allHouseNums[i][j]] !== aOfaSolved[allHouseNums[i][j]]) {
                        console.log("incorrect notice fired");
                        
                            $("#" + allHouseNums[i][j]).addClass("incorrect");
                            $(".number").removeClass("incorrect");
                    } else {
                      $(".number").removeClass("incorrect");
                    }     
                }
            }

            //end incorrect check



            if (event.keyCode === 49 || event.keyCode === 50 || event.keyCode === 51 || event.keyCode === 52 || event.keyCode === 53 || event.keyCode === 54 || event.keyCode === 55 || event.keyCode === 56 || event.keyCode === 57) {
            recordOfEvents.push(lastEvent);// pushing this to parent array because state is changing
            console.log(recordOfEvents);
            lastEvent = [];
            var existingNumber = document.getElementById(clickedId).innerHTML;
            if (existingNumber.length > 0 == true) {
            document.getElementById(clickedId).innerHTML = "";
            $(".candidate").css("visibility", "visible");
            rebuildCandidates();
            }
            if (event.keyCode === 49) {
            document.getElementById(clickedId).innerHTML = "1";
            aOfaActuals[clickedId] = 1;
            checkWhichHouse();
            }
            if (event.keyCode === 50) {
            document.getElementById(clickedId).innerHTML = "2";
            aOfaActuals[clickedId] = 2;
            checkWhichHouse();
            }
            if (event.keyCode === 51) {
            document.getElementById(clickedId).innerHTML = "3";
            aOfaActuals[clickedId] = 3;
            checkWhichHouse();
            }
            if (event.keyCode === 52) {
            document.getElementById(clickedId).innerHTML = "4";
            aOfaActuals[clickedId] = 4;
            checkWhichHouse();
            }
            if (event.keyCode === 53) {
            document.getElementById(clickedId).innerHTML = "5";
            aOfaActuals[clickedId] = 5;
            checkWhichHouse();
            }
            if (event.keyCode === 54) {
            document.getElementById(clickedId).innerHTML = "6";
            aOfaActuals[clickedId] = 6;
            checkWhichHouse();
            }
            if (event.keyCode === 55) {
            document.getElementById(clickedId).innerHTML = "7";
            aOfaActuals[clickedId] = 7;
            checkWhichHouse();
            }
            if (event.keyCode === 56) {
            document.getElementById(clickedId).innerHTML = "8";
            aOfaActuals[clickedId] = 8;
            checkWhichHouse();
            }
            if (event.keyCode === 57) {
            document.getElementById(clickedId).innerHTML = "9";
            aOfaActuals[clickedId] = 9;
            checkWhichHouse();
            }
            $("#" + clickedId).siblings(".candidate").css("visibility", "hidden");
            $("#" + clickedId).siblings(".scratch-candidate").css("visibility", "hidden");
            addingNewNumber();

            var allCells = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];


            for (i=0;i<allCells.length;i++) {
                if (aOfaActuals[allCells[i]] !== aOfaSolved[allCells[i]]) {
                        console.log("incorrect notice fired");
                            $("#" + allCells[i]).addClass("incorrect");
                    } else {
                         $("#" + allCells[i]).removeClass("incorrect");
                    }   
            }
        }
    
    //start of state building
        var numberCheckForUndo = document.getElementById(clickedId).innerHTML;
        var tempValNumber;
        lastEvent.push(Number(numberCheckForUndo));
        
        if ($(".hide-candidates").text() === "Show Candidates") {
            lastEvent.push("hidden");
        }
        if ($(".hide-candidates").text() === "Hide Candidates") {
            lastEvent.push("visible");
        }

        if (numberCheckForUndo.length < 1) {
            lastEvent.push(0);
            console.log("added 0 number");
            //console.log(lastEvent);
        }
        if (numberCheckForUndo.length > 0) {
            var tempValNumber = numberCheckForUndo;
            tempValNumber = Number(tempValNumber);
            lastEvent.push(tempValNumber);
            console.log("added non 0 number");
            //console.log(lastEvent);
        }
        //Good up to here
        //start of candidate opacity check
        var deTrues = $("#" + numberCheckForUndo).siblings(".candidate");
        var deQuads = $("#" + numberCheckForUndo).siblings(".scratch-candidate");
        
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
        //end of state building
            }
    })//end of if statement for 1-9 check

    
})

//START OF NOTE BUTTONS

$(document).ready(function() {
    $(document).on('click', '.small-numbers', function() {
        console.log("small clicked");
            var removeHash = document.getElementById(clickedId);
            var existingNumber = document.getElementById(clickedId).innerHTML;
            
           if (existingNumber.length > 0) {
               console.log("already a number here");
           } else {
            
           recordOfEvents.push(lastEvent);// pushing this to parent array because state is changing
           console.log(recordOfEvents);
           lastEvent = [];
           lastEvent.push(clickedId);

            if ( $(this).hasClass("solve-button-1") && $("#" + clickedId).siblings(".scratch-subcell-0").css("opacity") != 0.9 && $(".notes").hasClass("notes-on")  && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-0").css("opacity","0.9");
            }
            else if ($(this).hasClass("solve-button-1") && $("#" + clickedId).siblings(".scratch-subcell-0").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
                $("#" + clickedId).siblings(".scratch-subcell-0").css("opacity","0.0");
            }
            
            else if ( $(this).hasClass("solve-button-2") && $("#" + clickedId).siblings(".scratch-subcell-1").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-1").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-2") && $("#" + clickedId).siblings(".scratch-subcell-1").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-1").css("opacity","0.0");
            }
            
            else if ( $(this).hasClass("solve-button-3") && $("#" + clickedId).siblings(".scratch-subcell-2").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-2").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-3") && $("#" + clickedId).siblings(".scratch-subcell-2").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-2").css("opacity","0.0");
            }
            
            else if ( $(this).hasClass("solve-button-4") && $("#" + clickedId).siblings(".scratch-subcell-3").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-3").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-4") && $("#" + clickedId).siblings(".scratch-subcell-3").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-3").css("opacity","0.0");
            }
            
            else if ( $(this).hasClass("solve-button-5") && $("#" + clickedId).siblings(".scratch-subcell-4").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-4").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-5") && $("#" + clickedId).siblings(".scratch-subcell-4").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-4").css("opacity","0.0");
            }
            
            else if ( $(this).hasClass("solve-button-6") && $("#" + clickedId).siblings(".scratch-subcell-5").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-5").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-6") && $("#" + clickedId).siblings(".scratch-subcell-5").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-5").css("opacity","0.0");
            }
            
            else if ( $(this).hasClass("solve-button-7") && $("#" + clickedId).siblings(".scratch-subcell-6").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-6").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-7") && $("#" + clickedId).siblings(".scratch-subcell-6").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-6").css("opacity","0.0");
            }
             
            else if ( $(this).hasClass("solve-button-8") && $("#" + clickedId).siblings(".scratch-subcell-7").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-7").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-8") && $("#" + clickedId).siblings(".scratch-subcell-7").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-7").css("opacity","0.0");
            }
              
            else if ( $(this).hasClass("solve-button-9") && $("#" + clickedId).siblings(".scratch-subcell-8").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-8").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-9") && $("#" + clickedId).siblings(".scratch-subcell-8").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Show Candidates") {
             $("#" + clickedId).siblings(".scratch-subcell-8").css("opacity","0.0");
            }
            
            
            //start of candidate

            else if ( $(this).hasClass("solve-button-1") && $("#" + clickedId).siblings(".candidate-0").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-0").css("opacity","0.9");
             console.log("this fired 1");
            }
            else if ($(this).hasClass("solve-button-1") && $("#" + clickedId).siblings(".candidate-0").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates")  {
                $("#" + clickedId).siblings(".candidate-0").css("opacity","0.0");
                console.log("this fired 2");
            }
             
            else if ( $(this).hasClass("solve-button-2") && $("#" + clickedId).siblings(".candidate-1").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-1").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-2") && $("#" + clickedId).siblings(".candidate-1").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates")  {
             $("#" + clickedId).siblings(".candidate-1").css("opacity","0.0");
            }
            
            else if ( $(this).hasClass("solve-button-3") && $("#" + clickedId).siblings(".candidate-2").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-2").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-3") && $("#" + clickedId).siblings(".candidate-2").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-2").css("opacity","0.0");
            }
            
            else if ( $(this).hasClass("solve-button-4") && $("#" + clickedId).siblings(".candidate-3").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-3").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-4") && $("#" + clickedId).siblings(".candidate-3").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-3").css("opacity","0.0");
            }
            
            else if ( $(this).hasClass("solve-button-5") && $("#" + clickedId).siblings(".candidate-4").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-4").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-5") && $("#" + clickedId).siblings(".candidate-4").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-4").css("opacity","0.0");
            }
            
            else if ( $(this).hasClass("solve-button-6") && $("#" + clickedId).siblings(".candidate-5").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-5").css("opacity","0.9");
            } 
            else if ( $(this).hasClass("solve-button-6") && $("#" + clickedId).siblings(".candidate-5").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-5").css("opacity","0.0");
            }
            
            else if ( $(this).hasClass("solve-button-7") && $("#" + clickedId).siblings(".candidate-6").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-6").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-7") && $("#" + clickedId).siblings(".candidate-6").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-6").css("opacity","0.0");
            }
             
            else if ( $(this).hasClass("solve-button-8") && $("#" + clickedId).siblings(".candidate-7").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-7").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-8") && $("#" + clickedId).siblings(".candidate-7").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-7").css("opacity","0.0");
            }
              
            else if ( $(this).hasClass("solve-button-9") && $("#" + clickedId).siblings(".candidate-8").css("opacity") != 0.9 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-8").css("opacity","0.9");
            }
            else if ( $(this).hasClass("solve-button-9") && $("#" + clickedId).siblings(".candidate-8").css("opacity") != 0.0 && $(".notes").hasClass("notes-on") && $(".hide-candidates").text() === "Hide Candidates") {
             $("#" + clickedId).siblings(".candidate-8").css("opacity","0.0");
            }




            //start of state building
           var numberCheckForUndo = document.getElementById(clickedId).innerHTML;
        var tempValNumber;
        //lastEvent.push(Number(numberCheckForUndo));
        
        if ($(".hide-candidates").text() === "Show Candidates") {
            lastEvent.push("hidden");
        }
        if ($(".hide-candidates").text() === "Hide Candidates") {
            lastEvent.push("visible");
        }

        if (numberCheckForUndo.length < 1) {
            lastEvent.push(0);
            console.log("added 0 number");
            //console.log(lastEvent);
        }
        if (numberCheckForUndo.length > 0) {
            var tempValNumber = numberCheckForUndo;
            tempValNumber = Number(tempValNumber);
            lastEvent.push(tempValNumber);
            console.log("added non 0 number");
            //console.log(lastEvent);
        }
        //Good up to here
        //start of candidate opacity check
        var deTrues = $("#" + clickedId).siblings(".candidate");
        var deQuads = $("#" + clickedId).siblings(".scratch-candidate");
        
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
        //end of state building
            



    }
      })
         }) 
