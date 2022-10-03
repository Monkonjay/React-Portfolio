import './App.css';
import img1 from './images/webmaster.jpg';
// import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <div>
  <header>
    <h1>Robert M Greene</h1>
    <nav>
      <a href="#profile">About Me</a>
      <a href="#portfolio">Projects</a>           
      <a href="assets/images/resume-sample.pdf" target="_blank">Resume</a>           
      <a href="#contact">Contact Me</a>
    </nav>
  </header>   
  <section className="banner">
    <div>
      <img src={img1} alt="graduation photo" />
    </div>
  </section>
  <main>
    {/* sidebar */}
    <aside id="profile">   
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem alias sequi pariatur accusantium amet hic! Sapiente, quisquam atque. Maxime unde distinctio pariatur nesciunt a adipisci rem tempore molestiae. Quidem tempore quis recusandae animi sunt eveniet, nostrum, inventore quod vel vitae similique cumque! Adipisci ducimus enim iste eaque at sint nobis dolor beatae dolorum vitae distinctio similique, qui deserunt in voluptatibus esse quae non eum saepe accusantium cupiditate maxime libero? Libero iste saepe, aliquid minus eius sed harum explicabo nam. Ea facilis, aliquid accusantium libero sint hic. Magni nam, sit animi mollitia vel at neque, repellendus, sapiente soluta a cupiditate. Maxime officiis architecto, adipisci deleniti itaque reprehenderit quia. Deleniti adipisci mollitia nostrum impedit repudiandae, error porro officiis officia quaerat aut, pariatur id facilis consectetur explicabo dolorem temporibus quam voluptatibus? Dolor repellendus dignissimos iste accusantium placeat molestias tempore neque nihil expedita modi voluptatum quod enim sunt accusamus vitae et, reprehenderit tempora?</p>           
    </aside>
    {/* main porfolio section */}
    <section id="portfolio">
      <h2>Projects</h2>
      <div className="container">
        <a href="https://github.com/Monkonjay/nano-projects" target="blank_" className="project adventure_game">
          <div className="project_description">
            <h3>Adventure Game</h3>
            <span>Python</span>
          </div>
        </a>
        {/* placce temp page for project links */}
        <a href="https://reservation-bonappetit.herokuapp.com/login" target="blank_" className="project reservation">
          <div className="project_description">
            <h3>Restaurant Reservation</h3>
            <span>node, express, Sequelize</span>
          </div>
        </a>   
        <a href="https://jackyouk.github.io/B4UBoard/" target="blank_" className="project group_project">
          <div className="project_description">
            <h3>Group Project</h3>
            <span>jQuery</span>
          </div>
        </a> 
        <a href="./under_construction.html" target="blank_" className="project store">
          <div className="project_description">
            <h3>Online Store</h3>
            <span>HTML, CSS, Javascript</span>
          </div>
        </a> 
        <a href="https://monkonjay.github.io/Password-Generator/" target="blank_" className="project password">
          <div className="project_description">
            <h3>Password Generator</h3>
            <span>JavaScript</span>
          </div>
        </a> 
      </div>
    </section>
    <h2> Contact Me</h2>
    <section id="contact">
      <div>
        <address id="contact_content">
          <a href="tel:+15597089374">559.708.9374</a>
          <a href="mailto:greenbert81@gmail.com">greenbert81@gmail.com</a>
          <a href="https://github.com/Monkonjay/">Github</a>
          <a href="#">LinkedIn</a>
        </address>
      </div>
    </section>
  </main>
</div>


    </>
  );
}

export default App;
