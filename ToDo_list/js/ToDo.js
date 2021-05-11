const lists =document.getElementById('lists');

const remove = deleteButton=>{
 const targetTask =deleteButton.closest('li');
 lists.removeChild(targetTask); 
}

function append() {
  const content =document.getElementById('content');
  if (content.value ===""){
    window.alert('タスクを入力してください！！')
    return
  }
  const text = document.createTextNode(content.value);
  const li = document.createElement('li');
  li.appendChild(text);
  
  const deleteButton =document.createElement('input');
  deleteButton.type ='button';
  deleteButton.value ='削除';
  deleteButton.className ='deleteButton';
  deleteButton.addEventListener('click',()=>remove(deleteButton));
  li.appendChild(deleteButton);

  lists.appendChild(li);

  content.value ="";
}

