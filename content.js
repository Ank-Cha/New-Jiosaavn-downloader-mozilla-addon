var downloader = function (bitrate_) {
    var Player = window.wrappedJSObject.Player;
    var postData = {
        url: Player.getCurrentSong().url,
        __call: 'song.generateAuthToken',
        _marker: 'false',
        _format: 'json',
        bitrate: bitrate_
    };
    $.ajax({
        type: 'POST',
        url: 'https://www.jiosaavn.com/api.php',
        crossDomain: true,
        dataType: 'json',
        data: postData,
        success: (data) => {
            browser.runtime.sendMessage({
                url_: data.auth_url,
            filename_: `Jiosaavn downloads/${Player.getCurrentSong().title.replace(/([\.?*\/\\]|&\w+;|$#\d+;)/g,'')}.mp3`
            });
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 90 && e.ctrlKey) {
        downloader(320);
    }
    else if(e.keyCode == 81 && e.ctrlKey){
        downloader(128);
    }
});
