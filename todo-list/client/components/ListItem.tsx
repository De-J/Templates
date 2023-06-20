import { ChangeEvent, FC, useState } from "react";
import styles from "@/styles/ListItem.module.css"


const ListItem: FC<{task: string}> = ({ task }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        
        setIsChecked(event.target.checked);
    }
    
    return (
        <div className={styles.item}>
            <input 
                type='checkbox' 
                checked={isChecked}
                onChange={handleChange}/>
            <p>{task}</p>
        </div>
    )
}

export default ListItem;