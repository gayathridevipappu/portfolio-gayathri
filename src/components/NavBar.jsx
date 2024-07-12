import logo from '../assets/gayathri_logo.gif'
import { SiAboutdotme } from 'react-icons/si';
import { GrTechnology } from 'react-icons/gr';
import { AiTwotoneExperiment } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { RiContactsLine } from 'react-icons/ri';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../assets/localStyles.css';

const NavBar = () => {
  return (
    <nav className='mb-14 flex items-center justify-between py-1' id='navSection'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mr-1 -mx-4 w-32' src={logo} alt='logo'/>
        </div>

        <div className='m-8 flex items-center justify center gap-6 text-2xl'>
          <AnchorLink href="#aboutSection" className="icon-link">
            <div className="icon-wrapper">
                <SiAboutdotme className="icon" />
                <span className="icon-text">About</span>
            </div>
          </AnchorLink>
          <AnchorLink href='#technologySection' className="icon-link">
            <div className="icon-wrapper">
              <GrTechnology className="icon" />
              <span className="icon-text">Technologies</span>
            </div>
          </AnchorLink>
          <AnchorLink href='#experienceSection' className="icon-link">
            <div className="icon-wrapper"> 
              <AiTwotoneExperiment className="icon" />
              <span className="icon-text">Experience</span>
            </div>
          </AnchorLink>
          <AnchorLink href='#projectSection' className="icon-link">
            <div className="icon-wrapper">
              <CgWebsite className="icon" />
              <span className="icon-text">Projects</span>
            </div>
          </AnchorLink>
          <AnchorLink href='#contactSection' className="icon-link">
            <div className="icon-wrapper"> 
              <RiContactsLine className="icon" />
              <span className="icon-text">Contact</span>
            </div>
          </AnchorLink>
        </div>

        {/* <div className='m-8 flex items-center justify center gap-4 text-2xl'>
            <AnchorLink href={GIT_LINK} target="_blank"><FaGithub/></AnchorLink>
            <AnchorLink href={LINKEDIN_LINK} target="_blank"><FaLinkedin/></AnchorLink>
            <AnchorLink href={INSTA_LINK} target="_blank"><FaInstagram/></AnchorLink>
        </div> */}
    </nav>
  )
}

export default NavBar
