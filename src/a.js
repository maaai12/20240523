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
    const inputText = name;
    document.getElementById("add-text").value = ""; // optional

    const li = document.createElement("li"); 
 

    const div = document.createElement("div"); 
    div.className = "list-row";
  
    const p = document.createElement("p"); 
    p.className = "todo-item";
    p.innerText = inputText;

    //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
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
