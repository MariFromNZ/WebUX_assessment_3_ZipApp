// (Mariia) created Footer component with image that linking to uiatetaiao.nz, address and link to terms of use
//-------------------------------------------------------------------------------------------------------------//
// should change css for footer_content_address after adding bootstrap 
import tuiTeTaiaoLogo from '../images/tuiTeTaiaoLogo.svg';
import './footerStyle.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_content">
            <a href="https://www.tuiatetaiao.nz/" rel="noreferrer" target="_blank">
                <img  src={tuiTeTaiaoLogo} alt="logo logo of tuiatetaiao website"/>
            </a>
            <div className="footer_content_address">
                <p>Level 3, 5 Willeston Street</p>
                <p>Rawlinsons House</p>
                <p>Wellington 6011</p>
                <p>New Zealand</p>
            </div>
            <a href="https://www.tuiatetaiao.nz/" rel="noreferrer" target="_blank">ZIP Website Terms of Use</a>
            </div>
        </div>
    );
}

export default Footer;