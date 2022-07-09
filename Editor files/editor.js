let codeEditor = ace.edit("htmlCode");
let defaultCode = 'enter your html';
let codeEditor2 = ace.edit("cssCode");
let defaultCode2 = '/*enter your css*/';
let codeEditor3 = ace.edit("jsCode");
let defaultCode3 = '//enter your js';

const executeCodeBtn = document.querySelector('.editor_btn');

// function update(){
//     var res=document.getElementById('preview-window').contentWindow.document;
//     res.open();
//     res.write(codeEditor.getValue());
//     res.close;
// }

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

