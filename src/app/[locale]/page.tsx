'use client';

import { useTranslations } from "next-intl";
import * as S from "./style";

export default function Home() {
  const t = useTranslations('Home')
  return (
    <S.Container >
      <S.LogoContent>
        <S.InfoContent>
          <S.Title>{t('title')}</S.Title>
        </S.InfoContent>
      </S.LogoContent>
    </S.Container>
  );
}
