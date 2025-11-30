import CategoryButton from "./CategoryButton";

const CategoryBar = ({ categories = [], active, onSelect }) => {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {categories.map((cat) => (
                        <CategoryButton
                            key={cat}
                            active={active === cat}
                            onClick={() => onSelect(cat)}
                        >
                            {cat}
                        </CategoryButton>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryBar;
