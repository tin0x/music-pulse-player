import useLanguage from '@app/providers/language/useLanguage';
import { useRegisterForm } from '@features/register/model/useRegisterForm';
import { type FormUser, RegisterSchema } from '@features/register/schemas/RegisterSchema';
import classes from '@features/register/ui/RegisterForm.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import IconAvatar from '@shared/assets/icons/avatar.svg?react';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import Button from '@shared/ui/button/Button.tsx';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
    clearErrors,
  } = useForm<FormUser>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(RegisterSchema),
  });

  useEffect(() => {
    register('avatar');
  }, [register]);

  const { onSubmit, formError, handleFileChange } = useRegisterForm({
    setError,
    setPreviewAvatar,
    setValue,
    clearErrors,
    previewAvatar,
  });

  const { currentLanguage } = useLanguage();
  const t = getTranslate(currentLanguage);

  return (
    <form className={classes.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={classes.registerFormBlock}>
        <h1 className={classes.registerFormTitle}>{t.str.titleFormRegister}</h1>

        <label className={classes.registerFormLabel} htmlFor="username">
          {t.str.usernameForm}
        </label>
        <input
          className={classes.registerFormInput}
          type="text"
          id="username"
          autoComplete="username"
          placeholder={t.str.usernamePlaceholder}
          {...register('username')}
        />
        <small
          className={clsx(classes.registerFormInfo, {
            [classes.registerFormInfoActive]: errors.username,
          })}
        >
          {formError[currentLanguage].username}
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
          {...register('email')}
        />
        <small
          className={clsx(classes.registerFormInfo, {
            [classes.registerFormInfoActive]: errors.email?.message,
          })}
        >
          {formError[currentLanguage].email}
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
          {...register('password')}
        />
        <small
          className={clsx(classes.registerFormInfo, {
            [classes.registerFormInfoActive]: errors.password?.message,
          })}
        >
          {formError[currentLanguage].password}
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
            deps: ['password'],
          })}
        />
        <small
          className={clsx(classes.registerFormInfo, {
            [classes.registerFormInfoActive]: errors.repeatPassword?.message,
          })}
        >
          {formError[currentLanguage].repeatPassword}
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
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <small
          className={clsx(classes.registerFormInfo, {
            [classes.registerFormInfoActive]: errors.avatar?.message,
          })}
        >
          {formError[currentLanguage].avatar}
        </small>
      </fieldset>

      <Button className={classes.registerFormButton} disabled={!isValid} type="submit">
        {t.str.buttonRegisterForm}
      </Button>

      <p className={classes.registerFormTextLink}>
        <span>Already have an account?</span>
        <Link to="/login">Log in</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
