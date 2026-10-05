function ContactItemBody ({imageUrl}){
    return(
        <div className="contact-item__image">
            <img src={imageUrl} alt="Contact" />
        </div>
    );
}
export default ContactItemBody;
