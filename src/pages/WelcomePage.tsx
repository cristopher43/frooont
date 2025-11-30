type Props = {
    onLogin?: () => void;
    onRegister?: () => void;
};

export default function WelcomePage({ onLogin, onRegister }: Props) {
    return (
        <div
            className="d-flex align-items-center justify-content-center p-4"
            style={{
                minHeight: '100vh',
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)'
            }}
        >
            <div
                className="card shadow-lg w-100"
                style={{ maxWidth: '400px', border: 'none' }}
            >
                {/* Top */}
                <div className="card-header text-center p-0" style={{ background: '#fbbf24', border: 'none' }}>
                    <div className="bg-dark rounded-top p-3">
                        <h2 className="display-6 mb-0">⭐ 🎮 ⭐</h2>
                    </div>
                </div>

                {/* Body */}
                <div className="card-body bg-dark text-white text-center p-4 p-md-5">
                    <div style={{ fontSize: '5rem' }} className="mb-3">🎮</div>
                    <h1 className="display-4 fw-bold mb-2">GAMER STORE</h1>
                    <p className="fs-5 fw-bold mb-4" style={{ color: '#fbbf24' }}>
                        Tu tienda gaming definitiva
                    </p>
                    <hr style={{
                        height: '3px',
                        background: 'linear-gradient(to right, #22d3ee, #a855f7)',
                        border: 'none',
                        margin: '2rem auto',
                        width: '80%'
                    }} />

                    <div className="d-grid gap-3 mb-4">
                        <button
                            onClick={onLogin}
                            className="btn btn-lg text-white fw-bold"
                            style={{ background: '#22d3ee', border: 'none', fontSize: '1.25rem', padding: '1rem' }}
                        >
                            ▶ INICIAR SESIÓN
                        </button>

                        <button
                            onClick={onRegister}
                            className="btn btn-lg fw-bold"
                            style={{ background: '#fbbf24', color: '#1f2937', border: 'none', fontSize: '1.25rem', padding: '1rem' }}
                        >
                            ★ REGISTRARSE ★
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="row text-center mt-4">
                        <div className="col-4">
                            <div className="fs-5 fw-bold">1000+</div>
                            <div className="small">Juegos</div>
                        </div>
                        <div className="col-4">
                            <div className="fs-5 fw-bold">50K+</div>
                            <div className="small">Gamers</div>
                        </div>
                        <div className="col-4">
                            <div className="fs-5 fw-bold">24/7</div>
                            <div className="small">Online</div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="card-footer text-center p-0" style={{ background: '#fbbf24', border: 'none' }}>
                    <div className="bg-dark rounded-bottom p-3">
                        <h3 className="h5 mb-0 text-white">⭐ ⭐ ⭐</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
