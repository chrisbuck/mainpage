/* Page */
class Page extends React.Component {
    render(){
        return(
            <div id="page" className="container-fluid">
                <Header />
                <ContentLayout />
                <Footer />
            </div>
        );
    }
}

/* Header */
class Header extends React.Component {
    render(){
        return(
            <div id="header">
                <InnerHeader />
            </div>
        );
    }
}
class InnerHeader extends React.Component {
    render(){
        return(
            <div id="inner-header">
                <TopHeader />
                <MidHeader />
                <BottomHeader />
            </div>
        );
    }
}
const SocialLink = (nameStr, linkStr) => {
    return(
        <span className="socialLinkSpan">
            <a href={linkStr}>
                <i className={nameStr + ' fa-1x'}></i>
            </a>
        </span>
    );
};

class TopHeader extends React.Component {
    render(){
        return(
            <div id="top-header" className="row">
                <div id="ticker" className="col-12 col-sm-8">
                    <span className="tickerText">This is some important ticker news.</span>
                </div>
                <div id="social-icons" className="col-12 col-sm-4 xsAlignCenterRight">
                    {new SocialLink('fab fa-linkedin', 'https://linkedin.com/in/ChristopherBuck')}
                    {new SocialLink('fab fa-twitter-square', 'https://twitter.com/ChrisBuck')}
                </div>
            </div>
        );
    }
}
class Branding extends React.Component {
    render(){
        return(
            <div id="branding" className="col-12 col-sm-11">
                <div id="title-row" className="row">
                    <div id="logo-wrapper" className="col">
                        <a href="https://chrisbuck.github.io">
                            <div id="logo-inner-wrapper">
                                <img id="logo" src="/public/images/headshot.png" />
                            </div>
                        </a>
                    </div>
                    <div id="title-outer-wrapper" className="col">
                        <div id="title-wrapper">
                            <span id="title">chrisbuck.github.io</span>
                        </div>
                    </div>
                </div>
                <div id="subtitle-row" className="row">
                </div>
            </div>
        );
    }
}
class MainMenu extends React.Component {
    render(){
        return(
            <div id="main-menu" className="col-12 col-sm-1">
                <div id="menu-btn-wrapper">
                    <a id="main-menu-link" href="#">
                        <i className="fas fa-bars"></i>
                    </a>
                </div>
            </div>
        );
    }
}
class MidHeader extends React.Component {
    render(){
        return(
            <div id="mid-header" className="row">
                <Branding />
                <MainMenu />
            </div>
        );
    }
}
class BottomHeader extends React.Component {
    render(){
        return(
            <div id="bottom-header" className="row xsDisplayNone">
                <h3>BottomHeader</h3>
            </div>
        );
    }
}

/* Content */
function debounce(fn, ms) {
    let timer;
    return _ => {
      clearTimeout(timer);
      timer = setTimeout(_ => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
}
const DesktopLayout = () => {
    return(
        <div id="contentLayout" className="row">
            <LeftSidebar />
            <Article />
            <RightSidebar />
        </div>
    );
}
const MobileLayout = () => {
    return(
        <div id="contentLayout">
            <Article />
            <LeftSidebar />
            <RightSidebar />
        </div>
    );
}
class ContentLayout extends React.Component {
    getDimensions(){
        let dimensions = {
                height: window.innerHeight,
                width: window.innerWidth
        };
        window.dimensions = dimensions;
        return dimensions;
    }
    render(){
        let dimensions = this.getDimensions();
        
        window.addEventListener('resize', () =>{
            dimensions = this.getDimensions();
            //render();
        });
    
        return(
            <div id="main-content" className="container-fluid">
                {dimensions.width <= 576 ? <MobileLayout /> : null }
                {dimensions.width > 576 ? <DesktopLayout /> : null }
            </div>
        )
    }
}
class Content extends React.Component {
    render(){
        return(
            <div id="page">
                <LeftSidebar />
                <Article />
                <RightSidebar />
            </div>
        );
    }
}
class Article extends React.Component {
    render(){
        return(
            <div id="article">
                <h2>Article</h2>
                <Banner />
                <Entry />
            </div>
        );
    }
}
class Banner extends React.Component {
    render(){
        return(
            <div id="banner">
                <h3>Banner</h3>
            </div>
        );
    }
}
class Entry extends React.Component {
    render(){
        return(
            <div id="entry">
                <h3>Entry</h3>
            </div>
        );
    }
}
class LeftSidebar extends React.Component {
    render(){
        return(
            <div id="left-sidebar">
                <h2>Left Sidebar</h2>
            </div>
        );
    }
}
class RightSidebar extends React.Component {
    render(){
        return(
            <div id="right-sidebar">
                <h2>Right Sidebar</h2>
            </div>
        );
    }
}

class Footer extends React.Component {
    render(){
        return(
            <div id="footer">
                <h2>Footer</h2>
            </div>
        );
    }
}

const render = () => {
    const jsx = (
        <div>
            <Page />
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
}

render();