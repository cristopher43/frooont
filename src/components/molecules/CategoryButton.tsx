const CategoryButton = ({ active, onClick, children }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-200
                ${active
                ? 'bg-yellow-400 text-gray-900 scale-105 shadow-lg'
                : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
            }
                focus:outline-none focus:ring-2 focus:ring-yellow-400
            `}
        >
            {children}
        </button>
    );
};

export default CategoryButton;
