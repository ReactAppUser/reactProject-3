import React from 'react';
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../utils/validators/validators"
import { Textarea } from "../../common/formsControls/formsControls"

const MaxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, MaxLength50]} placeholder="Enter your message" name="newMessageBody"/>
            </div>
            <div>
                <button>Sends</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: "dialogs-add-message-form" })(AddMessageForm);