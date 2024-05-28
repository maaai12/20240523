let currentData = [];

const saveStorage = () => {
    localStorage.setItem('_Data', JSON.stringify(currentData));
}

const loadStorage = () => {
    let data = localStorage.getItem('_Data');
    try{
        data = JSON.parse(data);
    }catch(e){
        data = [];
    }

    currentData = data;

    data.map((objData, index)=>{
        addRow(objData.name);
    });
}

const saveData = (name) => {
    currentData.push({
        name
    });
    addRow(name);
    saveStorage();
}

const addRow = (name) => {
    //テキストボックスの値を取得し、初期化する
    const inputText = name;
    document.getElementById("add-text").value = ""; // optional

    //未完了リストに追加
    createInconpleteTodo(inputText);
}

//渡された引数を基に未完了のTODOを作成する関数
const createInconpleteTodo = (todo) => {
//li生成
const li = document.createElement("li"); 

//div生成
const div = document.createElement("div"); 
div.className = "list-row";

//p生成
const p = document.createElement("p"); 
p.className = "todo-item";
p.innerText = todo;

//button(完了)タグ生成
const completeButton = document.createElement("button");
completeButton.innerText = "完了";
completeButton.addEventListener("click", () => {
//押された完了ボタンの親にあるliタグを未完了リストから削除
const moveTrget = completeButton.closest("li");
completeButton.nextElementSibling.remove();
completeButton.remove();
//戻すボタンを生成してdivタグ配下に設定
const backButton = document.createElement("button");
backButton.innerText = "戻す";
backButton.addEventListener("click", () => {
//TODOの内容を取得し、未完了リストに追加
const todoText = backButton.previousElementSibling.innerText;
createInconpleteTodo(todoText);
//押された戻すボタンの親にあるlitタグを削除
backButton.closest("li").remove();
})
moveTrget. firstElementChild.appendChild(backButton);
//完了リストに移動
document.getElementById("conplete-list").appendChild(moveTrget);
});

//button(削除)タグ生成
const deleteButton = document.createElement("button");
deleteButton.innerText = "削除";
deleteButton .addEventListener("click", () => {
//押された削除ボタンの親にあるliタグを未完了リストから削除
const deleteTarget = deleteButton.closest("li");
document.getElementById("inconplete-list").removeChild(deleteTarget);
});

//liタグの子要素に各要素を設定
div.appendChild(p);
div.appendChild(completeButton);
div.appendChild(deleteButton);
li.appendChild(div);

//未完了リストに追加
document.getElementById("inconplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click",()=>{
    saveData(document.getElementById("add-text").value)
});

loadStorage();

// const onClickAdd = () => {

//    const inputText = document.getElementById("add-text").value;
//    document.getElementById("add-text").value = "";


//   const li = document.createElement("li"); 
 

//   const div = document.createElement("div"); 
//   div.className = "list-row";

//   const p = document.createElement("p"); 
//   p.className = "todo-item";
//   p.innerText = inputText;

//   //button(完了)タグ生成
//   const completeButton = document.createElement("button");
//   completeButton.innerText = "完了";
//   completeButton.addEventListener("click", () => {
//     alert("完了");
//  });

// //button(削除)タグ生成
//   const deleteButton = document.createElement("button");
//   deleteButton.innerText = "削除";
//   deleteButton .addEventListener("click", () => {
//     //押された削除ボタンの親にあるliタグを未完了リストから削除
//     const deleteTarget = deleteButton.closest("li");
//     document.getElementById("inconplete-list").removeChild(deleteTarget);
//  });

// //liタグの子要素に各要素を設定
//   div.appendChild(p);
//   div.appendChild(completeButton);
//   div.appendChild(deleteButton);
//   li.appendChild(div);

//   //未完了リストに追加
//   document.getElementById("inconplete-list").appendChild(li);
// }
