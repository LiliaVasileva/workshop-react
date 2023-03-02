export const UserRow = ({firstName, lastName, email, imageUrl, phoneNumber, _id, createdAt, onClickDetails, onClickEdit, onClickDelete}) => {
    return (<tr>
        <td>
            <img
                src={imageUrl}
                alt={`${firstName}'s profile"`} className="image"/>
        </td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <td>{createdAt}</td>

        <td className="actions">
            <button className="btn edit-btn" title="Edit" onClick={()=>onClickEdit(_id)}>Edit</button>
            <button className="btn delete-btn" title="Delete" onClick={()=>onClickDelete(_id)}>Delete</button>
            <button className="btn info-btn" title="Info" onClick={()=> onClickDetails(_id)}>Info</button>
        </td>
    </tr>)
}