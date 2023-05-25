export const uploadFile = (file, url, onProgress, onSuccess, onError) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);

  xhr.upload.onprogress = (event) => {
    if (event.lengthComputable) {
      const percent = (event.loaded / event.total) * 100;
      onProgress(percent);
    }
  };

  xhr.onload = function () {
    if (xhr.status === 200) {
      onSuccess(xhr.response);
    } else {
      onError(xhr.statusText);
    }
  };

  xhr.onerror = function () {
    onError(xhr.statusText);
  };

  const formData = new FormData();
  formData.append('file', file);

  xhr.send(formData);
};