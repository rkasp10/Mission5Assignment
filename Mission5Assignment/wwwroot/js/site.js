// Calculator Logic

$(document).ready(function () {
    var hourlyRate = 25.00;

    // Calculate total when button is clicked
    $("#calculateBtn").on("click", function () {
        var hoursValue = $("#hoursInput").val().trim();
        var hours = parseFloat(hoursValue);

        // Validation - make sure they entered a positive number
        if (isNaN(hours) || hours <= 0 || hoursValue === "") {
            $("#hoursError").addClass("show");
            $("#totalOutput").val("");
            return;
        }

        // Hide any previous validation error
        $("#hoursError").removeClass("show");

        // Calculate and display the total
        var total = hours * hourlyRate;
        $("#totalOutput").val("$" + total.toFixed(2));
    });

    // Clear validation error when user starts typing
    $("#hoursInput").on("input", function () {
        $("#hoursError").removeClass("show");
    });
});
