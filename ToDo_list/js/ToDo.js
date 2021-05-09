function append() {
  let content =document.getElementById('content');
  if (content.value ===""){
    window.alert('タスクを入力してください！！')
    return
  }
  let text = document.createTextNode(content.value);
  let li = document.createElement('li');
  li.appendChild(text);
  let lists =document.getElementById('lists');
  lists.appendChild(li);

  content.value ="";
}

function remove() {
  let lists =document.getElementById('lists');
  childCount =lists.childElementCount;
  if (childCount === 0){
    window.alert('削除できません');
    return
  }else{
    let li = lists.getElementsByTagName('li')
    lists.removeChild(li[childCount-1])
  }
}