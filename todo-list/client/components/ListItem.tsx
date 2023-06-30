import { ChangeEvent, FC, useState } from "react";
import styles from "@/styles/ListItem.module.css"


const ListItem: FC<{task: string}> = ({ task }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // add api call here
        setIsChecked(event.target.checked);
    }
    
    return (
        <div className={`${styles.item} ${isChecked && styles.crossed}`}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={handleChange}/>
            <p 
                placeholder="E.g. Buy groceries" 
                contentEditable="true">{task}</p>
        </div>
    )
}

export default ListItem;