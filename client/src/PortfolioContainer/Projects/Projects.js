import React  from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import IMG1 from '../../assets/Projects/project1.jpg'
import IMG2 from '../../assets/Projects/project2.png'
import IMG3 from '../../assets/Projects/project3.png'

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

