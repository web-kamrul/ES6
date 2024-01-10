// use strict JS এর Bad syntax কে Error আকারে দেখাবে যাতে ডেভোলাপারের কোডগুলো আরো সুন্দর এবং গোছানো হয়
"use strict";
x = 3.14;  


x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
    "use strict";
  y = 3.14;   // This will cause an error
}