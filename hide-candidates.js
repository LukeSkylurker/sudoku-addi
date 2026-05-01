// JavaScript source code
$(document).ready(function() {
    $(document).on('click', '.hide-candidates', function() {
            if ($(".hide-candidates").text() === "Hide Candidates") {
            $(".candidate").css("display", "none");
            $(".scratch-candidate").css("display","inline-block");
            cleanUpScratches()
            $(".hide-candidates").text("Show Candidates");
            }
            else {
            $(".hide-candidates").text("Hide Candidates");
            $(".candidate").css("display", "inline-block");
            $(".scratch-candidate").css("display","none");
            rebuildCandidates();
            addingNewNumber();
            }
        }
    )
})