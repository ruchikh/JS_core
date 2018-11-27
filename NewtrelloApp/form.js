function listForm(){
	var form = createNode('form')
	form.innerHTML = `<input type="text" name="" class="list-text"/>
  <input type="submit" class="list-submit" value="Add"/>`;
  form.style.display = 'none';
  return form;
 
}
