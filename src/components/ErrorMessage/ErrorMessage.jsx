import css from "../ErrorMessage/ErrorMessage.module.css"

export default function ErrorMessage() {
    
    return (
       <p className={css.error}>Please update the page or enter a valid query!!!</p>
    );
}