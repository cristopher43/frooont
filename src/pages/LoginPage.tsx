import { useState } from "react";

type Props = {
    onLogin: (usuario: { nombre: string; email: string }) => void;
    onBack: () => void;
};

export default function LoginPage({ onLogin, onBack }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        setError("");

        if (!email || !password) {
            setError("⚠️ Por favor completa todos los campos");
            return;
        }

        if (!email.includes("@")) {
            setError("⚠️ Email inválido");
            return;
        }

        if (email === "admin@gamer.com" && password === "123456") {
            onLogin({ nombre: "Gamer Pro", email: email });
        } else {
            setError("❌ Credenciales incorrectas");
        }
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center p-4"
             style={{
                 background: 'linear-gradient(135deg, #1f2937 0%, #7e22ce 50%, #1f2937 100%)'
             }}>

            {/* Botón volver */}
            <button
                onClick={onBack}
                className="btn btn-dark position-absolute top-0 start-0 m-4 fw-bold"
                style={{ border: '2px solid #4b5563' }}
            >
                ← Volver
            </button>

            {/* Formulario de login */}
            <div className="card bg-dark text-white shadow-lg"
                 style={{
                     maxWidth: '500px',
                     width: '100%',
                     border: '2px solid #a855f7'
                 }}>

                <div className="card-body p-5">
                    {/* Header */}
                    <div className="text-center mb-4">
                        <div style={{ fontSize: '3rem' }} className="mb-3">🎮</div>
                        <h2 className="display-5 fw-bold">INICIAR SESIÓN</h2>
                        <hr style={{
                            height: '2px',
                            background: 'linear-gradient(to right, #22d3ee, #a855f7)',
                            border: 'none',
                            margin: '1rem auto',
                            width: '100px'
                        }} />
                    </div>

                    {/* Error alert */}
                    {error && (
                        <div className="alert alert-danger border-2" style={{ borderColor: '#ef4444' }}>
                            {error}
                        </div>
                    )}

                    {/* Formulario */}
                    <div className="mb-4">
                        <label className="form-label fw-bold">Email</label>
                        <input
                            type="email"
                            className="form-control form-control-lg bg-dark text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            style={{ border: '2px solid #4b5563' }}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-bold">Contraseña</label>
                        <input
                            type="password"
                            className="form-control form-control-lg bg-dark text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            style={{ border: '2px solid #4b5563' }}
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="btn btn-lg w-100 text-white fw-bold mb-4"
                        style={{
                            background: 'linear-gradient(to right, #9333ea, #3b82f6)',
                            border: 'none'
                        }}
                    >
                        ▶ Entrar
                    </button>

                    {/* Separador */}
                    <div className="d-flex align-items-center mb-4">
                        <hr className="flex-grow-1" style={{ borderColor: '#4b5563' }} />
                        <span className="mx-3 text-muted">O</span>
                        <hr className="flex-grow-1" style={{ borderColor: '#4b5563' }} />
                    </div>

                    {/* Cuenta de prueba */}
                    <div className="card bg-black border-2 p-3" style={{ borderColor: '#22d3ee' }}>
                        <p className="text-center mb-2">
                            <span className="fw-bold" style={{ color: '#22d3ee' }}>💡 Cuenta de Prueba</span>
                        </p>
                        <div className="text-center">
                            <p className="mb-1 font-monospace small">📧 admin@gamer.com</p>
                            <p className="mb-0 font-monospace small">🔑 123456</p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-4">
                        <p className="small text-muted">🔒 Conexión segura y encriptada</p>
                    </div>
                </div>
            </div>
        </div>
    );
}