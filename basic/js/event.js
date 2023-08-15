  // output-btnというidを持つHTML要素を取得し、定数に代入する
  const btn = document.getElementById('output-btn');
 
  // HTML要素がクリックされたときにイベント処理を実行する
  btn.addEventListener('click', () => {
    console.log('クリックされました！');
  });

    // add-btnというidを持つHTML要素を取得し、定数に代入する
    const addBtn = document.getElementById("add-btn");
    // parent-listというidを持つHTML要素を取得し、定数に代入する
    const parentList = document.getElementById("parent-list");

    addBtn.addEventListener("click",  () => {
      const childList = document.createElement("li");
      childList.textContent = "これはリスト要素です";
      parentList.appendChild(childList);
    });

 
  