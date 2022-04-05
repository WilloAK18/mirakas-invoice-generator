import React, { FC } from 'react'
import { Image } from '@react-pdf/renderer'
import compose from '../styles/compose'
import 'rc-slider/assets/index.css'
import Header from '../data/images/header.png'

interface Props {
    className?: string
    placeholder?: string
    value?: string
    width?: string
    pdfMode?: boolean
}

const HeaderImage: FC<Props> = ({
    className,
    placeholder,
    value,
    width,
    pdfMode,
}) => {
    if (pdfMode) {
        console.log('In HeaderImage')
        console.log(value)
        if (value) {
            return (
                <Image
                    style={{
                        ...compose(`image ${className ? className : ''}`),
                        maxWidth: width,
                    }}
                    src={Header}
                />
            )
        } else {
            return <></>
        }
    }

    return (
        <div
            className={`image ${value ? 'mb-5' : ''} ${
                className ? className : ''
            }`}
        >
            <>
                <img
                    src={value ? value : Header}
                    className='image__img'
                    alt={placeholder}
                    style={{ maxWidth: width || 100 }}
                />
            </>
        </div>
    )
}

export default HeaderImage
