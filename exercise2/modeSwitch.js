let isDark = false;

function switchModes(){
    
    
    
    if(isDark === true){
        console.log("im true");
        document.documentElement.style.setProperty("--col-01", "#171219");
        document.documentElement.style.setProperty("--col-02", "#e7db95");
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDark = false;
    } else {
        console.log("im false");
        document.documentElement.style.setProperty("--col-01", "#e7db95");
        document.documentElement.style.setProperty("--col-02", "#171219");
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDark = true;
    }
}
