import "./intro.scss";
import { LinkedIn, Mail, GitHub } from "@material-ui/icons";

export default function Intro() {

    return (
        <div className="intro" id="intro">
            <div className="icons">
                <div className="itemContainer">
                    <a href="https://www.linkedin.com/in/enzo-mourany-9b4a37228/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="https://github.com/enzo-mourany/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="mailto:enzo.mourany@outlook.com">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-at" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="4" />
                            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="explore">
                <div className="text">

                    <p>EXPLORE</p>
                </div>
            </div>
            <div className="left">
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>
                        <span>Enzo</span> Mourany
                    </h1>
                    <h3>French / Frontend Developer</h3>

                </div>
                <div className="buttons">
                    <div className="learnMore">
                        <a className="learnMoreBtn" href="#about">
                            Learn More
                        </a>
                    </div>
                    <div className="downloadPdf" >
                        <a href="../../../public/PDF/CV.pdf" target="_blank" rel="noopener noreferrer" download>Download CV</a>
                    </div>
                </div>
            </div>

        </div>

    )
}
