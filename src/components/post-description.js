import React from "react"
import Tag from "./tag"

import timeFormatter from "../utils/timeFormatter"

const descriptionStyle = {
    marginBottom: "4px !important",
}

const PostDescription = ({date, time, tags}) => (
    <div style={descriptionStyle}>
        <small>
            {date} {timeFormatter(time)}
            <br/>
            {tags ? tags.map((name, key) => <Tag {...{name, key}} />) : ""}
        </small>
    </div>
)

export default PostDescription