import { getTranslation } from '@/utils/i18n';
import * as S from './style';
import { FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

interface FooterProps {
  lang: string;
}

export const Footer = ({ lang }: FooterProps) => {
  const t = getTranslation(lang, 'footer');

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const LinkedinURI = 'https://www.linkedin.com/in/heloisacrissilva/'
  const WhatsAppURI = 'https://wa.me/5547992667703'

  return (
    <S.FooterContainer>
      <S.Links>
        <S.LinkIcon href={LinkedinURI} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </S.LinkIcon>
        <S.BackToTop onClick={handleBackToTop}>
          <FaArrowUp style={{ marginRight: 8 }} /> {t('backToTop')}
        </S.BackToTop>
        <S.LinkIcon href={WhatsAppURI} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </S.LinkIcon>
      </S.Links>
    </S.FooterContainer>
  );
};
