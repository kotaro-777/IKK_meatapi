// API呼び出し時にひつようなパラメータを受ける。
function send(file, predict) {

    // APIキーとURL
    var API_KEY = 'DZZ2gMQrsiVreHBQqPgTQXczoJieyebo';
    var END_POINT = 'https://api.a3rt.recruit-tech.co.jp/image_influence/v1/meat_score';

    // TODO: サンプルの値を設定
    const score = "3.00";

    // TODO: API呼び出し
    
    // Responseとして返却されたスコアを引数に渡す。
    scoreRendering(score);
};

window.send = send;