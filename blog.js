var blogElements = document.querySelector('#blogPost');
function getBlogPost(){
var blogTitle=localStorage.getItem("title") 
var blogUsarname=localStorage.getItem('username')
var blogContent=localStorage.getItem('content')

var titleElement=document.createElement('p')
var usernameEl=document.createElement('p')
var contentEl=document.createElement('p')

titleElement.textContent="title: "+blogTitle
usernameEl.textContent="username: "+blogUsarname
contentEl.textContent="content: "+blogContent

blogElements.appendChild(titleElement)
blogElements.appendChild(usernameEl)
blogElements.appendChild(contentEl)

}
getBlogPost()
