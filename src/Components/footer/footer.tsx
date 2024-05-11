import React from 'react'; 
import './footer.css';

interface ContactInfo {
  id: number;
  icon: string;
  text: string | JSX.Element;
}

interface SocialMediaLink {
  icon: string;
  link: string;
}

const Footer: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    { id: 0, icon: 'fas fa-paper-plane', text: 'Almaty, Jubanova 321' },
    { id: 1, icon: 'fas fa-phone', text: <a href='tel:207-797-5700'>228-420-6969</a> },
    { id: 2, icon: 'fas fa-envelope', text: <a href="mailto:info@fitnessfactoryalmaty.com">info@fitnessfactoryalmaty.com</a> },
  ];

  const socialMediaLinks: SocialMediaLink[] = [
    { icon: 'fab fa-instagram', link: 'https://www.instagram.com/fitnessfactoryalmaty/' },
    { icon: 'fab fa-facebook', link: 'https://www.facebook.com/fitnessfactoryalmaty/' },
  ];

  return (
    <footer className="footer" id='footer'>
      <div className='footer-top-area'>
        <div className='footerfirst'>
          <h3 className='footerh3'>Свяжитесь с нами!</h3>
          <ul className='ul-footer'>  
            {contactInfo.map((contact) => (
              <li key={contact.id}>
                <i className={contact.icon}></i> {contact.text}
              </li>
            ))}
          </ul>
        </div>  
        <div className='footersecond'>
          <h3 className='footerh3'>Наши соцсети</h3>
          <div className='socialmedia'>
            <ul className='ul-footer1'>
              {socialMediaLinks.map((social, index) => (
                <li key={index}>
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <i className={social.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom-area'>
        <p>© Copyright Fitness Factory 2024. All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
