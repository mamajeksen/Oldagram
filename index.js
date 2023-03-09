const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
 ]



  
  
  const vanGoghEl = document.getElementById("vangogh-name")
  const vanGoghCountry = document.getElementById("van-country")
  const vanLikes = document.getElementById("van-likes")
  const vanUser = document.getElementById("van-user")
  const vanCom = document.getElementById("van-com")


   let vanGogh = posts.find(vanGogh => vanGogh.name === "Vincent van Gogh")

   vanGoghEl.textContent = vanGogh.name
   vanGoghCountry.textContent = vanGogh.location
   vanLikes.textContent = vanGogh.likes + " likes"
   vanCom.textContent = vanGogh.comment 
   vanUser.textContent = vanGogh.username 
   vanCom.textContent = vanGogh.comment




  const courbetEl = document.getElementById("courbet-name")
  const courbetCountry = document.getElementById("courbet-country")
  const courbetLikes = document.getElementById("courbet-likes")
  const courbetUser = document.getElementById("courbet-user")
  const courbetCom = document.getElementById("courbet-com")



  let courbet = posts.find(courbet => courbet.name === "Gustave Courbet")

  courbetEl.textContent = courbet.name
  courbetCountry.textContent = courbet.location
  courbetLikes.textContent = courbet.likes + " likes"
  courbetCom.textContent = courbet.comment 
  courbetUser.textContent = courbet.username 
  courbetCom.textContent = courbet.comment
 
 
 
  const ducreuxEl = document.getElementById("ducreux-name")
  const ducreuxCountry = document.getElementById("ducreux-country")
  const ducreuxLikes = document.getElementById("ducreux-likes")
  const ducreuxUser = document.getElementById("ducreux-user")
  const ducreuxCom = document.getElementById("ducreux-com")



  let ducreux = posts.find(ducreux => ducreux.name === "Joseph Ducreux")

  ducreuxEl.textContent = ducreux.name
  ducreuxCountry.textContent = ducreux.location
  ducreuxLikes.textContent = ducreux.likes + " likes"
  ducreuxCom.textContent = ducreux.comment 
  ducreuxUser.textContent = ducreux.username 
  ducreuxCom.textContent = ducreux.comment

 
 
 
 
 
 
 
 
 
 
 
 
 
//  const heartArray = document.getElementsByClassName("heart")
 
 
//  heartArray.forEach (heart => heart.addEventListener("click", function() {
     
//         posts[0].likes += 1 
     
//  }))
 
 
 
 
 
 
 
 
 
 
 
//  for(let i = 0; i < posts.length; i++){
     
//      let post = posts[i]
     
     
     
//  }