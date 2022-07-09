let codeEditor = ace.edit("htmlCode");
let defaultCode = 'enter your html';
let codeEditor2 = ace.edit("cssCode");
let defaultCode2 = '/*enter your css*/';
let codeEditor3 = ace.edit("jsCode");
let defaultCode3 = '//enter your js';
var content="";

const executeCodeBtn = document.querySelector('.editor_btn');

// function update(){
//     var res=document.getElementById('preview-window').contentWindow.document;
//     res.open();
//     res.write(codeEditor.getValue());
//     res.close;
// }

function saveProject(){
    var projectName = document.getElementById("projectname").value;
    if(projectName.trim() == "" || projectName == null){
        alert("Project name cannot be blank.");
        return;}
    else

 var cssContent = codeEditor2.getValue();
 var jsContent = codeEditor3.getValue();
 var htmlContent =  codeEditor.getValue();

 var obj={};
 obj.css=cssContent;
 obj.js=jsContent;
 obj.html=htmlContent;

 localStorage.setItem(projectName,JSON.stringify(obj));
alert(":-) Project is saved successfully");

}

let editorLib ={
    init(){
        //configure ace


    //theme
    codeEditor.setTheme("ace/theme/dracula");
    codeEditor2.setTheme("ace/theme/dracula");
    codeEditor3.setTheme("ace/theme/dracula");
    

    //set language
    codeEditor.session.setMode("ace/mode/html");
    codeEditor2.session.setMode("ace/mode/css");
    codeEditor3.session.setMode("ace/mode/js");

    //set options
    codeEditor.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
    });
    codeEditor2.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
    });
    codeEditor3.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
    });

    //set default code
    codeEditor.setValue(defaultCode);
    codeEditor2.setValue(defaultCode2);
    codeEditor3.setValue(defaultCode3);

    //update iframe to show results
    codeEditor.getSession().on('change',function(){
        // update();
    });
    }
    
}





//events
executeCodeBtn.addEventListener('click', () =>{
    //get input from the code editor
    const userCode = codeEditor.getValue();
    const userCode2 = codeEditor2.getValue();
    const userCode3 = codeEditor3.getValue();
    

    var res=document.getElementById('preview-window').contentWindow.document;
    res.open();
    res.write(userCode);
    // res.close;

    // res.open();
    res.write('<style>'+userCode2+'</style>');
    // res.close;

    // res.open();
    res.write('<script>'+userCode3+'</script>');
    content="\n"+userCode+'\n\n<style>\n'+userCode2+'\n</style>\n'+'\n<script>\n'+userCode3+'\n</script>\n';
    res.close;

    //run the user code
    try{
        new Function(userCode)();
        new Function(userCode2)();
        new Function(userCode3)();
    } catch (err) {
        console.error(err);
    }
});


//downloading and saving
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
            
            var filename = prompt("Enter file name(with extension like .html or .htm or .txt): ");
            if(filename.trim() == "" || filename == null){
               alert("Project name cannot be blank.");
               return;}
           else
            var a =document.createElement("a");
            a.href = "data:application/octet-stream, " + encodeURIComponent(
                "<html>\n" + content+ "\n</html>" );
                a.download=filename;
               a.click();
           }
        })

        function download(){
           var filename = prompt("Enter file name(with extension like .html or .htm or .txt) : ");
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



// document.querySelector("#run-btn").addEventListener("click",function(){
//     content="";
//     let htmlCode = htmlEditor.getValue();
//     let cssCode = "<style>\n"+ cssEditor.getValue() + "\n</style>";
//     let jsCode = "<scri"+"pt>\n"+ jsEditor.getValue() + "\n</scri"+"pt>";
//     let previewWindow = document.querySelector("#preview-window").contentWindow.document;
//     previewWindow.open();
//     previewWindow.write(htmlCode+cssCode+jsCode);
//     content =htmlCode+cssCode+jsCode;
//     previewWindow.close()
// })





// document.querySelector("#run-btn").addEventListener("click",function(){
//     content="";
//     let htmlCode = htmlEditor.getValue();
//     let cssCode = "<style>\n"+ cssEditor.getValue() + "\n</style>";
//     let jsCode = "<scri"+"pt>\n"+ jsEditor.getValue() + "\n</scri"+"pt>";
//     let previewWindow = document.querySelector("#preview-window").contentWindow.document;
//     previewWindow.open();
//     previewWindow.write(htmlCode+cssCode+jsCode);
//     content =htmlCode+cssCode+jsCode;
//     previewWindow.close()
// })


editorLib.init();
// editorLib.update();





//now for css code display

// let codeEditor2 = ace.edit("cssCode");
// let defaultCode2 = '/*enter your css*/';

// const executeCodeBtn = document.querySelector('.editor_btn');

// function update(){
//     var res=document.getElementById('preview-window').contentWindow.document;
//     res.open();
//     res.write(codeEditor.getValue());
//     res.close;
// }

// let editorLib2 ={
//     init(){
//         //configure ace


//     //theme
//     codeEditor2.setTheme("ace/theme/dracula");

//     //set language
//     codeEditor2.session.setMode("ace/mode/css");

//     //set options
//     codeEditor2.setOptions({
//         enableBasicAutocompletion: true,
//         enableLiveAutocompletion: true,
//     });

//     //set default code
//     codeEditor2.setValue(defaultCode2);

//     //update iframe to show results
//     codeEditor2.getSession().on('change',function(){
//         // update();
//     });
//     }
    
// }

//events
// executeCodeBtn.addEventListener('click', () =>{
//     //get input from the code editor
//     const userCode2 = codeEditor2.getValue();

//     var res=document.getElementById('preview-window').contentWindow.document;
//     res.open();
//     res.write(userCode2);
//     res.close;

//     //run the user code
//     try{
//         new Function(userCode2)();
//     } catch (err) {
//         console.error(err);
//     }
// });


// editorLib2.init();
// editorLib.update();




//now for js code display

// let codeEditor3 = ace.edit("jsCode");
// let defaultCode3 = '//enter your js';

// const executeCodeBtn = document.querySelector('.editor_btn');

// function update(){
//     var res=document.getElementById('preview-window').contentWindow.document;
//     res.open();
//     res.write(codeEditor.getValue());
//     res.close;
// }

// let editorLib3 ={
//     init(){
//         //configure ace


//     //theme
//     codeEditor3.setTheme("ace/theme/dracula");

//     //set language
//     codeEditor3.session.setMode("ace/mode/js");

//     //set options
//     codeEditor3.setOptions({
//         enableBasicAutocompletion: true,
//         enableLiveAutocompletion: true,
//     });

//     //set default code
//     codeEditor3.setValue(defaultCode3);

//     //update iframe to show results
//     codeEditor3.getSession().on('change',function(){
//         // update();
//     });
//     }
    
// }

// //events
// executeCodeBtn.addEventListener('click', () =>{
//     //get input from the code editor
//     const userCode3 = codeEditor3.getValue();

//     var res=document.getElementById('preview-window').contentWindow.document;
//     res.open();
//     res.write(userCode3);
//     res.close;

//     //run the user code
//     try{
//         new Function(userCode3)();
//     } catch (err) {
//         console.error(err);
//     }
// });


// editorLib3.init();
// // editorLib.update();

