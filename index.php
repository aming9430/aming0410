<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./style/style1.css">
    <style>
        
    </style>
</head>
<body>
    <header>
        <h1>天氣查詢網站</h1>
    </header>
    <section id='container-info'>
        
            <p id='comment'><label for="" >請輸入城市名稱</label></p>
            <p><input type="text" id='city_search' placeholder="請在此輸入"></p>
            <input type="submit" value='搜尋' id='city_btn'>
        
</section>
<p id='city_err'>
    查無此城市名稱
</p>

<section id='search_info'>
    <p>
        <span class="info_title">城市名：</span>
        <span id='info_name'></span>
    </p>
    <p>
        <span class="info_title">氣溫：</span>
        <span id='info_temp'></span>
    </p>
    <p>
        <span class="info_title">濕度：</span>
        <span id='info_humid'></span>
    </p>
    <p>
        <span class="info_title">最高溫度：</span>
        <span id='info_temp_max'></span>
    </p>
    <p>
        <span class="info_title">最低溫度：</span>
        <span id='info_temp_min'></span>
    </p>
    <p>
        <span class="info_title">風速：</span>
        <span id='info_wind_speed'></span>
    </p>

    
    
    </section>

    <script src='./js/script.js'></script>

</body>
</html>