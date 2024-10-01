document.getElementById('uploadForm').addEventListener('submit', function(event) {  
    event.preventDefault();  
      
    const fileInput = document.getElementById('jsonFile');  
    const file = fileInput.files[0];  
  
    if (!file || file.type !== 'application/json') {  
        alert('Please select a valid JSON file.');  
        return;  
    }  
  
    const reader = new FileReader();  
      
    reader.onload = function(event) {  
        const jsonContent = event.target.result;  
        const jsonOutputDiv = document.getElementById('jsonOutput');  
        jsonOutputDiv.textContent = JSON.stringify(JSON.parse(jsonContent), null, 2);  
        jsonOutputDiv.classList.remove('hidden');  
    };  
  
    reader.onerror = function(error) {  
        alert('Error reading the file: ' + error.message);  
    };  
  
    reader.readAsText(file);  
});
