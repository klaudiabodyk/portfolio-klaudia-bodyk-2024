import "./styles/styles.css";
import {Link, To} from "react-router-dom";
interface ICard {
    header?: string;
    subHeader?: string;
    linkLabel?: string;
    linkTo: To;
}

/**
 * Component display simple card where you can find the header, subheader and link where we can navigate
 * @param header - name of the project
 * @param subHeader - small description
 * @param linkTo - website link
 * @param linkLabel - link label
 */
const Card = ({header, subHeader, linkTo, linkLabel}: ICard) => {
return (
    <div className="card">
        <p className="heading">
            {header}
        </p>
        <p>
            {subHeader}
        </p>
        <Link to={linkTo}>{linkLabel}</Link>
    </div>
)
}
export default Card;