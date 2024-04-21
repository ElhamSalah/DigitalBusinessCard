

function Page(){
    return (
    <div className="main-page">
      <header>
            <div className = "Profile-picture">
            <img  ClassName="profile" src="./images/profile.jpg"  alt="Profile Image"   />
            </div>
        
        <div className = "Information" >
            <h1 >Elhama Salah</h1>
            <h3>Full Stack Web Developer</h3>
            <p><a href="#">Elhama `s Website</a></p>

        </div>

        <div className="btn-box">
            <button className="EmailBtn">
            <a href="mailto: elhamasalah@gmail.com" target="_blank" className="btn btn-email">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
            </svg>
                <span className="text">Email</span>
            </a>
            </button>

            <button className="LinkdenBtn"> 
            <a href="https://www.linkedin.com/in/elhama" target="_blank" className="btn btn-lnkd">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
                <span className="text">Linkedin</span>
            </a>

            </button>
        </div>
         
         <div className="main-info">
         <div className="about">

            <h4>About Me</h4>
            <p>
                My name is Elhama Salah, and I am web developer working remotely from Afghanistan. 
                I specialize in HTML, CSS, Java Script, Bootstrap, JQuery,PHP and MySQL.
                Aslo, I specialize in UI & UX & Web Design. I have the privilege of having internship in Code Weekend Community as a Full Stack Web Developer,
                a Web Designer in Digital Art Center, and a Graphic Designer in GAOTek.
            </p>

            </div>
            <div className="Interest">

            <h4>Interest</h4>
            <p>
             Web Development, Web Designing, Graphic Designing, Playing Football, Riding Bysicle, Reading Roman, Reading Psychology Book, Listening Music, Finding New Information.
            </p>

            </div>
         </div>
       
         <div className="footer-part">
            <div className="square-icon">
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-instagram"></i></a>
                <a href=""><i class="fa fa-github"></i></a>
             </div>
        </div> 

            </header> 
    </div>

)
}


ReactDOM.render(<Page />, document.getElementById("root"))