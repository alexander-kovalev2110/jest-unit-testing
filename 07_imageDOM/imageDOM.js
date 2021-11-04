import React from "react"

export default function Imagedom(props) {

    // default values for height and width (example)
    let simple = {}
    simple['sm'] = {h: 60, w: 100}
    simple['md'] = {h: 120, w: 220}
    simple['lg'] = {h: 200, w: 300}

    let {id, rootId, height, width, simpleSize} = props

    const divStyle = {
        width: String(width) + 'px',
        height: String(height) + 'px',
        background: 'orange',
        border: 'solid thin gray',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: String(100) + 'px'
    }

    // Setting default value for simpleSize
    if (((height === 0) && (width === 0)) &&
        ((simpleSize !== 'sm') && (simpleSize !== 'md'))) simpleSize = 'lg'

    // id and rootId should be defined
    if ((id === '') || (rootId === '')) return undefined

    // if simpleSize is passed, height and width should be undefined
    // simpleSize should be equal "sm" or "md" or "lg"
    if (((simpleSize === 'sm') || (simpleSize === 'md') || (simpleSize === 'lg')) &&
        ((height !== 0) || (width !== 0))) return undefined

    // if simpleSize is not passed, height and width should be defined
    if (((simpleSize !== 'sm') && (simpleSize !== 'md') && (simpleSize !== 'lg')) &&
        ((height === 0) || (width === 0))) return undefined

        return (
            <div id="child" style={divStyle} ></div>
        )
}
