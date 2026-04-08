'use client';

import * as S from './style';
import { ContactForm } from '@/components/Form';

interface ContactSectionProps {
  lang: string;
}

export const ContactSection = ({ lang }: ContactSectionProps) => {
  return (
    <S.Section id="ContactSection">
      <ContactForm lang={lang} />
    </S.Section>
  );
};
