const init = function(e) {
    let btn = document.querySelector("#block1");
    btn.addEventListener('click', function() {
        window.document.location = './new5.html';
    });
};
    document.addEventListener('DOMContentLoaded', function(){
    init();});


    const init1 = function(e) {
        let btn = document.querySelector("#block2");
        btn.addEventListener('click', function() {
            window.document.location = './new3.html';
            
        });
    };
    document.addEventListener('DOMContentLoaded', function(){
        init1();});


    const init2 = function(e) {
        let btn = document.querySelector("#block3");
        btn.addEventListener('click', function() {
            window.document.location = './new4.html';
            });
        };
    document.addEventListener('DOMContentLoaded', function(){
            init2();});

