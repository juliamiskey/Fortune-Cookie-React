import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer-socials">
                    <div className="container">
                        <p>&copy;Julia Miskey</p>

                        <ul>
                            <li>
                                <a href="https://twitter.com/MiskeyJulia" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/juliamiskey/" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/juliamiskey" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>

                            <li>
                                <a href="mailto:juliamiskey@gmail.com" target="_blank">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </li>

                            <li>
                                <a href="http://juliamiskey.com" target="_blank">
                                    <i className="fas fa-mouse-pointer"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;