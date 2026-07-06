import React, { useState } from 'react';
import classes from '@features/auth/ui/RegisterForm.module.scss';
import Button from '@shared/ui/button/Button.tsx';
import clsx from 'clsx';
import { useForm, useWatch } from 'react-hook-form';
import type { FormUser } from '@features/auth/types.ts';
import IconAvatar from '@shared/assets/icons/avatar.svg?react';
import { useValidateForm } from '@features/auth/model/hooks/useValidateForm.ts';
import { regExp } from '@features/auth/model/constants.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const RegisterForm: React.FC = () => {
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm<FormUser>();

  const { onSubmit, formError, handleFileChange } = useValidateForm({
    reset,
    setPreviewAvatar,
    setValue,
    previewAvatar,
  });

  const passwordValue = useWatch({
    control,
    name: 'password',
  });

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);
  return (
    <form className={classes.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={classes.registerFormBlock}>
        <h1 className={classes.registerFormTitle}>{t.str.titleForm}</h1>

        <label className={classes.registerFormLabel} htmlFor="username">
          {t.str.usernameForm}
        </label>
        <input
          className={classes.registerFormInput}
          type="text"
          id="username"
          autoComplete="username"
          placeholder={t.str.usernamePlaceholder}
          {...register('username', {
            required: true,
            pattern: regExp.username,
          })}
        />
        <small
          className={clsx(classes.registerFormInfo, {
            [classes.registerFormInfoActive]: errors.username,
          })}
        >
          {formError[lang].username}
        </small>

        <label className={classes.registerFormLabel} htmlFor="email">
          {t.str.emailForm}
        </label>
        <input
          className={classes.registerFormInput}
          type="email"
          id="email"
          autoComplete="email"
          placeholder={t.str.emailPlaceholder}
          {...register('email', {
            required: true,
            pattern: regExp.email,
          })}
        />
        <small
          className={clsx(classes.registerFormInfo, {
            [classes.registerFormInfoActive]: errors.email,
          })}
        >
          {formError[lang].email}
        </small>

        <label className={classes.registerFormLabel} htmlFor="password">
          {t.str.passwordForm}
        </label>
        <input
          className={classes.registerFormInput}
          type="password"
          id="password"
          autoComplete="new-password"
          placeholder={t.str.passwordPlaceholder}
          {...register('password', {
            required: true,
            pattern: regExp.password,
          })}
        />
        <small
          className={clsx(classes.registerFormInfo, {
            [classes.registerFormInfoActive]: errors.password,
          })}
        >
          {formError[lang].password}
        </small>

        <label className={classes.registerFormLabel} htmlFor="repeatPassword">
          {t.str.repeatPasswordForm}
        </label>
        <input
          className={classes.registerFormInput}
          type="password"
          id="repeatPassword"
          autoComplete="new-password"
          placeholder={t.str.repeatPasswordPlaceholder}
          {...register('repeatPassword', {
            required: true,
            pattern: regExp.password,
            validate: (value) => value === passwordValue,
          })}
        />
        <small
          className={clsx(classes.registerFormInfo, {
            [classes.registerFormInfoActive]: errors.repeatPassword,
          })}
        >
          {formError[lang].repeatPassword}
        </small>

        <label className={classes.registerFormLabel} htmlFor="file">
          {t.str.chooseAvatarForm}
        </label>
        <div className={classes.registerFormFileWrapper}>
          <label className={classes.registerFormLabelFile} htmlFor="file">
            {previewAvatar ? (
              <img className={classes.registerFormPreview} src={previewAvatar} alt="preview-avatar" />
            ) : (
              <IconAvatar fill="currentColor" stroke="currentColor" />
            )}
          </label>
          <input
            className={clsx(classes.registerFormInput)}
            type="file"
            id="file"
            {...register('avatar', { onChange: handleFileChange })}
          />
        </div>
      </fieldset>

      <Button className={classes.registerFormButton} type="submit">
        {t.str.buttonRegisterForm}
      </Button>
    </form>
  );
};

export default RegisterForm;
