import Input from "../atoms/Input.tsx";
import Button from "../atoms/Button.tsx";
import ErrorAlert from "../atoms/ErrorAlert.tsx";

const LoginForm = ({ onSubmit, email, setEmail, password, setPassword, error }) => {
    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-4xl font-bold text-purple-600 mb-6 text-center">Iniciar Sesión</h2>

            <ErrorAlert message={error} />

            <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
            />

            <Input
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
            />

            <Button
                onClick={onSubmit}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-xl"
            >
                Entrar
            </Button>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                    <strong>Cuenta de prueba:</strong><br />
                    admin@gamer.com / 123456
                </p>
            </div>
        </div>
    );
};