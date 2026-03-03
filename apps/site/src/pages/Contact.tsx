import React from 'react';
import FormInput from '@pangea-esgi/design_system/src/_components/molecules/formInput';
import UploadInput from '@pangea-esgi/design_system/src/_components/molecules/uploadInput';
import '@pangea-esgi/design_system/src/styles/Contact.css';
import { Logo } from "@pangea-esgi/design_system/src";
import {Button }from '@pangea-esgi/design_system/src';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    console.log(Object.fromEntries(form.entries()));
  };

  return (
    <div>
        <div className = "contact-logo">
            <Logo type='tertiary'/>
        </div>
      {/* <p>Vous pouvez nous contacter via ce formulaire.</p> */}

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nom"
          name="nom"
          type="text"
          placeholder="Entrez votre nom"
        />
        <FormInput
          label="Prénom"
          name="prenom"
          type="text"
          placeholder="Entrez votre prénom"
        />

        <FormInput
          label="E-mail"
          name="email"
          type="email"
          placeholder="Entrez votre e-mail"
        />

        <div className="form-input">
          <label className="form-input__label" htmlFor="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            className="form-input__control"
            placeholder="Entrez votre message"
            rows={5}
          />
        </div>
        <UploadInput label="Téléchargez un fichier" name="file" />
        <div className = 'submit-button-container' >
            <Button type="submit" text='Envoyer'></Button>
        </div>
        
      </form>
    </div>
  );
}
