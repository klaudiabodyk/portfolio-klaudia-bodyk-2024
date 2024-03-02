import {Link} from "react-router-dom";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa6";
import {MdOutlineMail} from "react-icons/md";

export const navs = [
    <div>
        <h2>Contact</h2>
    <nav>
    <Link style={{ animationDelay: "0.7s" }} to={'https://github.com/klaudiabodyk'}>GitHub <FaGithub /></Link>
    <Link style={{ animationDelay: "0.8s" }} to={'mailto:klaudia.bodyk@icloud.com'}>Email <MdOutlineMail /></Link>
    <Link style={{ animationDelay: "0.9s" }} to={'https://www.instagram.com/kidianna/'}>Instagram <FaInstagram /></Link>
    <Link style={{ animationDelay: "1s" }} to={'https://www.linkedin.com/in/klaudia-bodyk/'}>LinkedIn <FaLinkedin /></Link>
    </nav>
    </div>,
];