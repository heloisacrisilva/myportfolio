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
  const [status, setStatus] = useState<'idle' | 'success' | 'loading' | 'error' | 'empty'>('idle');
  const [state, handleSubmitForm] = useForm(process.env.NEXT_PUBLIC_FORM_ID || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('loading');

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus('empty');
      return;
    }

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
    <S.Form onSubmit={handleSubmit} noValidate>
      <S.Title>{t('title')}</S.Title>

      <S.Label htmlFor="email">{t('email')}</S.Label>
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

      <S.Line>
        <S.InputContainer>
          <S.Label htmlFor="name">{t('name')}</S.Label>
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
        </S.InputContainer>
        <S.InputContainer>
          <S.Label htmlFor="subject">{t('subject')}</S.Label>
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
        </S.InputContainer>
      </S.Line>

      <S.Label htmlFor="message">{t('message')}</S.Label>
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

      <S.Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? t('submitLoading') : t('submit')}
      </S.Button>

      {status === 'success' && <span style={{ color: 'green', marginTop: '1rem' }}>{t('submitSuccess')}</span>}
      {status === 'error' && <span style={{ color: 'red', marginTop: '1rem' }}>{t('submitError')}</span>}
      {status === 'empty' && <span style={{ color: 'red', marginTop: '1rem' }}>{t('submitEmpty')}</span>}
    </S.Form>
  );
};
