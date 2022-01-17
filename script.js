const htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"),{
      lineNumbers: true,
      tabSize:4,
      mode:"xml"
});
const cssEditor = CodeMirror(document.querySelector(".editor .code .css-code"),{
    lineNumbers: true,
    tabSize:4,
    mode:"css"
});
const jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"),{
    lineNumbers:true,
    tabSize:4,
    mode:"javascript"
   });

   document.querySelector("#run-btn").addEventListener("click",function(){
       let htmlCode = htmlEditor.getValue();
       let cssCode = "<style>"+ cssEditor.getValue() + "</style>";
       let jsCode = "<scri"+"pt>"+ jsEditor.getValue() + "</scri"+"pt>";
       let previewWindow = document.querySelector("#preview-window").contentWindow.document;
       previewWindow.open();
       previewWindow.write(htmlCode+cssCode+jsCode);
       previewWindow.close()
   })

   
            var icon= document.getElementById("icon");

            icon.onclick = function(){
                document.body.classList.toggle("dark-theme");

                 if(document.body.classList.contains("dark-theme"))
                     icon.src="sun.jpg";
                else
                    icon.src="mooon.jpg";
                   
            }
           
        //    var editor= CodeMirror.fromTextArea
        //    (document.getElementById("icon"),{
        //        mode:"xml",
        //        theme:"dracula"
        //    });
          
        

        