import ContactItemBody from './ContactItemBody.jsx';
import ContactItemImage from './ContactItemImage.jsx';
import DeleteButton from './DeleteButton.jsx';

function ContactItem({name,tag,imageUrl, id, onDelete}){
    return(
        <div className = "contact-item">
        <ContactItemBody name={name} tag={tag}/>
        <ContactItemImage imageUrl={imageUrl}/>
        <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}

export default ContactItem;