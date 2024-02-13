import Item from '../Item';

function List({ items = [], onItemClick }) {
    const handleItemClick = (item) => {
        onItemClick && onItemClick(item);
    };

    const map = items.map((item) => {
        return <Item key={item.id} item={item} onItemClick={handleItemClick} />;
    });

    return (
        <div>
            <h2>Lista de usuarios</h2>
            <ul>{map}</ul>
        </div>
    );
}

export default List;