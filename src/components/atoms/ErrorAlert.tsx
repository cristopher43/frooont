type ErrorAlertProps = { message?: string };

export default function ErrorAlert({ message }: ErrorAlertProps) {
    if (!message) return null;

    return (
        <div
            className="border px-4 py-3 rounded-lg mb-4 text-center font-bold animate-pulse"
            style={{
                background: "linear-gradient(to right, #7f1d1d, #991b1b)",
                borderColor: "#ef4444",
                color: "#fecaca"
            }}
        >
            X {message}
        </div>
    );
}
