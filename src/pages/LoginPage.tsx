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
            setError(" Por favor completa todos los campos");
            return;
        }

        if (!email.includes("@")) {
            setError(" Email inválido");
            return;
        }

        if (email === "admin@gamer.com" && password === "123456") {
            onLogin({ nombre: "Gamer Pro", email });
        } else {
            setError(" Credenciales incorrectas");
        }
    };

    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center p-4"
            style={{
                background:
                    "linear-gradient(135deg, #1f2937 0%, #7e22ce 50%, #1f2937 100%)",
            }}
        >
            {/* Botón volver */}
            <button
                onClick={onBack}
                className="btn btn-dark position-absolute top-0 start-0 m-4 fw-bold text-white"
                style={{ border: "2px solid #4b5563" }}
            >
                ← Volver
            </button>

            {/* Card Login */}
            <div
                className="card bg-dark text-white shadow-lg"
                style={{
                    maxWidth: "500px",
                    width: "100%",
                    border: "2px solid #a855f7",
                }}
            >
                <div className="card-body p-5">
                    {/* Header */}
                    <div className="text-center mb-4">
                        <div style={{ fontSize: "3rem" }} className="mb-3">
                            🎮
                        </div>
                        <h2 className="display-5 fw-bold text-white">INICIAR SESIÓN</h2>
                        <hr
                            style={{
                                height: "2px",
                                background: "linear-gradient(to right, #22d3ee, #a855f7)",
                                border: "none",
                                margin: "1rem auto",
                                width: "100px",
                            }}
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <div
                            className="alert alert-danger border-2 fw-bold"
                            style={{ borderColor: "#ef4444" }}
                        >
                            {error}
                        </div>
                    )}

                    {/* Email */}
                    <div className="mb-4">
                        <label className="form-label fw-bold text-white">Email</label>
                        <input
                            type="email"
                            className="form-control form-control-lg bg-black text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            style={{ border: "2px solid #4b5563" }}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="form-label fw-bold text-white">Contraseña</label>
                        <input
                            type="password"
                            className="form-control form-control-lg bg-black text-white"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            style={{ border: "2px solid #4b5563" }}
                        />
                    </div>

                    {/* Botón */}
                    <button
                        onClick={handleSubmit}
                        className="btn btn-lg w-100 text-white fw-bold mb-4"
                        style={{
                            background: "linear-gradient(to right, #9333ea, #3b82f6)",
                            border: "none",
                        }}
                    >
                         Entrar
                    </button>

                    {/* Separador */}
                    <div className="d-flex align-items-center mb-4">
                        <hr className="flex-grow-1" style={{ borderColor: "#6b7280" }} />
                        <span className="mx-3 fw-bold" style={{ color: "#22d3ee" }}>
              O
            </span>
                        <hr className="flex-grow-1" style={{ borderColor: "#6b7280" }} />
                    </div>

                    {/* Cuenta de prueba */}
                    <div
                        className="card bg-black border-2 p-3"
                        style={{ borderColor: "#22d3ee" }}
                    >
                        <p className="text-center mb-2 fw-bold" style={{ color: "#22d3ee" }}>
                            Cuenta de Prueba
                        </p>
                        <div className="text-center">
                            <p className="mb-1 text-white font-monospace">
                                admin@gamer.com
                            </p>
                            <p className="mb-0 text-white font-monospace">
                                123456
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-4">
                        <p className="small fw-bold" style={{ color: "#facc15" }}>
                            🔒 Conexión segura y encriptada
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
