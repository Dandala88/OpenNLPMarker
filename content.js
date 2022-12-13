var getSelectedText = window.getSelection();

setInterval(() => {
    if(getSelectedText != "")
        alert(getSelectedText);
}, 5000);
