import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants/dndTypes";
import "./RemoveDropZone.css";
import { FaTrashAlt } from "react-icons/fa";

function RemoveDropZone({ onRemove }) {
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.FAVOURITE,
        drop: (item) => onRemove(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    const isActive = isOver && canDrop;

    return (
        <div
            ref={drop}
            className={`remove-drop-zone ${isActive ? "active" : ""} ${canDrop ? "visible" : ""}`}
        >
            <div className="content">
                <FaTrashAlt className="trash-icon" />
                <span>Drag here to remove</span>
            </div>
        </div>
    );
}

export default RemoveDropZone;
