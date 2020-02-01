var Index = function () {

    /**
     * 初始化阿里云图片
     */
    var _init = function () {
        let aliyun_280_html = "";
        aliyun_280_html = "<div class='aliyun-280'>";
        aliyun_280_html += "<a href='https://www.aliyun.com/minisite/goods?userCode=srxdir6o' target='_blank'>";
        aliyun_280_html += "<img src='/images/aliyun_280.png'></a></div>";
        document.querySelector("#app .theme-container .sidebar").insertAdjacentHTML("afterbegin", aliyun_280_html);
    };

    /**
     * 设置图片路径
     * @param {图片路径} _path 
     */
    var _setHeroPath = function (_path) {
        let _img = document.querySelector("#app .hero img");
        if(null != _img){
            _img.src = _path;
        }
    };

    /**
     * 随机数
     */
    var _changeNumber = function () {
        let homeNumber = parseInt(Math.random() * 3 + 1);
        if (1 === homeNumber) {
            _setHeroPath("/images/confused.jpg");
        } else if (2 === homeNumber) {
            _setHeroPath("/images/record.jpg");
        }else{
            _setHeroPath("/images/lufei.jpg");
        }
    };

    return {
        init: function () {
            _init();
            _changeNumber();
        }
    }
}();
// 初始化
setTimeout("Index.init()", 500);