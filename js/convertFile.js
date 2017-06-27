window.onload = function (){
    
    // Read the element with the name "myFileSumbit" from the html
    var sumbit = document.getElementsByName('myFileSumbit');
    
    // Wait for the event CLICK on the element to call our method 
    sumbit[0].addEventListener("click", convertFileToBase64);
}

// Function called when the user "clicks" on the "submit" button
convertFileToBase64 = function (){
    
    // Read the element with the name "myFileInput" from the html
    var input = document.getElementsByName('myFileInput')
    var file = input[0].files[0];
    
    // The user clicked the "submit" button without uploading a file
    if(file == undefined)
        alert("Please insert a file...");
    
    else{
        // Initiate File Reader class
        var reader = new FileReader();
        
        // You can reader the file in other ways, read class API for more information
        reader.readAsDataURL(file);
        
        // We need to wait for the file to load completely 
        // Onload is an event that calls our function when the file is loaded
        reader.onload = function (){
            
            // Here is the file converted to a base 64 String
            var myBase64File = reader.result;
            
            // From here onward, we are only going to show the coded file to the front end
            showResultOnHTML(myBase64File);
        }
    }
}

// Code not required to code the file to a base 64 String
// This methods purpose is to show the file information to the front end
showResultOnHTML = function (base64File) {
    
    var myClass = document.getElementsByClassName('computation-results');
    myClass[0].style.display = 'inline';
    
    
    var myPanel = document.getElementsByName('myFilePanel');
    myPanel[0].innerHTML = base64File;
    
    
}