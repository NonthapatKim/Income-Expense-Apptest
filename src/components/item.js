import propTypes from 'prop-types';

const Item = ({title,amount}) => {
    const status = amount < 0 ? "expense":"income"
    const symbol = amount < 0 ? "-":"+"

    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
        <>
            <li className={status}>{title}
                <span>{symbol}{formatNumber(Math.abs(amount))} บาท</span>
            </li>
        </>
    )
}

Item.propTypes = {
    title: propTypes.string.isRequired,
    amount: propTypes.number.isRequired
}

export default Item