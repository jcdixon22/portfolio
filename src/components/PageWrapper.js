import TopNavbar from './TopNavbar';

function PageWrapper({ children, isHomePage = false }) {
    return (
        <div className={isHomePage ? 'page-wrapper home-background' : 'page-wrapper'}>
            {!isHomePage && <TopNavbar />}
            <div className='page-content'>
                {children}
            </div>
        </div>
    );
}

export default PageWrapper; 