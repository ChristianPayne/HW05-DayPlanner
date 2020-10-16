// TODO: 
// TODO: Break code into functions.
// TODO: Display date at top of page. id=currentDay
// TODO: Get time functions.
// TODO: Add colors.

$(document).ready(function(){
    var container = $(".container");

    var hoursToDisplay = [
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm"
    ];


    // Set the date at the top with specific formatting.
    $("#currentDay").text(getDate());



    makeEntries();

    function makeEntries ()
    {
        var present = false;

        // Loop through all the hours for the page and make the rows.
        for (var i = 0; i < hoursToDisplay.length; i++) 
        {
            // Create the div that holds all the elements for the row.
            var newEntry = $("<div>");
            newEntry.addClass("row time-block input-group");

            // Create the hour label at the front of each row.
            var entryHour = $("<p>");
            entryHour.addClass("hour input-group-prepend");
            entryHour.text(hoursToDisplay[i]);

            // Create the input field for the user.
            var entryInput = $("<textarea>");
            entryInput.addClass("submit-button w-75 description");

            
            //#region Colors
            // By default, add the future class.
            entryInput.addClass("future");
            
            // If we find the present hour, mark present as true and set class to present.
            if (parseInt(hoursToDisplay[i]) == parseInt(getHour())) 
            {
                entryInput.removeClass("future");
                entryInput.addClass("present");
                present = true;
            }
            // If we haven't found present yet, we are looking at past.
            else if (present === false)
            {
                entryInput.removeClass("future");
                entryInput.addClass("past");
            }
            //#endregion

            
            // If the value from localStorage is not empty, then set the input field to be that.
            var inputVal = getLocalStorage(hoursToDisplay[i]);
            if(inputVal)
            {
                // Set this text box to what is in storage.
                entryInput.val(inputVal);
            }



            // Make a new button
            var entryButton = $("<btn>");
            // Add all the classes to make it a save button.
            entryButton.addClass("btn btn-info input-group-append saveBtn");
            
            // TODO: Make this into a submit button
            entryButton.attr("type", "submit");
            // entryButton.attr("value", "Submit");
            entryButton.text("Save");

            // Add an on click passing the input field and the function to call.
            entryButton.on("click", {hour: hoursToDisplay[i], value : entryInput},function (event)
            {
                // Sets the values of the input field in localStorage.
                setLocalStorage(event.data.hour, event.data.value.val());
            });


            // Append all the elements to the entry then to the container.
            newEntry.append(entryHour);
            newEntry.append(entryInput);
            newEntry.append(entryButton);

            container.append(newEntry);
        }
        
    }



    //#region Time
    function getDate ()
    {
        return moment().format("MMMM Do, YYYY");
    }

    function getHour ()
    {
        return moment().format('ha');
    }
    //#endregion


    //#region localStorage
    function getLocalStorage (key)
    {
        return localStorage.getItem(key);
    }

    function setLocalStorage (key, value)
    {
        localStorage.setItem(key, value);
    }
    //#endregion

});