import * as S from './style';
import { Header } from '@/components/Header';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: lang } = await params;

  return (
    <S.Container>
      <Header lang={lang} />
      <S.LogoContent>
        <S.InfoContent>
          <S.Title></S.Title>
        </S.InfoContent>
      </S.LogoContent>
    </S.Container>
  );
}