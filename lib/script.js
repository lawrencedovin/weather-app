var http = new XMLHttpRequest();
var url = 'http://jsonplaceholder.typicode.com/posts';
var method = 'POST';

var data='title=Post%20Title&body=Body';
//%20 is space

http.open(method, url);
http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// content type telling the server that it's getting data in the form URL
// encoded format
http.onreadystatechange = function() {
    if(http.readyState === XMLHttpRequest.DONE && http.status === 201) {
        // http.readyState checks if connection is done, operation complete
        // http.status === 200 means everything is okay a resource
        // was created
        console.log(JSON.parse(http.responseText));
        // print the data I got back, by accessing the data on the
        // HTTP object.
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
        console.log('Error!');
    }
};
http.send(data);
// sends the data