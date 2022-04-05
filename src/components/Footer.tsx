import React, { FC } from 'react'
import { View as FooterView } from '@react-pdf/renderer'
import compose from '../styles/compose'

interface Props {
    className?: string
    pdfMode?: boolean
}

const Footer: FC<Props> = ({ className, pdfMode, children }) => {
    return (
        <>
            {pdfMode ? (
                <FooterView
                    style={compose('view ' + (className ? className : ''))}
                    fixed
                >
                    {children}
                </FooterView>
            ) : (
                <div className={'view ' + (className ? className : '')}>
                    {children}
                </div>
            )}
        </>
    )
}

export default Footer
