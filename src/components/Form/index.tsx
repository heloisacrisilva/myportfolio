'use client';

import { useState } from 'react';
import { getTranslation } from '@/utils/i18n';
import * as S from './style';
import { useForm } from '@formspree/react';

interface ContactForm {
  lang: string;
}

export const ContactForm = ({ lang }: ContactForm) => {
  const t = getTranslation(lang, 'contactSection');
  const [form, setForm] = useState({ name: '', email: '', message: '', subject: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'loading' | 'error'>('idle');
  const [state, handleSubmitForm] = useForm(process.env.NEXT_PUBLIC_FORM_ID || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('loading');

    try {
      await handleSubmitForm(e);

      if (!state.errors) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', subject: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <S.FormsBox>
      <S.Form onSubmit={handleSubmit} noValidate>
        <S.Ttile>{t('title')}</S.Ttile>

        <label htmlFor="name">{t('name')}</label>
        <S.Input id="name" type="text" name="name" placeholder={t('namePlaceholder')} value={form.name} onChange={handleChange} required aria-required="true" />

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

        <label htmlFor="subject">{t('subject')}</label>
        <S.Input
          id="subject"
          type="text"
          name="subject"
          placeholder={t('subjectPlaceholder')}
          value={form.subject}
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
        {status === 'loading' && <span style={{ color: 'gray', marginTop: '1rem' }}>{t('submitLoading')}</span>}
        {status === 'error' && <span style={{ color: 'red', marginTop: '1rem' }}>{t('submitError')}</span>}
      </S.Form>
    </S.FormsBox>
  );
};
