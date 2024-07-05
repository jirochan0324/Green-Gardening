const appBtn=document.getElementById('app-start-btn');
// console.log(appBtn)

appBtn.addEventListener('click',function(){
    location.href="./sign-up.html"

    // body要素にfade-outクラスを追加
    document.body.classList.add('fade-out');

    // 0.5秒後（アニメーションの長さ）にページをリダイレクト
    setTimeout(function() {
        window.location.href = '../sign-up.html';
    }, 10000); // 500ms
})