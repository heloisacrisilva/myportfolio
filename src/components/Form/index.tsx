'use client';

import { useState } from 'react';
import { getTranslation } from '@/utils/i18n';
import * as S from './style';
import { useForm } from '@formspree/react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactFormProps {
  lang: string;
}

export const ContactForm = ({ lang }: ContactFormProps) => {
  const t = getTranslation(lang, 'contactSection');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'loading' | 'error' | 'empty'>('idle');
  const [state, handleSubmitForm] = useForm(process.env.NEXT_PUBLIC_FORM_ID || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('empty');
      return;
    }

    setStatus('loading');

    try {
      await handleSubmitForm(e);

      if (!state.errors) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <S.CardContainer>
      {/* Left Column: Info Details */}
      <S.InfoColumn>
        <S.Title>{t('title')}</S.Title>
        <S.Description>{t('description')}</S.Description>
        
        <S.DetailsList>
          <S.DetailItem>
            <S.IconWrapper>
              <FaEnvelope />
            </S.IconWrapper>
            <S.DetailTextContainer>
              <S.DetailLabel>{t('emailLabel')}</S.DetailLabel>
              <S.DetailValue href={`mailto:${t('emailValue')}`}>{t('emailValue')}</S.DetailValue>
            </S.DetailTextContainer>
          </S.DetailItem>

          <S.DetailItem>
            <S.IconWrapper>
              <FaMapMarkerAlt />
            </S.IconWrapper>
            <S.DetailTextContainer>
              <S.DetailLabel>{t('locationLabel')}</S.DetailLabel>
              <S.DetailValueAsText>{t('locationValue')}</S.DetailValueAsText>
            </S.DetailTextContainer>
          </S.DetailItem>
        </S.DetailsList>
      </S.InfoColumn>

      {/* Right Column: Form */}
      <S.FormColumn onSubmit={handleSubmit} noValidate>
        <S.FormGrid>
          <S.InputGroup>
            <S.Label htmlFor="name">{t('formName')}</S.Label>
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
          </S.InputGroup>
          
          <S.InputGroup>
            <S.Label htmlFor="email">{t('formEmail')}</S.Label>
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
          </S.InputGroup>
        </S.FormGrid>

        <S.InputGroup style={{ width: '100%' }}>
          <S.Label htmlFor="message">{t('formMessage')}</S.Label>
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
        </S.InputGroup>

        <S.SubmitButton type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? t('submitLoading') : t('submit')}
        </S.SubmitButton>

        {status === 'success' && <S.StatusMessage $type="success">{t('submitSuccess')}</S.StatusMessage>}
        {status === 'error' && <S.StatusMessage $type="error">{t('submitError')}</S.StatusMessage>}
        {status === 'empty' && <S.StatusMessage $type="error">{t('submitEmpty')}</S.StatusMessage>}
      </S.FormColumn>
    </S.CardContainer>
  );
};
export default ContactForm;
