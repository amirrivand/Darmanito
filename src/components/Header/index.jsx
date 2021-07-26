import React from 'react'
import WithImage from './withImage'
import WithoutImage from './withoutImage'

function Header({textMode = false, children, image, alt, className}) {
    return textMode ? <WithoutImage /> : <WithImage imageSource={image} imageAlt={alt}>{children}</WithImage>
}

export default Header
