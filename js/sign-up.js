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
            document.getElementById('success-container').style.display="block";
            const animation=lottie.loadAnimation({
                container: document.querySelector('.lottie'),//アニメーションを表示させたい要素
                renderer: 'svg',//レンダリング形式(svg / html / canvasを指定)
                loop: 'false',//アニメーションのループをさせるか（true / false / 数値を指定）
                autoplay: 'true',//アニメーションの自動再生をさせるか（true / falseを指定）
                path: './success.json'//アニメーションのjsonファイルのパス
            });
            animation.addEventListener('complete', function() {
                setTimeout(()=>{
                    window.location.href = 'app-onboarding.html'; // ここに次のページのURLを指定
                },2000);
            });
        });
    } else {
        submitButton.disabled = true;
        caution.style.opacity = '1';
        submitButton.style.backgroundColor = 'F4F1EE';
        submitButton.style.color = '2E6530';
    }
});

