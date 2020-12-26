// API呼び出し時にひつようなパラメータを受ける。
function send(file, predict) {

    // APIキーとURL
    var API_KEY = 'DZZ2gMQrsiVreHBQqPgTQXczoJieyebo';
    var END_POINT = 'https://api.a3rt.recruit-tech.co.jp/image_influence/v1/meat_score';

    // TODO: サンプルの値を設定
    const score = "3.00";

    // 予想点数(predict)と画像(imagefile)の変数
    const PREDICT = $('#predict').val()
    const IMAGE_FILE = $('#imageContainer').val()
    // TODO: API呼び出し
    $.ajax({
        url   : END_POINT,
        method: 'POST',
        data  : {
            apikey   : API_KEY,
            predict  : PREDICT,
            imagefile: IMAGE_FILE
        },
        xhrFields: {
            withCredentials: true
        },

    }).done(function(data) {
        console.log('success')
        score = data.results[0]['score'];
    }).fail(function(data) {
        console.log('failed');
    });

    // Responseとして返却されたスコアを引数に渡す。
    scoreRendering(score);
};

window.send = send;
