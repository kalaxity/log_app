const baseArea      = document.getElementById("base");
const numberArea    = document.getElementById("number");
const equalButton   = document.getElementById("equal");
const answerArea    = document.getElementById("answer");

// サービスワーカーを登録
// サービスワーカーの動作はserviceworker.jsに書いてある
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./serviceworker.js");
}

// 「＝」ボタンを押した際の処理を登録
equalButton.addEventListener("click", () => {
    let base = Number(baseArea.value);
    let number = Number(numberArea.value);
    let ans;

    // 例外処理 - 真数条件の確認など
    if (base == 1 || base == 0 || number == 0) {
        ans = "計算不能";
    } else {
        ans = Math.log(number) / Math.log(base);
    }

    answerArea.value = ans;
});