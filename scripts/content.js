
setInterval(() => {
    var arr = document.getElementsByClassName("w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]")
    //.firstChild.children[1].children[1].children

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].firstChild.children[1].children[1].children[0].children.length == 2) {
        myFunction(arr[i].firstChild.children[1].children[1].children[0]);
        }
    };

    }, 500);

function renderLinkIcon(node) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
  
    iconSvg.setAttribute('fill', 'currentColor');
    iconSvg.setAttribute('viewBox', '0 0 115.77 122.88');
    iconSvg.setAttribute('stroke', 'currentColor');
    iconSvg.classList.add('post-icon');
  
    iconPath.setAttribute(
      'd',
      `M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z`
    );

    iconPath.setAttribute('stroke-linecap', 'round');
    iconPath.setAttribute('stroke-linejoin', 'round');
  
    iconSvg.appendChild(iconPath);
  
    return node.appendChild(iconSvg);
  }
  
function myFunction(element){
    const article = document.querySelector("article");

      var tag = document.createElement("Button");
      var text = document.createTextNode("Copy");
      tag.appendChild(text);

      var button = document.createElement('button');
        button.setAttribute("id", "button");
        button.style.width="15px"
        button.appendChild = renderLinkIcon(button);
        button.style.color = "#d9d9e3";
        button.style.marginLeft = "5px";
        button.className="rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400";

            button.onclick = function(event){
                // TO DO - LISTS SOMETIMES RENDER AS <OL>
                const AllP = this.parentElement.parentElement.parentElement.getElementsByTagName("p");
                let text = "";
                for (var j = 0; j < AllP.length; j++){
                    text += AllP[j].innerHTML;
                }

                navigator.clipboard.writeText(text).then(() => {
                }, () => {
                });
            };
          
        element.appendChild(button);   
}


