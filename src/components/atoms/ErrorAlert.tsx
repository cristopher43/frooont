
type ErrorAlertProps = { message?: string };

export default function ErrorAlert({ message }: ErrorAlertProps) {
    if (!message) return null;
    return (
        <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg mb-4 text-center font-bold">
            ❌ {message}
        </div>
    );
}
