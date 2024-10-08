// Functionality used to display the current visitors on the resume page.

var myStorage = window.localStorage;
var visits;


window.addEventListener('load', function() {
    if (!myStorage.getItem("visits")) {
        myStorage.setItem('visits', 1);
    } else {
        visits = myStorage.getItem("visits");
        visits = parseInt(visits) + 1;
        myStorage.setItem('visits', visits);
    }
    console.log('Page view count:', myStorage.getItem("visits"));
    console.log(visits)
});

document.getElementById("resumeviews").textContent = Number(myStorage.getItem("visits")) + 1;
