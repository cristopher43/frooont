const CategoryButton = ({ active, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${active
                    ? 'bg-yellow-400 text-gray-900 scale-105 shadow-lg'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
        >
            {children}
        </button>
    );
};
