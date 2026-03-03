import { Header } from '@pangea-esgi/design_system/src';
import FormInput from '@pangea-esgi/design_system/src/_components/molecules/formInput';
import UploadInput from '@pangea-esgi/design_system/src/_components/molecules/uploadInput';

export default function App() {
  return (
    <div>
      <Header title="Backoffice" href="/backoffice" />
      <FormInput
        label="Nom"
        type="text"
        placeholder="Entrez votre nom"
      />
      <UploadInput label="Téléchargez un fichier" />
    </div>
  )
}
