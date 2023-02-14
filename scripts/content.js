
function myFunction(){
    const article = document.querySelector("article");

      var tag = document.createElement("Button");
      var text = document.createTextNode("Copy");
      tag.appendChild(text);
      var element = document.getElementsByClassName("markdown prose w-full break-words dark:prose-invert light");
      
    for (var i = 0; i < element.length; i++) {
        var button = document.createElement('button');
        button.innerHTML = 'Copy';
        button.style.color = "#d1d5db";
        button.style.backgroundColor = "#2e2e2e";
        button.style.borderRadius = "5px";
        button.style.padding = "5px";

        with ({ n: i }) {
            button.onclick = function(event){
                // TO DO - LISTS SOMETIMES RENDER AS <OL>
                const AllP = this.parentElement.getElementsByTagName("p");
                let text = "";
                for (var j = 0; j < AllP.length; j++){
                    text += AllP[j].innerHTML;
                }

                navigator.clipboard.writeText(text).then(() => {
                }, () => {
                });
            };
          }
          


        element[i].appendChild(button);   
    }
    
}

setTimeout(myFunction, 4000);
