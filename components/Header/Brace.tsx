import React from 'react'

interface IBrace {
    type: string;
    color: string;
}

export default function Brace({ type, color }: IBrace) {
        const distance = 200;
        const item = {
            left: {
                text: '{',
                startPosition: distance,
                textAlign: 'right'
            },
            right: {
                text: '}',
                startPosition: -distance,
                textAlign: 'left'
            }
        }

        return (
            <div className={'is-hidden-mobile has-text-' + item[type].textAlign}>
                { item[type].text }
                <style jsx>{`
                    div {
                        color: ${color};
                        font-size: 15em;
                        -webkit-animation: move 1s;
                        animation: move 1s;
                    }
                    @keyframes move {
                        from {
                            transform: translate(${item[type].startPosition}px, 0);
                        }
                        to {
                            transform: translate(0px, 0px);
                        }
                    }
                `}</style>
            </div>
        )
}
