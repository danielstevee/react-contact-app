function ContactItemBody({name, tag}){
    return(
        <div className="contact-item-body">
            <h3 className="contact-item-name">{name}</h3>
            <p className="contact-item-tag">@{tag}</p>
        </div>
    )
}
export default ContactItemBody;