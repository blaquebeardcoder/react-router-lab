import BitcoinNews from '../components/BitcoinNews.js'

const Bitcoin = ({bitcoin}) => {

    return (
        <div>
            {bitcoin.map((element, id)=> {
                return <BitcoinNews bitcoin={element} id={id}/>
            })}
        </div>
    )
}

export default Bitcoin;