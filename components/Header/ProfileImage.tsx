import React from 'react'

export default function ProfileImage()  {
        return (
            <div className="profile">
                <figure className="image">
                    <img alt="Dan Castillo" src="/images/profile.jpeg" />
                </figure>
                <style jsx>{`
                    .profile {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                    }
                    figure {
                        cursor: pointer;
                        margin: 0 auto;
                        width: 150px;
                        height: 150px;
                    }
                    img {
                    height: auto;
                        max-width: 100%;
                    }
                    @media screen and (max-width: 769px) {
                        figure {
                            width: 250px;
                            height: 250px;
                        }
                    }
                    .image img {
                        display: block;
                        height: auto;
                        width: 100%;
                    }
                    img {
                        -webkit-transition: -webkit-transform 1s ease-in-out;
                        transition: transform 1s ease-in-out;
                        -webkit-animation: flip 1s;
                        animation: flip 1s;
                        border-radius: 50%;
                    }
                `}</style>
            </div>
        )
}
