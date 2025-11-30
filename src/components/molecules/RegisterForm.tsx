import Input from "../atoms/Input.tsx";
import Button from "../atoms/Button.tsx";
import ErrorAlert from "../atoms/ErrorAlert.tsx";

const RegisterForm = ({ onSubmit, nombre, setNombre, email, setEmail, password, setPassword, error }) => {
    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-4xl font-bold text-purple-600 mb-6 text-center">Crear Cuenta</h2>

            <ErrorAlert message={error} />

            <Input
                label="Nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
            />

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
            <p className="text-sm text-gray-500 mb-4">Mínimo 6 caracteres</p>

            <Button
                onClick={onSubmit}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-4 text-xl"
            >
                Registrarse
            </Button>
        </div>
    );
};