import '../styles/footer.css';

export default function Footer() {
    return(
        <div className="footer">
            <div className='footer-content'>
                <div className='footer-left'>
                    <p>© 2024 Your Company. All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <div className="footer-logo">
                        <a href="/">
                            <img src="logo-small.svg" alt="Logo" />
                        </a>
                    </div>
                    <p>Website created by Connor Kealey</p>
                </div>
            </div>
        </div>
    )
}