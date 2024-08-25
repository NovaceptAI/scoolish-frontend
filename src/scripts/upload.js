const uploadFile = (formData) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://192.168.1.5:5000/documents/upload', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const result = JSON.parse(xhr.responseText);
            window.location.href = `/select_pages_features?ids=${result.document_ids.join(',')}`;
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
