export default function login(){
    
    return `<form action="/submit" method="post">
     <input type="name" placeholder="enter name" name="name">
     <br/><br>
     <input type="password" placeholder="enter password" name="password">
     <br/><br>
     <button>Submit</button>
      <a href='/'>Back to home</a>
    </form>`
}