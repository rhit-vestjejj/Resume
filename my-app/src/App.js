import './App.css';
import { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [page, setPage] = useState(0);

  function changePage(index) {
    setPage(index);
  }

  function Overview() {
    return (
      <div>
        <NavBar />
        <div className = "educationBox aboutBox aboutBox3Collum">
            <div className = "mainLogoSmall">
              <img src = "images/logo.png" alt = "mainLogo" id = "mainLogo"></img>
            </div>
            <br />
            <div className = "aboutSmallText">
              <h1 id = "nameHeader">Jean-Paul Vestjens</h1>
              <p id = "aboutMe"> I am a globally-minded Computer Science student with experience living on three continents, fluent in English and Dutch, and skilled at navigating diverse cultural environments. Seeking a summer internship to apply technical skills in software development.</p>
            </div>
        </div>
        <div className = "overview mains">
          <div>

          </div>
          <div className = "overviewCollum">
            <div className = "projectExample">
              <a href = "https://github.com/rhit-vestjejj/PokerHandPrediction">PokerHandPrediction</a>
              <div className = "publicBoxOverview">Public</div>
              <p class = "projectExampleText">Predicts what hand you have or someone else has in poker based on what 5 cards are showing</p>
            </div>
            <div className = "projectExample">
              <a href = "https://github.com/rhit-vestjejj/Resume">Resume</a>
              <div className = "publicBoxOverview">Public</div>
              <p class = "projectExampleText">My resume and where I can keep all of the different project that I have done</p>  
            </div>
            <div className = "projectExample">
              <a href = "https://github.com/rhit-vestjejj/All-Projects">All-Projects</a>
              <div className = "publicBoxOverview">Public</div>
              <p class = "projectExampleText">All my project in one place</p>  
            </div>
          </div>
          <div className = "overviewCollum">
            <div className = "skillsTab">
              Programming languages
              <li>React</li>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Html</li>
              <li>Css</li>
            </div>
            <hr />
            <div className = "skillsTab">
              Technologies
              <li>Web development</li>
              <li>Cryptocurrency Protocalls</li>
              <li>Git</li>
              <li>Github</li>
              <li>VS-code</li>
              <li>Eclipse</li>
              <li>Firebase</li>
            </div>
            <hr />
            <div className = "skillsTab">
              Operating Systems
              <li>Windows</li>
              <li>MacOs</li>
              <li>Linux</li>
            </div>
            <hr />
            <div className = "skillsTab">
              Languages
              <li>English (fluent)</li>
              <li>Dutch (fluent)</li>
              <li>Spanish (conversational)</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function Education() {
    return (
      <div>
        <NavBar />
        <div className = "educationBox aboutBox aboutBox3Collum">
            <div className = "mainLogoSmall">
              <img src = "images/logo.png" alt = "mainLogo" id = "mainLogo"></img>
            </div>
            <br />
            <div className = "aboutSmallText">
              <h1 id = "nameHeader">Jean-Paul Vestjens</h1>
              <p id = "aboutMe"> I am a globally-minded Computer Science student with experience living on three continents, fluent in English and Dutch, and skilled at navigating diverse cultural environments. Seeking a summer internship to apply technical skills in software development.</p>
            </div>
        </div>
        <div className = "education mains">
          <div>

          </div>
          <div className = "educationBox educationBoxText">
            <h1>College</h1>
            <h2><strong>Bachelor of Science, Computer Science</strong></h2>
            <h4 style={{
              fontWeight: "normal",
            }}>Rose-Hulman Institute of Technology, Terre Haute, IN</h4>
            <p>Useful classes</p>
            <li>Data Structures and Algorithms</li>
            <li>Object-Oriented Software Development</li>
            <li>Intor to Computer Systems</li>
            <li>Intro to Digital Systems</li>
            <li>Intro to Software Development</li>
            <li>Intro to Web Programming</li>
            <li>Computer Architecture I</li>
            <li>intro to Database Systems</li>
            <li>Cybersecurity Seminar</li>
            <li>Differential Equations I</li>
            <li>Physics II</li>
            <h1>High School</h1>
            <h2><strong>High School Deploma</strong></h2>
            <h4 style = {{
              fontWeight: "normal",
            }}>Whitefield High School, Saint Louis, MO</h4>
            <p>Useful Classes</p>
            <li>AP Comp Sci A</li>
            <li>AP Statistics</li>
            <li>AP Calculus AB</li>
            <li>AP Calculus BC</li>
            <li>Web developement</li>
          </div>
        </div>
      </div>
    );
  }
  
  function Experience() {
    return (
      <div>
        <NavBar />
        <div className = "educationBox aboutBox aboutBox3Collum">
            <div className = "mainLogoSmall">
              <img src = "images/logo.png" alt = "mainLogo" id = "mainLogo"></img>
            </div>
            <br />
            <div className = "aboutSmallText">
              <h1 id = "nameHeader">Jean-Paul Vestjens</h1>
              <p id = "aboutMe"> I am a globally-minded Computer Science student with experience living on three continents, fluent in English and Dutch, and skilled at navigating diverse cultural environments. Seeking a summer internship to apply technical skills in software development.</p>
            </div>
        </div>
        <div className = "experience mains">
          <div>

          </div>
          <div className = "experienceBox">
            <h1>Computer Science Experience</h1>
            <h2>Webstite Development</h2>
            <li>Developed multiple websites using React, HTML, JavaScript, and CSS. Including a portfolio page, many practice websites, and projects in classes.</li>
            <li>Created interavtive web pages and worked collaboratively with classes to integrate features</li>
            <h2>Cryptocurrency Protocalls Development</h2>
            <li>Attenede a summer camp at which I learned python programming and the basics of cryptocurrency</li>
            <li>Built a basic blockchain prototype in python, focusing on how transactions are verified</li>
            <h2>Java Programming</h2>
            <li>Completed a high school (AP), and College level java course. In which I learned key concepts like object-oriented programming, data structures, and debugging</li>
            <h1>Cultural Experience</h1>
            <li>Lived on 3 different continents, gained exposure to diverse cultures and perspectives</li>
            <li>In Hong Kong attened an international school for 4 years, with over 40 different nationalities, enhancing my undersyand of cross-cultural communcation and adaptability</li>
            <h1>Work Expeience</h1>
            <h2>Tennis Coach Shaw Park Tennis, Saint Louis, MO</h2>
            <li>Taught tennis to kids, focusing on skill developement and teamwork</li>
            <li>Maintained courts and ensured a positive experience for participarnts</li>
            <li>Assisted with event coordination and made snow cones during events</li>
            <h2>Chess Coach, Saint Louis, MO</h2>
            <li>Tutored children in chess, focusing on strategic thinking and problem-solving skills</li>
            <li>Helped students prepare for and compete in chess tournaments, fostering a competitive yet supportive environment</li>
          </div>
        </div>
      </div>
    );
  }
  
  function Projects() {
    return (
      <div>
        <NavBar />
        <div className = "educationBox aboutBox aboutBox3Collum">
            <div className = "mainLogoSmall">
              <img src = "images/logo.png" alt = "mainLogo" id = "mainLogo"></img>
            </div>
            <br />
            <div className = "aboutSmallText">
              <h1 id = "nameHeader">Jean-Paul Vestjens</h1>
              <p id = "aboutMe"> I am a globally-minded Computer Science student with experience living on three continents, fluent in English and Dutch, and skilled at navigating diverse cultural environments. Seeking a summer internship to apply technical skills in software development.</p>
            </div>
        </div>
        <div className = "project mains">
          <div>

          </div>
          <div className = "projectBox">
            <hr />
            <div className = "react publicBoxProject">Public</div>
            <h2><a href = "https://github.com/rhit-vestjejj/React" style = {{
              fontWeight: "normal",
            }}>React</a></h2>
            <p className="projectText">Practicing React</p>
            <br />
            <hr />
            <div className = "allProjects publicBoxProject">Public</div>
            <h2><a href = "https://github.com/rhit-vestjejj/All-Projects" style = {{
              fontWeight: "normal",
            }}>All-Projects</a></h2>
            <p className = "projectText">All my projects in one place</p>
            <br />
            <hr />
            <div className = "webscrape publicBoxProject">Public</div>
            <h2><a href = "https://github.com/rhit-vestjejj/Resume" style = {{
              fontWeight: "normal",
            }}>WebScraping</a></h2>
            <p className = "projectText">My web scraping projects that include practice and a working job scraper for internships</p>
            <br />
            <hr />
            <div className = "poker publicBoxProject">Public</div>
            <h2><a href = "https://github.com/rhit-vestjejj/PokerHandPrediction" style = {{
              fontWeight: "normal",
            }}>PokerHandPrediction</a></h2>
            <p className = "projectText">Predicts what hand you have or someone else has in poker based on what 5 cards are showing</p>
            <br />
            <hr />
            <div className = "toDoIstClone publicBoxProject">Public</div>
            <h2><a href = "https://github.com/rhit-vestjejj/toDoIstClone" style = {{
              fontWeight: "normal",
            }}>toDoIstClone</a></h2>
            <p className = "projectText">toDoIst clone</p>
            <br />
            <hr />
            <div className = "resume publicBoxProject">Public</div>
            <h2><a href = "https://github.com/rhit-vestjejj/Resume" style = {{
              fontWeight: "normal",
            }}>Resume</a></h2>
            <p className = "projectText">My resume and where I can keep all my different projects that I have done</p>
            <br />
            <hr />
          </div>
        </div>
      </div>
    );
  }
  
  function Contact() { 
      return (
        <div>
          <NavBar />
          <div className = "educationBox aboutBox aboutBox3Collum">
            <div className = "mainLogoSmall">
              <img src = "images/logo.png" alt = "mainLogo" id = "mainLogo"></img>
            </div>
            <br />
            <div className = "aboutSmallText">
              <h1 id = "nameHeader">Jean-Paul Vestjens</h1>
              <p id = "aboutMe"> I am a globally-minded Computer Science student with experience living on three continents, fluent in English and Dutch, and skilled at navigating diverse cultural environments. Seeking a summer internship to apply technical skills in software development.</p>
            </div>
          </div>
          <div className = "contact mains">
            <div>

            </div>
            <div className = "contactBox">
              <div className = "infoBox">
                <h2 stlye = {{
                  fontWeight: "normal",
                }}>Contact me</h2><br />
                <p>Email: jvestjens@yahoo.com</p><br />
                <p>LinkedIn: <a href = "https://www.linkedin.com/in/jean-paul-vestjens-376415335/">Jean-Paul Vestjens</a></p><br />
                <p>Phone: (314) 915-1969</p>
              </div>
            </div>
            <div className = "contactBox">
              
            </div>
          </div>
        </div>
      );
  }
  
  function NavBar() {
    return (
      <div className="NavBar">
        <a href = "https://github.com/rhit-vestjejj"><img src = "images/github.png" alt = "github logo" id = "gitLogo"></img></a>
        <p id = "navName">Jean-Paul Vestjens</p>
        <button className={`leftMost navBtn ${page === 0 ? 'active' : ''} ove`} onClick={() => changePage(0)}>▣ Overview</button>
        <button className={`navBtn ${page === 1 ? 'active' : ''} edu`} onClick={() => changePage(1)}>✐ Education</button>
        <button className={`navBtn ${page === 2 ? 'active' : ''} exp`} onClick={() => changePage(2)}>✦ Experience</button>
        <button className={`navBtn ${page === 3 ? 'active' : ''} pro`} onClick={() => changePage(3)}>⚙ Projects</button>
        <button className={`navBtn ${page === 4 ? 'active' : ''} con`} onClick={() => changePage(4)}>☎ Contact</button>
        <img src = "images/logo.png" alt = "miniLogo" id = "miniLogo"></img>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <SpeedInsights/>
        {page === 0 && <Overview />}
        {page === 1 && <Education />}
        {page === 2 && <Experience />}
        {page === 3 && <Projects />}
        {page === 4 && <Contact />}
      </header>
    </div>
  );
}

export default App;