/**
 * @jest-environment jsdom
 */

import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import Imagedom from "./imageDOM"

let arg = {}                    // parameters for running the tested module

let container = null;
beforeEach(() => {          // it runs before starting each test
    // preparing the DOM element to render to
    container = document.createElement("div")
    container.id = "root"
    document.body.appendChild(container)

    arg = {
        id: 'child',
        rootId: 'root',
        height: 0,
        width: 0,
        simpleSize: 'sm'
    }
})

afterEach(() => {           // it runs after the completion of each test
    // clean up after completion
    unmountComponentAtNode(container)
    container.remove()
    container = null
});

describe('Image DOM function testing:', () => {

    test('1) if the generation of the tag has occurred, should return defined', () => {
        act(() => {
            render(<Imagedom arg={arg} />, document.getElementById("root"))
        })

        expect(document.getElementById("child")).toBeDefined()
    });

    test('2) if the generation of the tag has occurred, its id should be "child', () => {
        act(() => {
            render(<Imagedom arg={arg} />, document.getElementById("root"))
        })
        expect(document.getElementById("child").id).toBe("child")
    })

})
