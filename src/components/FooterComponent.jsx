import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)
        
        this.state={

        }
    }


    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted'>This is Naresh FSE2 Stcok Market App</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;