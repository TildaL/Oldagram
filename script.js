const heartIcon = document.getElementById('icon-heart')

let likeDisplay= document.getElementById('likeNum')

let addLike = 21492;

heartIcon.addEventListener('click', function(){
    addLike = addLike + 1
    likeDisplay.textContent = addLike
})