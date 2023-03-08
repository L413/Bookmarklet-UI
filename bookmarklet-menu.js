javascript:(function(){
  var currentPage = 1;
  var numPages = 3;
  var pages = [
    [
      {
        name: "Bookmarklet 1", 
        url: "javascript:(function(){alert('Hello from bookmarklet 1!');})();"
      },
    {
      name: "Bookmarklet 2",
      url: "javascript:(function(){alert('Hello from bookmarklet 2!');})();"
    },
    {
      name: "Bookmarklet 3",
      url: "javascript:(function(){alert('Hello from bookmarklet 3!');})();"
    }
  ],
    [
      {
        name: "Bookmarklet 4",
        url: "javascript:(function(){alert('Hello from bookmarklet 4!');})();"
      },
      {
        name: "Bookmarklet 5",
        url: "javascript:(function(){alert('Hello from bookmarklet 5!');})();"
      }
    ],
    [
      {
        name: "Bookmarklet 6",
        url: "javascript:(function(){alert('Hello from bookmarklet 6!');})();"
      },
      {
        name: "Bookmarklet 7",
        url: "javascript:(function(){alert('Hello from bookmarklet 7!');})();"
      },
      {
        name: "Bookmarklet 8",
        url: "javascript:(function(){alert('Hello from bookmarklet 8!');})();"
      }
    ]
  ];    
  function createMenu() {
    var menu = document.createElement("div");
    menu.setAttribute("style", "position:fixed;top:5%;left:95%;background-color:#000;color:#0f0;padding:20px;border-radius:10px;z-index:9999;font-family:monospace;font-size:16px;width:60%;");    menu.innerHTML = '<div style="text-align:right;"><button style="background-color:red;padding:5px;border-radius:5px;border:none;cursor:pointer;" onclick="document.body.removeChild(this.parentNode.parentNode);">X</button></div><h2 style="color:#0f0;margin-top:0;">Bookmarklets</h2><hr>';    var pageList = document.createElement("ul");    pageList.setAttribute("style", "list-style:none;padding:0;margin:0;");    for (var i = 0; i < pages[currentPage-1].length; i++) {      var item = pages[currentPage-1][i];      var listItem = document.createElement("li");      var link = document.createElement("a");      link.setAttribute("href", item.url);      link.textContent = item.name;      listItem.appendChild(link);      pageList.appendChild(listItem);    }    menu.appendChild(pageList);    var pageNav = document.createElement("div");    pageNav.setAttribute("style", "text-align:center;");    for (var i = 1; i <= numPages; i++) {      var button = document.createElement("button");      button.setAttribute("style", "margin:5px;");      if (i === currentPage) {        button.textContent = "[" + i + "]";      } else {        button.textContent = i;        button.addEventListener("click", function(e) {          currentPage = parseInt(e.target.textContent);          document.body.removeChild(menu);          createMenu();        });      }      pageNav.appendChild(button);    }    menu.appendChild(pageNav);    document.body.appendChild(menu);  }    createMenu();})();
