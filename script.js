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

 var content="";


 window.onload=function(){
     var html="<option></option>";
     for(var i=0;i<localStorage.length;i++){
 html+="<option>" +localStorage.key(i)+"</option>";
     }

     document.getElementById("projects").innerHTML=html;
 }




         window.addEventListener("keydown",function(e){

            if((event.ctrlKey || event.metaKey) && (e.key == 's' || e.key == 'S')){
             e.preventDefault();
             
             var filename = prompt("Enter file name: ");
             if(filename.trim() == "" || filename == null){
                alert("Project name cannot be blank.");
                return;}
            else
             var a =document.createElement("a");
             a.href = "data:application/octet-stream, " + encodeURIComponent(
                 "<html>" + content+ "<\/html>" );
                 a.download=filename;
                a.click();
            }
         })

         function download(){
            var filename = prompt("Enter file name: ");
            if(filename.trim() == "" || filename == null){
                alert("Project name cannot be blank.");
                return;}
            else
            var a =document.createElement("a");
            a.href = "data:application/octet-stream, " + encodeURIComponent(
                "<html>" + content+ "<\/html>" );
                a.download=filename;
               a.click();
         }



 document.querySelector("#run-btn").addEventListener("click",function(){
     content="";
     let htmlCode = htmlEditor.getValue();
     let cssCode = "<style>\n"+ cssEditor.getValue() + "\n</style>";
     let jsCode = "<scri"+"pt>\n"+ jsEditor.getValue() + "\n</scri"+"pt>";
     let previewWindow = document.querySelector("#preview-window").contentWindow.document;
     previewWindow.open();
     previewWindow.write(htmlCode+cssCode+jsCode);
     content =htmlCode+cssCode+jsCode;
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


function saveProject(){
    var projectName = document.getElementById("projectname").value;
    if(projectName.trim() == "" || projectName == null){
        alert("Project name cannot be blank.");
        return;}
    else

 var cssContent = cssEditor.getValue();
 var jsContent = jsEditor.getValue();
 var htmlContent =  htmlEditor.getValue();

 var obj={};
 obj.css=cssContent;
 obj.js=jsContent;
 obj.html=htmlContent;

 localStorage.setItem(projectName,JSON.stringify(obj));
alert(":-) Project is saved successfully");

}

function populateEditor(){
    var projectName= document.getElementById("projects").value;
    var data= localStorage.getItem(projectName);
    var obj=JSON.parse(data);

document.getElementById("cssEditor").innerText = obj.css;
document.getElementById("htmlEditor").innerText= obj.html;
document.getElementById("jsEditor").innerText=obj.js;
}