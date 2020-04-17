/* Resonance.js
    Http://EssenceOfZen.org/
        - Zane "ZenOokami" Blalock
    Essence Of Zen's Rest Library


    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        console.log(xhttp.readyState);
        console.log(xttp.response);
    };

    xhttp.open("GET", "http://httpbin.org/get");
    xhttp.send();

    For POST

    xhttp.setRequestHeader("Content-Type", "application/json"); 
    
*/

class Resonante{
    // Required to give at least url, method, and data.

    /* 
        {
            "url":"<url>",
            "method":"POST/GET/PUT/PATCH/etc.",
            "content-type":<content>,
            "data":<data>,
            "headers":[<headers>],
            "unsent-action":<function>,
            "opened-action":<function>,
            "headers-recieved-action":<function>,
            "loading-action":<function>,
            "done-action":<function>
        } 
    */

    constructor(object){
        this.url = object['url'];
        this.method = object["method"]
        this.data = object['data'];
        this.headers = object['']
    }

}