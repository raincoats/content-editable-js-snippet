# content-editable-js-snippet
JavaScript snippet that lets you edit webpages


## Here it is

    a=document.getElementsByTagName("*");for(i=0;i<a.length;i++){a[i].setAttribute("contenteditable","true");};href=document.getElementsByTagName("a");for(i=0;i<href.length;i++){href[i].removeAttribute("href");}

## Usage

Type `javascript:` into your menu bar, then paste the snippet, and press enter.

You can also make it into a bookmark (if you do, remember to put the `javascript:` at the start)