import Item from "./item"

const Datat = (props) => {
    const {items} = props
    return(
      <>
        <ul className="list">
          {items.map((e) => {
            return <Item {...e} key={e.id}/>
          })}
        </ul> 
      </>
    )
}

export default Datat