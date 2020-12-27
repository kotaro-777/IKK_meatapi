// API呼び出し時にひつようなパラメータを受ける。
function send(file, predict) {

    // APIキーとURL
    var API_KEY = 'DZZ2gMQrsiVreHBQqPgTQXczoJieyebo';
    var END_POINT = 'https://api.a3rt.recruit-tech.co.jp/image_influence/v1/meat_score';

    // TODO: サンプルの値を設定
    var score = 3;
    // const score;

    // TODO: API呼び出し
    const fd = new FormData();
    fd.append('apikey', API_KEY);
    fd.append('predict', predict);
    fd.append('imagefile', file);

    $.ajax({
        url:    END_POINT,
        method: 'POST',
        processData: false,
        contentType: false,
        data: fd,
        xhrFields: {
            withCredentials: true
        },

    }).done(function(data) {
        console.log('success');
        console.log(data);
        score = data.result[0].score;
    }).fail(function(data) {
        console.log('failed');
        console.log(data);
    });
    // Responseとして返却されたスコアを引数に渡す。
    scoreRendering(score);
};

window.send = send;
