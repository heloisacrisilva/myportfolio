'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';
import CertificatesCard from '@/components/Cards/CertificatesCard';
import { GiGraduateCap } from 'react-icons/gi';
import { PiCertificate } from 'react-icons/pi';
import { SiCisco, SiFalcon, SiUdemy } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { GrOracle } from 'react-icons/gr';

interface CetificateSectionProps {
  lang: string;
}

export const CetificatesSection = ({ lang }: CetificateSectionProps) => {
  const t = getTranslation(lang, 'certificatesSection');

  const stacks = [
    {
      title: t('cert1Title'),
      institute: 'UNISOCIESC',
      icon: <GiGraduateCap />,
    },
    {
      title: t('cert2Title'),
      institute: 'PROWAY',
      icon: <PiCertificate />,
      progress: true,
      t: t('progress'),
    },
    {
      title: t('cert3Title'),
      institute: 'ESCOLA CONQUER',
      icon: <PiCertificate />,
    },
    {
      title: t('cert4Title'),
      institute: 'CISCO NETWORKING ACADEMY',
      icon: <SiCisco />,
    },
    {
      title: t('cert5Title'),
      institute: 'AWS',
      icon: <FaAws />,
    },
    {
      title: t('cert6Title'),
      institute: 'ALURA',
      icon: <FaAws />,
    },
    {
      title: t('cert7Title'),
      institute: 'ORACLE',
      icon: <GrOracle />,
    },
    {
      title: t('cert8Title'),
      institute: 'UDEMY',
      icon: <SiUdemy />,
    },
    {
      title: t('cert9Title'),
      institute: 'WIZARD BY PEARSON',
      icon: <SiFalcon />,
    },
  ];

  return (
    <S.Section id="CertificatesSection">
      <S.TextBox>
        <S.Title>{t('title')}</S.Title>
      </S.TextBox>
      <S.CardsBox>
        {stacks.map((stack) => (
          <CertificatesCard key={stack.title} title={stack.title} institute={stack.institute} icon={stack.icon} progress={stack.progress} t={stack.t} />
        ))}
      </S.CardsBox>
    </S.Section>
  );
};
