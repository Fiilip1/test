import { Fragment } from "react";
import { useParams } from "react-router-dom"

const ViewDetails = () => {
    

    const params = useParams();

    const item = fetch('https://dummyjson.com/products').find(item => item.id === params.itemId)

    console.log(item)

    return <Fragment>
        <button>{params.itemId}</button>
    </Fragment>
}

export default ViewDetails