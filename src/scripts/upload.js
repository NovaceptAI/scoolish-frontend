const uploadFile = (formData) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://20.127.228.226/documents/upload', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const result = JSON.parse(xhr.responseText);
            
            // Prepare query params by encoding the document info
            const documentInfo = encodeURIComponent(JSON.stringify(result.documents)); // Assuming 'documents' contains the entire document info
            
            // Redirect to the page and pass the document info
            window.location.href = `/select_pages_features?documents=${documentInfo}`;
        } else {
            alert('Failed to upload documents.');
        }
    };

    xhr.onerror = function () {
        alert('Request failed.');
    };

    xhr.send(formData);
};

export default uploadFile;
