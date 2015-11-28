
/* get all the elements on the page, and put them into the variable a */
a = document.getElementsByTagName("*");

/* with each variable, add the HTML attribute contenteditable=true */
for (i = 0; i < a.length; i++){
    a[i].setAttribute("contenteditable", "true");
};


/* if you try and click on a link to edit it, it will still take you somewhere 
   else. so we have to remove the "href" attribute from all the <a> tags.
   it's the same process as above, no need to comment it further. */

href = document.getElementsByTagName("a");

for (i = 0; i < href.length; i++) {
    href[i].removeAttribute("href");
}