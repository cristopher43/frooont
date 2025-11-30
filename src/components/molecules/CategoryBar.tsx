const CategoryBar = ({ categories, active, onSelect }) => {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {categories.map(cat => (
                        <CategoryButton
                            key={cat.id}
                            active={active === cat.id}
                            onClick={() => onSelect(cat.id)}
                        >
                            {cat.nombre}
                        </CategoryButton>
                    ))}
                </div>
            </div>
        </div>
    );
};