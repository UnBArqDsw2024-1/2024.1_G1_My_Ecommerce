interface Props {
    label: string;
    type: string;
    placeholder: string;
    name: string;
}

export default function LoginCard({ label, type, placeholder, name }: Props) {
    return (
        <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
}
