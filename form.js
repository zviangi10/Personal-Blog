const usernameEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');

const formEl = document.getElementById('goodForm');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
 
  const usernameValue = usernameEl.value;
  const titleValue = titleEl.value;
  const contentValue = contentEl.value;

  const blogInfo = {
    username: usernameValue,
    title: titleValue,
    content: contentValue
  }
  
  localStorage.setItem('username', usernameValue);
  localStorage.setItem('title', titleValue);
  localStorage.setItem('content', contentValue);

  localStorage.setItem('blogList', JSON.stringify(blogInfo));
});
 
