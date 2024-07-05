document.getElementById('id-input').addEventListener('input', function() {
    const inputField = document.getElementById('id-input');
    const caution = document.getElementById('caution');
    const submitButton = document.getElementById('button');
    const value = inputField.value;
    const container = document.getElementById('lottie-container');


    if (value === "") {
        caution.style.opacity = 0;
    } else if (/^\d{8}$/.test(value)) {
        submitButton.style.backgroundColor = '2E6530';
        submitButton.style.color = 'white';
        submitButton.disabled = false;
        caution.style.opacity = '0';
        submitButton.addEventListener('click',function(){
            // window.location.href = './app-onboarding.html';
            var animation=bodymovin.loadAnimation({
                container: document.getElementById('Lottie'),
                renderer: 'svg', // 描画形式
                loop: false, // trueにしたらループ。1回再生の場合はfalse
                autoplay: false, // 自動再生
                path: 'success.json' // jsonのパスを指定
            });
        });
    } else {
        submitButton.disabled = true;
        caution.style.opacity = '1';
        submitButton.style.backgroundColor = 'F4F1EE';
        submitButton.style.color = '2E6530';
    }
});



