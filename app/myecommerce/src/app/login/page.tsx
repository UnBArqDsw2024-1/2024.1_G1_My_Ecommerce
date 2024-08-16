import BotaoEnvio from '@/components/BotaoEnvio';
import FormField from '@/components/FormField';


export default function Login() {
  return (
    <div className="flex items-center justify-center">
      <form className="rounded px-8 pt-6 pb-8 mb-4">
        <FormField label="Endereço de E-mail" type="email" placeholder="email@example.com" name="email" />
        <FormField label="País" type="text" placeholder="País" name="country" />
        <FormField label="Nome" type="text" placeholder="Nome" name="name" />
        <FormField label="Nome de Exibição" type="text" placeholder="Nome de Exibição" name="displayName" />
        <FormField label="Senha" type="password" placeholder="Senha" name="password" />
        <div className="flex items-center justify-between">
          <input type="checkbox" id="terms" name="terms" className="mr-2 leading-tight" />
          <label className="text-sm text-gray-300" htmlFor="terms">
            Eu li e concordo com os termos de serviço
          </label>
        </div>
        <BotaoEnvio text="Continuar" />
      </form>
    </div>)
} 
