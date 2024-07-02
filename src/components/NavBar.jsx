import logo from '../assets/GayathriLogo1.png'
import { SiAboutdotme } from 'react-icons/si';
import { GrTechnology } from 'react-icons/gr';
import { AiTwotoneExperiment } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { RiContactsLine } from 'react-icons/ri';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = () => {
  return (
    <nav className='mb-14 flex items-center justify-between py-1'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-32' src={logo} alt='logo'/>
        </div>

        <div className='m-8 flex items-center justify center gap-6 text-2xl'>
            <AnchorLink href='#aboutSection' target="_blank"><SiAboutdotme/></AnchorLink>
            <AnchorLink href='#technologySection' target="_blank"><GrTechnology/></AnchorLink>
            <AnchorLink href='#experienceSection' target="_blank"><AiTwotoneExperiment/></AnchorLink>
            <AnchorLink href='#projectSection' target="_blank"><CgWebsite/></AnchorLink>
            <AnchorLink href='#contactSection' target="_blank"><RiContactsLine/></AnchorLink>
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
