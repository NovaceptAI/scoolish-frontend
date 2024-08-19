const uploadFile = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://192.168.1.5:5000/documents/upload', true);

    // Update progress bar during upload
    // xhr.upload.onprogress = function(event) {
    //     if (event.lengthComputable) {
    //         const percentComplete = (event.loaded / event.total) * 100;
    //         document.getElementById('progress-bar').style.width = percentComplete + '%';
    //     }
    // };

    xhr.onload = function() {
        if (xhr.status === 200) {
            const result = JSON.parse(xhr.responseText);
            window.location.href = `/select_pages_features?ids=${result.document_ids.join(',')}`;
        } else {
            alert(xhr.responseText || 'Failed to upload documents.');
        }
    };

    xhr.onerror = function() {
        alert('Request failed.');
    };

    xhr.send(formData);
};

export default uploadFile;
