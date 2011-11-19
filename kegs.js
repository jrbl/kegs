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
        var element = document.getElementById('response');
        element.innerHTML = "<p id=response_text>You should say " + response + ".</p>";
    };

    this.toggleClass = function(where, which) {
        if ((where == null) || (where == '') || (which == null) || (which == '')) {
            return false;
        }
        var elements = document.getElementsByName(where);
        which = which.toLowerCase();
        for (var key in elements) {
            var classes = elements[key].className.toLowerCase();
            if (classes == which) {
                elements[key].className = '';
                return true;
            }
            if ('' == classes) {
                elements[key].className = which;
                return false;
            }
            var loc = classes.search(which);
            if (-1 == loc) {
                elements[key].className = classes.concat(' ').concat(which);
                return false;
            }
            if ((0 == loc) && (classes[which.length] == ' ')) {
                elements[key].className = classes.slice(which.length);
                return true;
            }
            if ((classes[loc-1] == ' ') && (classes.length == loc+which.length)) {
                elements[key].className = classes.slice(0,loc-1);
                return true;
            }
            if ((classes[loc-1] == ' ') && (classes[loc+which.length] == ' ')) {
                elements[key].className = classes.slice(0,loc-1).concat(classes.slice(loc+which.length));
                return true;
            }
            return false;
        }
    };


};
