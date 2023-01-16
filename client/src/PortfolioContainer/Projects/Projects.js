import React  from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import IMG1 from '../../assets/Projects/project1.jpg'
import IMG2 from '../../assets/Projects/project2.png'
import IMG3 from '../../assets/Projects/project3.png'
import IMG4 from '../../assets/Projects/project4.png'
import IMG5 from '../../assets/Projects/project5.png'
import IMG6 from '../../assets/Projects/project6.png'
import IMG7 from '../../assets/Projects/project7.png'
import IMG8 from '../../assets/Projects/project8.png'
import IMG9 from '../../assets/Projects/project9.png'
import IMG10 from '../../assets/Projects/project10.png'
import IMG11 from '../../assets/Projects/project11.png'
const data = [
    {
        id:1,
        image: IMG1,
        title: 'Portfolio Website',
        github: 'https://github.com/VolodymyrKoziupa/portfolio-volodymyr-koziupa',
        url: 'https://portfolio-volodymyr-koziupa.herokuapp.com/'
    },
    {
        id:2,
        image: IMG2,
        title: 'First to the top',
        github: 'https://github.com/VolodymyrKoziupa/First-to-the-top',
        url: 'https://lucent-churros-03a820.netlify.app/'
    },
    {
        id:3,
        image: IMG3,
        title: 'Guess My Number!',
        github: 'https://github.com/VolodymyrKoziupa/Guess-My-Number',
        url: 'https://bejewelled-gingersnap-640e6c.netlify.app/'
    },
    {
        id:4,
        image: IMG4,
        title: 'Rock-Paper-Scissors',
        github: 'https://github.com/VolodymyrKoziupa/Rock-Paper-Scissors',
        url: 'https://starlit-shortbread-fdc987.netlify.app/'
    },
    {
        id:5,
        image: IMG5,
        title: 'Photography Website',
        github: 'https://github.com/VolodymyrKoziupa/Photography-portfolio-Website',
        url: 'https://cool-madeleine-00d50d.netlify.app/'
    },
    {
        id:6,
        image: IMG6,
        title: 'Search Countries',
        github: 'https://github.com/VolodymyrKoziupa/Countries-search',
        url: 'https://resonant-truffle-e985c3.netlify.app/'
    },
    {
        id:7,
        image: IMG7,
        title: 'Bootstrap Website',
        github: 'https://github.com/VolodymyrKoziupa/Responsive-Website-With-Bootstrap',
        url: 'https://dreamy-melba-f5fc30.netlify.app/'
    },
    {
        id:8,
        image: IMG8,
        title: 'Responsive Website',
        github: 'https://github.com/VolodymyrKoziupa/Responsive-Website',
        url: 'https://warm-melomakarona-40ea88.netlify.app/'
    },
    {
        id:9,
        image: IMG9,
        title: 'Day/Night Website',
        github: 'https://github.com/VolodymyrKoziupa/Day-Night-Website',
        url: 'https://cozy-zuccutto-8467c5.netlify.app/'
    },
    {
        id:10,
        image: IMG10,
        title: 'Basketball game',
        github: 'https://github.com/VolodymyrKoziupa/Basketball-game',
        url: 'https://inquisitive-tapioca-eeecb1.netlify.app/'
    },
    {
        id:11,
        image: IMG11,
        title: 'EcoApp (work in progress)',
        github: 'https://github.com/VolodymyrKoziupa/EcoApp',
        url: 'https://github.com/VolodymyrKoziupa/EcoApp'
    },


]

export default function Projects(props){
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return(
        <div 
        className="main-container-project fade-in"
         id={props.id || ""}>
            
        <ScreenHeading title={'Projects'}/>
        <div className="project-container">
        {
    data.map(({id,image,title,github,url}) => {
        return(
            <article key={id} alt={title} className="project-item">
            <div className="project-item-image">
                <img src={image} alt="" className="img"/>
            </div>
            <h3>{title}</h3>
            <div className="project-item-cta">
            <a href={github} className="btn btn-git" target='_blank'>GitHub</a>
            <a href={url} className="btn btn-url" target='_blank' >Check It Out</a>
                       </div>
                        </article>
        )
    })
}



        </div>
    </div>
    )
}

