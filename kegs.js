/* bottles and kegs */

/* circle 
 one, two, three etc.
 if your number is a multiple of 5, say bottles
 if your number is a multiple of 7, say kegs
 if your number is a multiple of 5 and 7, say bottles and kegs
 get it wrong, drink
 
 tool to help play the game.  you know what number is yours, you tell the app, the app tells you what to say.

 constraints:
  - no libraries
  - MVC style
*/

/* globals are unfortunate. */
whatchecker = new Controller();

function Model() {
    this.check = function(value) {
        value = value * 1;
        var bottles = false;
        var kegs = false;
        var response = '';

        if ((value % 5) == 0) {
            bottles = true;
        }
        if ((value % 7) == 0) {
            kegs = true;
        }

        response = value;

        if (kegs) {
            response = "kegs";
        } 
        if (bottles) {
            response = "bottles"
        } 
        if (bottles && kegs) {
            response = "bottles and kegs"
        } 

        return response;
    }
};

function Controller() {

    var model = new Model(); 

    this.go = function() {
        var response = model.check(document.getElementById("number").value);
        alert("Say " + response); 
    };


};


