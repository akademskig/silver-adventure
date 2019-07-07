import React from "react"
import { ContactSubroutes } from "../routes";

export default class ContactViewPage extends React.Component<any>{
    render() {
        return (
            <div className="contact-view-container">
                <ContactSubroutes></ContactSubroutes>
            </div>
        )
    }
}

