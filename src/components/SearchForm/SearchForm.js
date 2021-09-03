import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import InfoMessage from "../InfoMessage/InfoMessage";
import "./SearchForm.css";
import React, { useEffect } from "react";

import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function SearchForm({ className, onSubmit }) {
  const {
    values,
    setValues,
    handleChange,
    errors,
    setErrors,
    isValid,
    setIsValid,
    resetForm
  } = useFormWithValidation();

  useEffect(() => {
    setIsValid(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if (!isValid) {
      return;
    }
    onSubmit(values.search);
    resetForm();
    setIsValid(false);
  };

  return (
    <form className={`search-form ${className}`.trim()} onSubmit={handleSubmit}>
      <Input
        className="search-form__input"
        type="text"
        name="search"
        placeholder="Введите вопрос"
        value={values.search || ""}
        onChange={handleChange}
      />
      <SubmitButton
        className="search-form__submit-button"
        type="submit"
        name="search"
        value="Search"
        isValid={isValid}
      />
      <InfoMessage
        className={`search-form__info-message ${
          errors.search ? "" : "search-form__info-message_disabled"
        }`.trim()}
        message={`${errors.search || ""}`}
        isValid={isValid}
      />
    </form>
  );
}

export default SearchForm;
