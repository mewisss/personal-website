class MyHeader extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    
    <section class="nav">
    <div class ="logo">
        <h1 class="tr"><a href="index.html">
            <span style="color: #A288E3">m</span><!--
            --><span style="color: white">ichael</span><!--
            --><span style="color: #A288E3">l</span><!--
            --><span style="color: white">ewis</span>
        </a>    
        </h1>
    </div>

    <div class ="nav-links">
        <input type = "checkbox" id= "check">
        <label for ="check" class ="checkbtn">
         <i class="fa fa-bars"></i>
         </label>
        <ul>
            <li><a class = "index_nav" href="index.html">home</a></li>
            <li><a class = "about_nav" href="aboutme.html">about me</a></li>
            <li><a class = "projects_nav" href="projects.html">projects</a></li>
            <li><a class = "experience_nav" href="experience.html">experience</a></li>
            <li><a class = "contact_nav" href="contact.html">contact</a></li>
        </ul>
    </div>
</section>


`

  }
}

customElements.define('my-header',MyHeader)


class MyFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <footer class ="footer">
    <div class="foot-row">
                
    <div class="foot-col">
        <h1>
            <span style="color: #A288E3">m</span><!--
            --><span style="color: white">ichael</span><!--
            --><span style="color: #A288E3">l</span><!--
            --><span style="color: white">ewis</span> 
        </h1>
        <h3>michael.lewis3126@gmail.com</h3>
    </div>
    <div class="foot-col">
        <div class="effect">
            <div class="buttons">
                <a href='https://www.linkedin.com/in/michaellewis3126/' class="in" title="Join me on Linked In">
                    <i class="fa fa-linkedin"></i>
                </a>
                <a href ="mailto:michael.lewis3126@gmail.com" class="em" title="Contact me at michael.lewis3126@gmail.com">
                    <i class="fa fa-envelope-o"></i>
                </a>
                <a href='https://github.com/mewisss' class="git" title="My GitHub Repository">
                <i class="fa fa-github"></i>
                </a>
                
            </div>
        </div>
    </div>
</div>
    </footer>
    
`
  }
}

customElements.define('my-footer',MyFooter)

var aa = document.getElementsByClassName("navLinks");

    
function showMenu(){
    console.log(aa)
    aa.style.right = "0px";
}

function hideMenu(){
    aa.style.right = "-200px";
}