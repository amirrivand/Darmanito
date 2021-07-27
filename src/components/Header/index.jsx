import React from 'react'
import WithImage from './withImage'
import WithoutImage from './withoutImage'

function Header({textMode = false, children, image, alt, dom, bg=false}) {
    return textMode ? <WithoutImage>{children}</WithoutImage> : <WithImage bg={bg} dom={dom} imageSource={image} imageAlt={alt}>{children}</WithImage>
}

export default Header
