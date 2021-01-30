import BusinessNews from '../components/BusinessNews'

const Business = ({business}) => {
    // console.log("BUSINESS PROPS", business[0])
    return (
        <div>
            {business.map((element, id) => {
                return <BusinessNews news={element} id={id} />
            })}
        </div>
    )
}

export default Business;