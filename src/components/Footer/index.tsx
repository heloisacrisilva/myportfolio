import { getTranslation } from '@/utils/i18n';
import * as S from './style';
import { FaLinkedin, FaWhatsapp, FaArrowUp, FaGithub } from 'react-icons/fa';

interface FooterProps {
  lang: string;
}

export const Footer = ({ lang }: FooterProps) => {
  const t = getTranslation(lang, 'footer');

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const LinkedinURI = 'https://www.linkedin.com/in/heloisacrissilva/';
  const GitHubURI = 'https://github.com/heloisacrisilva'

  return (
    <S.FooterContainer>
      <S.Links>
        <S.LinkIcon href={LinkedinURI} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </S.LinkIcon>
        <S.BackToTop onClick={handleBackToTop}>
          <FaArrowUp style={{ marginRight: 8 }} /> {t('backToTop')}
        </S.BackToTop>
        <S.LinkIcon href={GitHubURI} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </S.LinkIcon>
      </S.Links>
    </S.FooterContainer>
  );
};
