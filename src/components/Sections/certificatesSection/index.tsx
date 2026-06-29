'use client';

import { getTranslation } from '@/utils/i18n';
import * as S from './style';
import CertificatesCard from '@/components/Cards/CertificatesCard';
import { GiGraduateCap } from 'react-icons/gi';
import { PiCertificate } from 'react-icons/pi';
import { SiCisco, SiFalcon, SiGithub, SiUdemy } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { GrOracle } from 'react-icons/gr';
import { link } from 'fs';
import { TbLetterA } from 'react-icons/tb';

interface CetificateSectionProps {
  lang: string;
}

export const CetificatesSection = ({ lang }: CetificateSectionProps) => {
  const t = getTranslation(lang, 'certificatesSection');

  const stacks = [
    {
      title: t('cert1Title'),
      institute: 'UNISOCIESC',
      link: 'https://drive.google.com/file/d/1gW0clIpffe1c6ilEUJn9eeJb2SF7vLp4/view?usp=drive_link',
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
      link: 'https://drive.google.com/file/d/1nDPwklE4CmQQQ0bbfQIjbqWQ6B-TQub-/view?usp=drive_link',
      icon: <SiCisco />,
    },
    {
      title: t('cert5Title'),
      institute: 'AWS',
      link: 'https://www.credly.com/badges/0a04a7e8-426e-46d2-ad68-af7c4099ab92/print',
      icon: <FaAws />,
    },
    {
      title: t('cert6Title'),
      institute: 'ALURA',
      link: 'https://drive.google.com/file/d/1FjhzmBBRmLYBInV37dRc27o8nsIBK7ad/view?usp=drive_link',
      icon: <TbLetterA />,
    },
    {
      title: t('cert7Title'),
      institute: 'ORACLE',
      link: 'https://drive.google.com/file/d/1lpclYaiOyZlV2XMJYH3U2pDPMPY6WHl_/view?usp=drive_link',
      icon: <GrOracle />,
    },
    {
      title: t('cert8Title'),
      institute: 'UDEMY',
      link: 'https://drive.google.com/file/d/1W5kqnrmz4g5S87zrU7CyWRxXhzDo6xoW/view?usp=drive_link',
      icon: <SiUdemy />,
    },
    {
      title: t('cert10Title'),
      institute: 'PROWAY',
      link: 'https://drive.google.com/file/d/1LKejwXKRe_n1CfVg51NRxj3iUxA4-1J-/view?usp=drive_link',
      icon: <SiGithub />,
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
          <CertificatesCard
            key={stack.title}
            title={stack.title}
            institute={stack.institute}
            icon={stack.icon}
            progress={stack.progress}
            link={stack.link}
            t={stack.t}
          />
        ))}
      </S.CardsBox>
    </S.Section>
  );
};
