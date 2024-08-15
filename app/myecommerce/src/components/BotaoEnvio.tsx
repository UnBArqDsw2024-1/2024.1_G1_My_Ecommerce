interface BotaoEnvioProps {
    text: string;
}

export default function BotaoEnvio ({ text }: BotaoEnvioProps) {
    return (
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            {text}
        </button>
    );
}