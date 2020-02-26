$(document).ready(function() {

    // Added Current Date and Time to Jumbotron
    var todaysDate = moment().format("MMMM Do YYYY, h:mm a");
    $("#currentDay").text(todaysDate);

    //Variable setting clock to 24 hour time
    var current24Hour = moment().format('H');

    var myPlans = JSON.parse(localStorage.getItem("savedPlans"));

    if(myPlans !== null) {
    activityArray = myPlans
    } else {
    activityArray= []
    }

    //Empties Div with Id Day Planner before for loop is run.
    var dayPlanner = $("#dayPlanner");
    dayPlanner.empty();



    //For Loop setting variable i equal to hours day planner is avaliable.
    for (var i = 9; i<= 17; i++) {

    //Set Identifier equal to index in array
    var identifier = i - 9

    // Create Row for Each Hour In For Loop
    rowDiv = $("<div>");
    rowDiv.addClass("row");
    rowDiv.attr("index", i)

    // Column 1 - Display Hour of the Day on Each Row
    timeDiv = $("<div>");
    timeDiv.addClass("col-md-2");
    timeSpan = $("<span>");
    timeSpan.attr("class", "hour");

    // If Statements for AM and PM Hours
    var displayTime = 0;
    var morningAfternoon = "";
    if(i > 12) {
        displayTime = i - 12;
        morningAfternoon = "pm";
    } else {
        displayTime = i;
        morningAfternoon = "am";

    };

    // Add Hour to Each Row
    timeSpan.text(displayTime + morningAfternoon);

    // Append Display Hour to DOM Column 1
    rowDiv.append(timeDiv);
    timeDiv.append(timeSpan);

    // Column 2 - Display Input
    activityInpDiv = $("<div>");
    activityInpDiv.addClass("col-md-8")
    activitySpan = $("<input>");
    activitySpan.attr("id", "input-" + identifier);
    activitySpan.attr("index", identifier);
    activitySpan.attr("type", "text");
    activitySpan.attr("class", "activity-input");

    // Return Activity from Local Storage Array
    activitySpan.val(activityArray [identifier]);

    //Append Input to DOM Column 2
    rowDiv.append(activityInpDiv);
    activityInpDiv.append(activitySpan);

    //Column 3 - Display Save Button       
    var saveDiv = $('<div>');
    saveDiv.addClass('col-md-2');
    var saveBtn = $('<i>');
    saveBtn.attr('id', "saveid-" + identifier);
    saveBtn.attr('save-id', identifier);

    //Utalized Bootstrap fa-sav for Save Button Icon
    saveBtn.attr('class',"far fa-save saveBtn");

    //Append Save Button to DOM Column 3
    rowDiv.append(saveDiv);
    saveDiv.append(saveBtn);

    //Append Column 1, Column 2 and Column 3 to Day Planner Div
    dayPlanner.append(rowDiv);

    //Set Input Color Change to changes in time of day
    if (parseInt(current24Hour) === i) {
        activitySpan.attr("style", "background-color: #ff6961; color: white;");
    } else if (parseInt(current24Hour) < i) {
        activitySpan.attr("style", "background-color: #77dd77; color: white;");
    } else if (parseInt(current24Hour) > i) {
        activitySpan.attr("style", "background-color: #d3d3d3;")};
    
    };

    // Click Event for Save Button
    $(document).on("click","i" ,function(event) {                                                      
        event.preventDefault();
    //Identifies which Save Button was clicked with $(this)                                                   
        var saveIdNum = $(this).attr("save-id");                                
        var inputId = "#input-"+saveIdNum;                                       
        var activityValue = $(inputId).val();    
        console.log(saveIdNum);
        console.log(inputId);     
        console.log(activityValue);                    

    //Stores the input value corresponding to clicked save button to Activity Array                                   
        activityArray[saveIdNum] = activityValue;  
        console.log(activityArray)                          
    //Saves Activity Array in Local Storage                                                   
        localStorage.setItem("savedPlans", JSON.stringify(activityArray));
        console.log(activityValue)
    });        

});                                                        

 

   

