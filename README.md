# API_Work_Day_Planner_JLW

 Please Find API Work Day Planner Published below:

##  https://jlukewilliams94.github.io/API_Work_Day_Planner_JLW/

The Work Day Planner was build using jQuery. The work day planner had to meet the below acceptance criteria:

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
### 1. In order to add the current data and time to the top of the calander, I targeted the $("#currentDay") id and use the jQuery: moment().format("MMMM Do YYYY, h:mm a");

![Screen Shot 2020-02-10 at 6 34 47 PM](https://user-images.githubusercontent.com/59854275/75398822-b87b1900-58c8-11ea-9c20-93d5e9162b33.png)

### 2. In order to create the day planner I built three seperate columns for Time of Day, Activity Input and Save Button using jQuery and a For Loop. 

![Screen Shot 2020-02-26 at 6 53 11 PM](https://user-images.githubusercontent.com/59854275/75399045-40612300-58c9-11ea-95e4-bfd146f2e543.png)

### 3. In order to update the Activity Input to reflect the current time I added the below jQuery if statements:



  if (parseInt(current24Hour) === i) {
        activitySpan.attr("style", "background-color: #ff6961; color: white;");
    } else if (parseInt(current24Hour) < i) {
        activitySpan.attr("style", "background-color: #77dd77; color: white;");
    } else if (parseInt(current24Hour) > i) {
        activitySpan.attr("style", "background-color: #d3d3d3;")};
    
### 4. In order to ensure the data is stored in the local storage when a save button is clicked I added a click event function is as follows:

   // Click Event for Save Button
    $(document).on("click","i" ,function(event) {                                                      
        event.preventDefault();
    //Identifies which Save Button was clicked with $(this)                                                   
        var saveIdNum = $(this).attr("save-id");                                
        var inputId = "#input-"+saveIdNum;                                       
        var activityValue = $(inputId).val();    
    //Stores the input value corresponding to clicked save button to Activity Array                                   
        activityArray[saveIdNum] = activityValue;  
        console.log(activityArray)                          
    //Saves Activity Array in Local Storage                                                   
        localStorage.setItem("savedPlans", JSON.stringify(activityArray));
        console.log(activityValue)
    });    





