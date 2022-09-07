// write your code here
document.addEventListener("DOMContentLoaded",()=>{
    fetch ("http://localhost:3000/images/1")
    .then(response=>response.json())
    .then(data=>{
     let title=document.querySelector("#card-title")
     title.textContent =data.title
     cardLikesBtnTag =document.querySelector("#like-button")
     let likesCount =document.querySelector("#like-count")
     let likesButton =document.querySelector("#like-button") 
     // likesCount.innerHTML =""
    
     cardLikesBtnTag.addEventListener("click",(event)=>{
         event.preventDefault()
         let input =document.querySelector("#like")
        console.log (likesCount)
        likesCount.innerHTML =Number(likesCount.innerHTML) + 1
     })
    })
    let commentList =document.querySelector("#comments-list")
    let commentForm =document.querySelector("#comment-form")
    commentList.innerHTML =""
    commentForm.addEventListener("submit",(event)=>{
        event.preventDefault()
        let input =document.querySelector("#comment")
       
        let p =document.createElement("p")
        p.textContent =input.value
        commentList.appendChild(p)
    })
     
})  

// let cardInfo;
// function cardRender (card){
//     console.log (card)
//     cardInfo =card
//     cardTitleTag =document.querySelector("#card-title")
//     cardImageTag =document.querySelector("#card-image")
//     cardLikesTag =document.querySelector("#like-count")
//     cardLikesBtnTag =document.querySelector("#like-button")
//     cardListTag =document.querySelector("#comments-list")
//     cardCommentFormTag =document.querySelector("#comment-form")
//     cardCommentInputTag =document.querySelector("#comment")

//     cardTitleTag.textContent = card.title
//     console.log (card.likes)
//     cardImageTag.src =card.image
//     cardLikesTag.textContent =`${card.likes}likes`

//     while(cardListTag.hasChildNodes()){
//         cardListTag.removeChild(cardListTag.lastChild)
//     }

//     card.comments.forEach(comment => {
//         let commentTag =document.createElement("li")

//         commentTag.textContent =comment.content
//         cardListTag.appendChild(commentTag)
//     })

//     likesCardBtnTag.addEventListener("click", ()=>{
//       card.likes +=1;
//         cardLikesTag.textContent =`${card.likes}likes`

//     })

//     cardCommentformTag.addEventListener("submit", (e)=>{
//         e.preventDefault();
//         let commentTag =document.createElement ("li")
//        commentTag =textContent =cardCommentInputTag.value;
//        cardListTag.appendChild(commentTag)

//        const newComment ={
//        id: card.comments.length +1,
//        imageId: 1,
//        content: cardCommentInputTag.value
//        }
//         card.comments.push(newComment);
//         fetch ("http://localhost:3000/images/1", {
//             method: "PATCH",
//             headers: {"content-Type":"application/json"},
//             body: JSON.stringify(card)

//         })
//         .then(response =>response.json())
//         .then(data =>console.log(data))
//         .catch(error =>console.log(`Error:${error}`));

//         fetch ("http://localhost:3000/comments/", {

//         method: "POST",
//         headers: {"content-Type":"application/json"},
//         body: JSON.stringify(newComment)

//         })
//         .then(Response =>Response.json())
//         .then(data =>console.log(data))
//         .catch(error =>console.log(`Error:${error}`));

//         // cardCommentFormTag.reset();
//     })
// };
//     function appendText(comment){
// document.querySelector("#comments-list").appendChild(comment)
//     }

// document.addEventListener("DOMContentLoaded", ()=>{
//     cardRender();
// })


// function fetchData(path=1){
//     fetch (`http://localhost:3000/images/${path}`)
//     .then(response =>response.json())
//     .then(data =>cardRender(data))
//     .catch(error =>console.log(`Error:${error}`));

// };
// fetchData ()  
