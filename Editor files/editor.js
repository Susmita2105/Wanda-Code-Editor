let codeEditor = ace.edit("htmlCode");
let defaultCode = 'enter your html';
let codeEditor2 = ace.edit("cssCode");
let defaultCode2 = '/*enter your css*/';
let codeEditor3 = ace.edit("jsCode");
let defaultCode3 = '//enter your js';
var content = "";

const executeCodeBtn = document.querySelector('.editor_btn');

function saveProject() {
    var projectName = document.getElementById("projectname").value;
    if (projectName.trim() == "" || projectName == null) {
        alert("Project name cannot be blank.");
        return;
    }
    else

        var cssContent = codeEditor2.getValue();
    var jsContent = codeEditor3.getValue();
    var htmlContent = codeEditor.getValue();

    var obj = {};
    obj.css = cssContent;
    obj.js = jsContent;
    obj.html = htmlContent;

    localStorage.setItem(projectName, JSON.stringify(obj));
    alert(":-) Project is saved successfully");

}

let editorLib = {
    init() {
        //configure ace


        //theme
        codeEditor.setTheme("ace/theme/katzenmilch");
        codeEditor2.setTheme("ace/theme/katzenmilch");
        codeEditor3.setTheme("ace/theme/katzenmilch");


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
        codeEditor.getSession().on('change', function () {
            // update();
        });
    }

}





//events
executeCodeBtn.addEventListener('click', () => {
    //get input from the code editor
    const userCode = codeEditor.getValue();
    const userCode2 = codeEditor2.getValue();
    const userCode3 = codeEditor3.getValue();


    var res = document.getElementById('preview-window').contentWindow.document;
    res.open();
    res.write(userCode);
    res.write('<style>' + userCode2 + '</style>');
    res.write('<script>' + userCode3 + '</script>');
    content = "\n" + userCode + '\n\n<style>\n' + userCode2 + '\n</style>\n' + '\n<script>\n' + userCode3 + '\n</script>\n';
    res.close;

    //run the user code
    try {
        new Function(userCode)();
        new Function(userCode2)();
        new Function(userCode3)();
    } catch (err) {
        console.error(err);
    }
});


//downloading and saving
window.onload = function () {
    var html = "<option></option>";
    for (var i = 0; i < localStorage.length; i++) {
        html += "<option>" + localStorage.key(i) + "</option>";
    }

    document.getElementById("projects").innerHTML = html;
}




window.addEventListener("keydown", function (e) {

    if ((event.ctrlKey || event.metaKey) && (e.key == 's' || e.key == 'S')) {
        e.preventDefault();

        var filename = prompt("Enter file name(with extension like .html or .htm or .txt): ");
        if (filename.trim() == "" || filename == null) {
            alert("Project name cannot be blank.");
            return;
        }
        else
            var a = document.createElement("a");
        a.href = "data:application/octet-stream, " + encodeURIComponent(
            "<html>\n" + content + "\n</html>");
        a.download = filename;
        a.click();
    }
})

function download() {
    var filename = prompt("Enter file name(with extension like .html or .htm or .txt) : ");
    if (filename.trim() == "" || filename == null) {
        alert("Project name cannot be blank.");
        return;
    }
    else
        var a = document.createElement("a");
    a.href = "data:application/octet-stream, " + encodeURIComponent(
        "<html>" + content + "<\/html>");
    a.download = filename;
    a.click();
}


// dark mode
var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "sun.jpg";
        codeEditor.setTheme("ace/theme/merbivore_soft");
        codeEditor2.setTheme("ace/theme/merbivore_soft");
        codeEditor3.setTheme("ace/theme/merbivore_soft");
    }

    else {
        icon.src = "mooon.jpg";
        codeEditor.setTheme("ace/theme/katzenmilch");
        codeEditor2.setTheme("ace/theme/katzenmilch");
        codeEditor3.setTheme("ace/theme/katzenmilch");
    }


}




editorLib.init();
