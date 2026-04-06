'use client';

import { useState } from 'react';
import { getTranslation } from '@/utils/i18n';
import * as S from './style';

interface ContactSectionProps {
  lang: string;
}

export const ContactSection = ({ lang }: ContactSectionProps) => {
  const t = getTranslation(lang, 'contactSection');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'empty' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (form.name && form.email && form.message) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else if (!form.name || !form.email || !form.message) {
      setStatus('empty');
    } else {
      setStatus('error');
    }
  };

  return (
    <S.Section id="ContactSection">
      <S.FormsBox>
        <S.Form onSubmit={handleSubmit} noValidate>
          <S.Ttile>{t('title')}</S.Ttile>

          <label htmlFor="name">{t('name')}</label>
          <S.Input
            id="name"
            type="text"
            name="name"
            placeholder={t('namePlaceholder')}
            value={form.name}
            onChange={handleChange}
            required
            aria-required="true"
          />

          <label htmlFor="email">{t('email')}</label>
          <S.Input
            id="email"
            type="email"
            name="email"
            placeholder={t('emailPlaceholder')}
            value={form.email}
            onChange={handleChange}
            required
            aria-required="true"
          />

          <label htmlFor="message">{t('message')}</label>
          <S.TextArea
            id="message"
            name="message"
            placeholder={t('messagePlaceholder')}
            value={form.message}
            onChange={handleChange}
            required
            aria-required="true"
            rows={5}
          />

          <S.Button type="submit">{t('submit')}</S.Button>

          {status === 'success' && <span style={{ color: 'green', marginTop: '1rem' }}>{t('submitSuccess')}</span>}
          {status === 'empty' && <span style={{ color: 'red', marginTop: '1rem' }}>{t('submitEmpty')}</span>}
          {status === 'error' && <span style={{ color: 'red', marginTop: '1rem' }}>{t('submitError')}</span>}
        </S.Form>
      </S.FormsBox>
    </S.Section>
  );
};
