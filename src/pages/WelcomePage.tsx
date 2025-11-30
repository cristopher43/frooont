import Button from "../components/atoms/Button";

type Props = {
    onLogin?: () => void;
    onRegister?: () => void;
};

export default function WelcomePage({ onLogin, onRegister }: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 flex items-center justify-center p-6">
            <div className="text-center">
                <div className="mb-12">
                    <div className="text-8xl mb-6">🎮</div>
                    <h1 className="text-6xl font-black text-white mb-4">GAMER STORE</h1>
                    <p className="text-2xl text-white font-semibold">Tu tienda gaming definitiva</p>
                </div>

                <div className="flex gap-6 justify-center">
                    <Button onClick={onLogin} className="bg-white text-purple-600 text-2xl px-8 py-4">
                        Iniciar Sesión
                    </Button>
                    <Button onClick={onRegister} className="bg-yellow-400 text-gray-900 text-2xl px-8 py-4">
                        Registrarse
                    </Button>
                </div>
            </div>
        </div>
    );
}
