/*console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = 'New Value';

var img = document.getElementById("madi");

var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px'; 
}

img.onclick = function ()
{
  var interval = setInterval(moveRight, 10);
};
*/
/*
var button = document.getElementById('counter');

button.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make the request
    request.open('GET', 'http://avinashnk613.imad.hasura-app.io/counter', true);
    request.send(null);
  
};
*/
//Submit name
/*
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
        //Create a request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200)
            {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length; i++)
                {
                    list += '<li>' + names[i] + '</li>';
                }
    
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    //Make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://avinashnk613.imad.hasura-app.io/submit-name?name='+name, true);
    request.send(null);
};*/


//Submit username and password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
        //Create a request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200)
            {
                alert('logged in successfully');
            } else if (request.status === 403) {
                alert('username / password is incorrect');
            } else if (request.status === 500) {
                alert('Something went wrong on the server');
            }
        }
    };
    //Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://avinashnk613.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'applicaton/json');
    request.send(JSON.strungify({username : username, password : password}));
};



