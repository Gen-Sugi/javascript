// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("output-btn");

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener("click", () => {
  console.log("クリックされました！");
});

// add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById("add-btn");
// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById("parent-list");

addBtn.addEventListener("click", () => {
  const childList = document.createElement("li");
  childList.textContent = "これはリスト要素です";
  parentList.appendChild(childList);
});

// ↓↓↓↓↓↓　文字数カウント　↓↓↓↓↓↓
const countBtn = document.getElementById("count-btn");

countBtn.addEventListener("click", () => {
  const text = document.forms.textForm.textBox.value;
  console.log(text.length + "文字");
});

// ↓↓↓↓↓↓　ラジオボタンの値獲得　↓↓↓↓↓↓
const areaBtn = document.getElementById("area-btn");

areaBtn.addEventListener("click", () => {
  const radioValue = document.forms.areaForm.area.value;
  console.log(radioValue);
});

const osBtn = document.getElementById("os-btn");

// チャックボックス
osBtn.addEventListener("click", () => {
  const osNames = document.forms.osForm.os;

  for (let i = 0; i < osNames.length; i++) {
    if (osNames[i].checked) {
      console.log(osNames[i].value);
    }
  }
});
