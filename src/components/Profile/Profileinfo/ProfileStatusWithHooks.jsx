import React from "react";
import { useState } from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateMode = () => {
        setEditMode(true)
    }

    const deActivateEditeMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChahge = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode && <div>
            <span onDoubleClick={activateMode} >{props.status || "status"}</span>
        </div>
        }
        {editMode && <div>
            <input onChange={onStatusChahge} autoFocus={true} value={status} onBlur={deActivateEditeMode} />
        </div>}
    </div>
}


export default ProfileStatusWithHooks