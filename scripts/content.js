
function myFunction(){
    const article = document.querySelector("article");

      var tag = document.createElement("Button");
      var text = document.createTextNode("Copy");
      tag.appendChild(text);
      var element = document.getElementsByClassName("markdown prose w-full break-words dark:prose-invert light");
      
    for (var i = 0; i < element.length; i++) {
        var button = document.createElement('button');
        button.innerHTML = 'click me';

        with ({ n: i }) {
            button.onclick = function(event){
                const AllP = this.parentElement.getElementsByTagName("p");
                let text = "";
                for (var j = 0; j < AllP.length; j++){
                    text += AllP[j].innerHTML;
                }
                navigator.clipboard.writeText(text).then(() => {
                    //clipboard successfully set
                }, () => {
                    //clipboard write failed, use fallback
                });
            };
          }
          


        element[i].appendChild(button);   
    }
    
}

setTimeout(myFunction, 4000);
