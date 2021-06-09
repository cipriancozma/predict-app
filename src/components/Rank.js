

const Rank = ({food, name}) => {

   const nameChanged = name ? name : "";

    return (
        <div>
            <div>
               <h3> {`${nameChanged}, we found out...`} </h3>
            </div>
            <h2> {`#${food.length} items`} </h2>

        </div>
    )
}

export default Rank;