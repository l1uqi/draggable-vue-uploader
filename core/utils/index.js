export const uploadFile = (options, file, onProgress, onSuccess, onError) => {
  const { action, headers } = options;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', action, true);

  xhr.upload.onprogress = (event) => {
    if (event.lengthComputable) {
      const percent = (event.loaded / event.total) * 100;
      onProgress(Math.round(percent));
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

  for (const key of Object.keys(headers)) {
    xhr.setRequestHeader(key, headers[key]);
  }

  xhr.send(formData);
};

export const throttle = (fn, delay) => {
  let timer = null;
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  };
}