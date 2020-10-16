// TODO: 
// TODO: Break code into functions.
// TODO: Display date at top of page. id=currentDay
// TODO: Set up entry object.
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

    makeEntries();

    function makeEntries ()
    {
        for (var i = 0; i < hoursToDisplay.length; i++) 
        {
            var newEntry = $("<div>");
            newEntry.addClass("row input-group");

            var entryHour = $("<p>");
            entryHour.addClass("hour p-4 input-group-prepend");
            entryHour.text(hoursToDisplay[i]);


            var entryInput = $("<input>");
            entryInput.addClass("submit-button w-75 description");
            var inputVal = getLocalStorage(hoursToDisplay[i]);
            if(inputVal)
            {
                console.log("Read a value");
                entryInput.val(inputVal);
            }

            // Set this text box to what is in storage.


            var entryButton = $("<btn>");
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

            newEntry.append(entryHour);
            newEntry.append(entryInput);
            newEntry.append(entryButton);

            container.append(newEntry);
        }
        
    }



    //#region Time
    function getDate ()
    {

    }

    function getHour ()
    {

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