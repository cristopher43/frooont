import Input from "../atoms/Input.tsx";
import Button from "../atoms/Button.tsx";
import ErrorAlert from "../atoms/ErrorAlert.tsx";

const LoginForm = ({ onSubmit, email, setEmail, password, setPassword, error }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl border-2 border-purple-500"
        >

            {/* Header */}
            <div className="text-center mb-6">
                <div className="text-5xl mb-3">🎮</div>
                <h2 className="text-4xl font-black text-white">INICIAR SESIÓN</h2>
                <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded mt-3 mx-auto w-24"></div>
            </div>

            {/* Error */}
            {error && <ErrorAlert message={error} />}

            {/* Inputs */}
            <div className="space-y-5">
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

                {/*BOTÓN CORRECTO */}
                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-4 text-xl font-bold rounded-lg shadow-lg transition-all hover:scale-105"
                >
                    ▶ Entrar
                </Button>
            </div>

            {/* Separador */}
            <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-gray-700"></div>
                <span className="text-gray-500 text-sm">O</span>
                <div className="flex-1 h-px bg-gray-700"></div>
            </div>

            {/* Cuenta demo */}
            <div className="bg-gray-900 border-2 border-cyan-500 rounded-lg p-4">
                <p className="text-sm text-center mb-2">
                    <span className="text-cyan-400 font-bold">Cuenta de Prueba</span>
                </p>
                <div className="text-center">
                    <p className="text-white font-mono text-sm">admin@gamer.com</p>
                    <p className="text-white font-mono text-sm">123456</p>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
                <p className="text-gray-500 text-xs">Conexión segura y encriptada</p>
            </div>

        </form>
    );
};

export default LoginForm;
