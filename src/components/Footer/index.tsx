import { FooterStyle } from "./styles";
import instaImg from "../../assets/instagram.png";
import facebookImg from "../../assets/facebook.png";
import linkedinImg from "../../assets/linkedin.png";
import githubImg from "../../assets/github.png";

export function Footer() {
  return (
    <FooterStyle>
      <a className="start" href="/" target="_self" rel="início">Início</a>
      <a className="defaultIcons instagram" href="https://www.instagram.com/anderson.angello/" target="_blank">
        <img src={instaImg} alt="Ìcone instagram" />
      </a>
      <a className="defaultIcons facebook" href="https://www.facebook.com/anderson.angelo.98/" target="_blank">
        <img src={facebookImg} alt="Ìcone facebook" />
      </a>
      <a className="defaultIcons linkedin" href="https://www.linkedin.com/in/anderson-%C3%A2ngelo/" target="_blank">
        <img src={linkedinImg} alt="Ìcone linkedin" />
      </a>
      <a className="defaultIcons github" href="https://github.com/AndersonAngelo" target="_blank">
        <img src={githubImg} alt="Ìcone github" />
      </a>
      <div className="contentCredits">
        <p>Créditos</p>
        <a href="https://breakingbadapi.com/" target="_blank">
          The Breaking Bad API
        </a>
        <a href="https://www.flaticon.com/br/" target="_blank">
          Flaticon
        </a>
      </div>
      <p className="copyright">
      ©Breaking Bad Stars
      </p>
    </FooterStyle>
  )
}