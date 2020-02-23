$(document).ready(function() {
// Added Current Date to Header
    var date = new Date();
    var months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    var todaysDate =date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear();
    console.log(todaysDate);
    $("#currentDay").text(todaysDate);

    var saveIcon = "assets/images/save-icon.png";

    var scheduledPlans = JSON.parse(localStorage.getItem("savedPlans"));

    //if (scheduledPlans !== null) {
        //plansArray = storedPlans;
        //} else {
       //plansArray = new Array(9);
       //plansArray[4] = "test";
    //};


    var dayPlanner = $("#dayPlanner");
    dayPlanner.empty();

    for (var i = 9; i<= 17; i++) {
        // Start Time of Day 
        index = 0;
        rowDiv = $("<div>");
        rowDiv.addClass("row");
        rowDiv.attr("index", i)

        timeDiv = $("<div>");
        timeDiv.addClass("col-md-2");

        timeSpan = $("<span>");
        timeSpan.attr("class", "hour");

        var displayTime = 0;
        var morningAfternoon = "";
        if(i > 12) {
            displayTime = i - 12;
            morningAfternoon = "pm";
        } else {
            displayTime = i;
            morningAfternoon = "am";
        }

        timeSpan.text(displayTime + morningAfternoon);

        rowDiv.append(timeDiv);
        timeDiv.append(timeSpan);
        //End Time of Day 

        //Start Activity Input
        activitySpan = $("<input>");
        activitySpan.attr("id", "input-" + index);
        activitySpan.attr("index", index);
        activitySpan.attr("type", "text");
        activitySpan.attr("class", "activity-input");

        //activitySpan.val(plansArray[index])

        activityInpDiv = $("<div>");
        activityInpDiv.addClass("col-md-8")
        rowDiv.append(activityInpDiv);
        activityInpDiv.append(activitySpan);
        //End Activity Input
        
        let saveDiv = $('<div>');
        saveDiv.addClass('col-md-2');

        let saveBtn = $('<i>');
        saveBtn.attr('id', "saveid-" +index);
        saveBtn.attr('save-id',index);
        saveBtn.attr('class',"far fa-save saveIcon");
    
       
        rowDiv.append(saveDiv);
        saveDiv.append(saveBtn);

        dayPlanner.append(rowDiv);

    }



 
});