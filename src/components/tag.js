import React from "react"

let tagStyle = {
    backgroundColor: "#f1f1f1",
    color: "#999999",
    padding: "5px",
    marginRight: "8px",
    fontSize: "14px",
    textDecoration: "none",
    lineHeight: "26px",
    height: "26px",
    transition: "all .1s ease-in-out",
    textTransform: "capitalize",
    cursor: "default",
}

const Tag = ({ key, name, href }) => <span key={key} style={tagStyle} href={href}>{name}</span>

export default Tag