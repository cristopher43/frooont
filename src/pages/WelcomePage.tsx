type Props = {
    onLogin?: () => void;
    onRegister?: () => void;
};

export default function WelcomePage({ onLogin, onRegister }: Props) {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center p-4"
             style={{
                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)'
             }}>

            {/* Totem Container */}
            <div className="card shadow-lg" style={{ maxWidth: '500px', width: '100%', border: 'none' }}>

                {/* Top - Header decorativo */}
                <div className="card-header text-center p-0" style={{ background: '#fbbf24', border: 'none' }}>
                    <div className="bg-dark rounded-top p-3">
                        <h2 className="display-6 mb-0">⭐ 🎮 ⭐</h2>
                    </div>
                </div>

                {/* Middle - Contenido principal */}
                <div className="card-body bg-dark text-white text-center p-5">

                    {/* Icono grande */}
                    <div style={{ fontSize: '5rem' }} className="mb-3">🎮</div>

                    {/* Título */}
                    <h1 className="display-3 fw-bold mb-2">GAMER STORE</h1>

                    {/* Subtítulo */}
                    <p className="fs-4 fw-bold mb-4" style={{ color: '#fbbf24' }}>
                        Tu tienda gaming definitiva
                    </p>

                    {/* Línea decorativa */}
                    <hr style={{
                        height: '3px',
                        background: 'linear-gradient(to right, #22d3ee, #a855f7)',
                        border: 'none',
                        margin: '2rem auto',
                        width: '100%'
                    }} />

                    {/* Botones */}
                    <div className="d-grid gap-3 mb-4">
                        <button
                            onClick={onLogin}
                            className="btn btn-lg text-white fw-bold"
                            style={{
                                background: '#22d3ee',
                                border: 'none',
                                fontSize: '1.25rem',
                                padding: '1rem'
                            }}
                        >
                            ▶ INICIAR SESIÓN
                        </button>

                        <button
                            onClick={onRegister}
                            className="btn btn-lg fw-bold"
                            style={{
                                background: '#fbbf24',
                                color: '#1f2937',
                                border: 'none',
                                fontSize: '1.25rem',
                                padding: '1rem'
                            }}
                        >
                            ★ REGISTRARSE ★
                        </button>
                    </div>

                    {/* Stats simples */}
                    <div className="row text-center mt-4">
                        <div className="col-4">
                            <div className="fs-4 fw-bold">1000+</div>
                            <div className="small">Juegos</div>
                        </div>
                        <div className="col-4">
                            <div className="fs-4 fw-bold">50K+</div>
                            <div className="small">Gamers</div>
                        </div>
                        <div className="col-4">
                            <div className="fs-4 fw-bold">24/7</div>
                            <div className="small">Online</div>
                        </div>
                    </div>
                </div>

                {/* Bottom - Base decorativa */}
                <div className="card-footer text-center p-0" style={{ background: '#fbbf24', border: 'none' }}>
                    <div className="bg-dark rounded-bottom p-3">
                        <h3 className="h4 mb-0 text-white">⭐ ⭐ ⭐</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}