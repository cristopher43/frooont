import Input from "../atoms/Input.tsx";
import Button from "../atoms/Button.tsx";
import ErrorAlert from "../atoms/ErrorAlert.tsx";

const RegisterForm = ({
                          onSubmit,
                          nombre,
                          setNombre,
                          email,
                          setEmail,
                          password,
                          setPassword,
                          error
                      }) => {
    return (
        <div
            className="max-w-md mx-auto p-8 rounded-2xl shadow-2xl text-white"
            style={{
                background: "linear-gradient(135deg, #1f2937 0%, #7e22ce 50%, #1f2937 100%)",
                border: "2px solid #a855f7"
            }}
        >
            <h2 className="text-4xl font-bold text-center mb-6"
                style={{
                    background: "linear-gradient(to right, #22d3ee, #a855f7)",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                }}
            >
                Crear Cuenta
            </h2>

            <ErrorAlert message={error} />

            <Input
                label="Nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="text-white"
            />

            <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="text-white"
            />

            <Input
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="text-white"
            />

            <p className="text-sm mb-4" style={{ color: "#cbd5e1" }}>
                Mínimo 6 caracteres
            </p>
            <Button
                type="button"
                onClick={onSubmit}
                className="w-full py-4 text-xl fw-bold text-white"
                style={{
                    background: "linear-gradient(to right, #9333ea, #3b82f6)",
                    border: "none"
                }}
            >
                Registrarse
            </Button>

        </div>
    );
};

export default RegisterForm;
