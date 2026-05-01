// JavaScript source code
function checkAllCorrect() {

        for (i=0;i<aOfaActuals.length;i++) {
            if (aOfaActuals[i] !== aOfaSolved[i] && aOfaActuals[i] !== 0) {
                $("#" + i).addClass("incorrect");
            }
            else {
             console.log("all good here");
             $("#" + i).removeClass("incorrect");
             $("#" + i).addClass("check-correct");
            }
        }
        console.log(aOfaActuals);
        console.log(aOfaSolved);
        setTimeout(function() {
    $(".number").removeClass("check-correct");
    //$(".number").removeClass("incorrect");
}, 2000);
}

                        function checkRow0Correct() {
                            console.log("tried to run");
                            var moose = 0;
                            var rowCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    rowCheck++;
                                    }
                                    console.log(rowCheck);
                                }
                                    if (rowCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                        //$(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && rowCheck == 0) {
                                $(".rowone .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkRow1Correct() {
                            console.log("tried to run");
                            var moose = 1;
                            var rowCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    rowCheck++;
                                    }
                                    console.log(rowCheck);
                                }
                                    if (rowCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                        //$(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && rowCheck == 0) {
                                $(".rowtwo .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkRow2Correct() {
                            console.log("tried to run");
                            var moose = 2;
                            var rowCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    rowCheck++;
                                    }
                                    console.log(rowCheck);
                                }
                                    if (rowCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                        //$(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && rowCheck == 0) {
                                $(".rowthree .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }
                        
                        function checkRow3Correct() {
                            console.log("tried to run");
                            var moose = 3;
                            var rowCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    rowCheck++;
                                    }
                                    console.log(rowCheck);
                                }
                                    if (rowCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                        //$(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && rowCheck == 0) {
                                $(".rowfour .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkRow4Correct() {
                            console.log("tried to run");
                            var moose = 4;
                            var rowCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    rowCheck++;
                                    }
                                    console.log(rowCheck);
                                }
                                    if (rowCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                        //$(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && rowCheck == 0) {
                                $(".rowfive .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkRow5Correct() {
                            console.log("tried to run");
                            var moose = 5;
                            var rowCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    rowCheck++;
                                    }
                                    console.log(rowCheck);
                                }
                                    if (rowCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                        //$(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && rowCheck == 0) {
                                $(".rowsix .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkRow6Correct() {
                            console.log("tried to run");
                            var moose = 6;
                            var rowCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    rowCheck++;
                                    }
                                    console.log(rowCheck);
                                }
                                    if (rowCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && rowCheck == 0) {
                                $(".rowseven .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkRow7Correct() {
                            console.log("tried to run");
                            var moose = 7;
                            var rowCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    rowCheck++;
                                    }
                                    console.log(rowCheck);
                                }
                                    if (rowCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && rowCheck == 0) {
                                $(".roweight .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkRow8Correct() {
                            console.log("tried to run");
                            var moose = 8;
                            var rowCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    rowCheck++;
                                    }
                                    console.log(rowCheck);
                                }
                                    if (rowCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && rowCheck == 0) {
                                $(".rownine .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }
                        
                        //start columns
                        //start columns
                        //start columns

                        function checkCol0Correct() {
                            console.log("tried to run");
                            var moose = 9;
                            var colCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    colCheck++;
                                    }
                                    console.log(colCheck);
                                }
                                    if (colCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && colCheck == 0) {
                                $(".columnone .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkCol1Correct() {
                            console.log("tried to run");
                            var moose = 10;
                            var colCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    colCheck++;
                                    }
                                    console.log(colCheck);
                                }
                                    if (colCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0  && colCheck == 0) {
                                $(".columntwo .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkCol2Correct() {
                            console.log("tried to run");
                            var moose = 11;
                            var colCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    colCheck++;
                                    }
                                    console.log(colCheck);
                                }
                                    if (colCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                      //  $(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && colCheck == 0) {
                                $(".columnthree .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }
                        
                        function checkCol3Correct() {
                            console.log("tried to run");
                            var moose = 12;
                            var colCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    colCheck++;
                                    }
                                    console.log(colCheck);
                                }
                                    if (colCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && colCheck == 0) {
                                $(".columnfour .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkCol4Correct() {
                            console.log("tried to run");
                            var moose = 13;
                            var colCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    colCheck++;
                                    }
                                    console.log(colCheck);
                                }
                                    if (colCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && colCheck == 0) {
                                $(".columnfive .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkCol5Correct() {
                            console.log("tried to run");
                            var moose = 14;
                            var colCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    colCheck++;
                                    }
                                    console.log(colCheck);
                                }
                                    if (colCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && colCheck == 0) {
                                $(".columnsix .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkCol6Correct() {
                            console.log("tried to run");
                            var moose = 15;
                            var colCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    colCheck++;
                                    }
                                    console.log(colCheck);
                                }
                                    if (colCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && colCheck == 0) {
                                $(".columnseven .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkCol7Correct() {
                            console.log("tried to run");
                            var moose = 16;
                            var colCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    colCheck++;
                                    }
                                    console.log(colCheck);
                                }
                                    if (colCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 2000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && colCheck == 0) {
                                $(".columneight .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }

                        function checkCol8Correct() {
                            console.log("tried to run");
                            var moose = 17;
                            var colCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    colCheck++;
                                    }
                                    console.log(colCheck);
                                }
                                    if (colCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                      //  $(".number").removeClass("incorrect");
                                                        }, 1000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && colCheck == 0) {
                                $(".columnnine .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 1000);
                                    console.log("animation should show");
                            }
                        }
                        //start squares
                        //start squares
                        //start squares

                        function checkSquare0Correct() {
                            console.log("tried to run");
                            var moose = 18;
                            var squareCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    squareCheck++;
                                    }
                                    console.log(squareCheck);
                                }
                                    if (squareCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 2000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && squareCheck == 0) {
                                $(".boxone .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 2000);
                                    console.log("animation should show");
                            }
                        }

                        function checkSquare1Correct() {
                            console.log("tried to run");
                            var moose = 19;
                            var squareCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    squareCheck++;
                                    }
                                    console.log(squareCheck);
                                }
                                    if (squareCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                       // $(".number").removeClass("incorrect");
                                                        }, 2000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0  && squareCheck == 0) {
                                $(".boxtwo .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 2000);
                                    console.log("animation should show");
                            }
                        }

                        function checkSquare2Correct() {
                            console.log("tried to run");
                            var moose = 20;
                            var squareCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    squareCheck++;
                                    }
                                    console.log(squareCheck);
                                }
                                    if (squareCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                      //  $(".number").removeClass("incorrect");
                                                        }, 2000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && squareCheck == 0) {
                                $(".boxthree .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 2000);
                                    console.log("animation should show");
                            }
                        }
                        
                        function checkSquare3Correct() {
                            console.log("tried to run");
                            var moose = 21;
                            var squareCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    squareCheck++;
                                    }
                                    console.log(squareCheck);
                                }
                                    if (squareCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                      //  $(".number").removeClass("incorrect");
                                                        }, 2000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && squareCheck == 0) {
                                $(".boxfour .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 2000);
                                    console.log("animation should show");
                            }
                        }

                        function checkSquare4Correct() {
                            console.log("tried to run");
                            var moose = 22;
                            var squareCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    squareCheck++;
                                    }
                                    console.log(squareCheck);
                                }
                                    if (squareCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                      //  $(".number").removeClass("incorrect");
                                                        }, 2000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && squareCheck == 0) {
                                $(".boxfive .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 2000);
                                    console.log("animation should show");
                            }
                        }

                        function checkSquare5Correct() {
                            console.log("tried to run");
                            var moose = 23;
                            var squareCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    squareCheck++;
                                    }
                                    console.log(squareCheck);
                                }
                                    if (squareCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                      //  $(".number").removeClass("incorrect");
                                                        }, 2000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && squareCheck == 0) {
                                $(".boxsix .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 2000);
                                    console.log("animation should show");
                            }
                        }

                        function checkSquare6Correct() {
                            console.log("tried to run");
                            var moose = 24;
                            var squareCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    squareCheck++;
                                    }
                                    console.log(squareCheck);
                                }
                                    if (squareCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                     //   $(".number").removeClass("incorrect");
                                                        }, 2000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && squareCheck == 0) {
                                $(".boxseven .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 2000);
                                    console.log("animation should show");
                            }
                        }

                        function checkSquare7Correct() {
                            console.log("tried to run");
                            var moose = 25;
                            var squareCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    squareCheck++;
                                    }
                                    console.log(squareCheck);
                                }
                                    if (squareCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                      //  $(".number").removeClass("incorrect");
                                                        }, 2000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && squareCheck == 0) {
                                $(".boxeight .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 2000);
                                    console.log("animation should show");
                            }
                        }

                        function checkSquare8Correct() {
                            console.log("tried to run");
                            var moose = 26;
                            var squareCheck = 0;
                            var correctCheck = 0;
                                for (i=0;i<allHouseNums[moose].length;i++) {
                                    if (aOfaActuals[allHouseNums[moose][i]] == 0) {
                                    squareCheck++;
                                    }
                                    console.log(squareCheck);
                                }
                                    if (squareCheck == 0) {
                                        for (j=0;j<allHouseNums[moose].length;j++) {
                                                if (aOfaActuals[allHouseNums[moose][j]] !== aOfaSolved[allHouseNums[moose][j]]) {
                                                    console.log("incorrect notice fired");
                                                    correctCheck++;
                                                        $("#" + allHouseNums[moose][j]).addClass("incorrect");
                                                        setTimeout(function() {
                                                        $(".number").removeClass("check-correct");
                                                      //  $(".number").removeClass("incorrect");
                                                        }, 2000);
                                                     
                                                }     
                                        }
                                    }
                            if (correctCheck == 0 && squareCheck == 0) {
                                $(".boxnine .cell-overlay").addClass("house-done-animation");
                                    setTimeout(function() {
                                    $(".cell-overlay").removeClass("house-done-animation");
                                    }, 2000);
                                    console.log("animation should show");
                            }
                        }

                    
                        
                    
                        
                        
                        function checkWhichHouse() {
                            if ($("#" + clickedId).parent().hasClass("rowone")) {
                                checkRow0Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("rowtwo")) {
                                checkRow1Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("rowthree")) {
                                checkRow2Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("rowfour")) {
                                checkRow3Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("rowfive")) {
                                checkRow4Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("rowsix")) {
                                checkRow5Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("rowseven")) {
                                checkRow6Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("roweight")) {
                                checkRow7Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("rownine")) {
                                checkRow8Correct();
                            }
                            //start cols
                            if ($("#" + clickedId).parent().hasClass("columnone")) {
                                checkCol0Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("columntwo")) {
                                checkCol1Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("columnthree")) {
                                checkCol2Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("columnfour")) {
                                checkCol3Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("columnfive")) {
                                checkCol4Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("columnsix")) {
                                checkCol5Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("columnseven")) {
                                checkCol6Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("columneight")) {
                                checkCol7Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("columnnine")) {
                                checkCol8Correct();
                            }

                            //start squares
                            if ($("#" + clickedId).parent().hasClass("boxone")) {
                                checkSquare0Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("boxtwo")) {
                                checkSquare1Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("boxthree")) {
                                checkSquare2Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("boxfour")) {
                                checkSquare3Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("boxfive")) {
                                checkSquare4Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("boxsix")) {
                                checkSquare5Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("boxseven")) {
                                checkSquare6Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("boxeight")) {
                                checkSquare7Correct();
                            }
                            if ($("#" + clickedId).parent().hasClass("boxnine")) {
                                checkSquare8Correct();
                            }
                        }