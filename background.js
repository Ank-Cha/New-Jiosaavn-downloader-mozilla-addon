var downloader = function (obj) {
    console.log(obj);
    var downloading = browser.downloads.download({
    url: obj.url_,
        method: 'GET',
        filename: obj.filename_
    });

    function onStartedDownload(id) {
        console.log(`Started downloading: ${id}`);
    }

    function onFailed(error) {
        console.log(`Download failed: ${error}`);
    }
    downloading.then(onStartedDownload, onFailed);
}




browser.runtime.onMessage.addListener(downloader);