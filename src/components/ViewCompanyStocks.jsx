import React, { Component } from 'react';
import CompaniesStocksService from '../services/CompaniesStocksService';

class ViewCompanyStocks extends Component {
    constructor(props){
        super(props)

        this.state={
            code: this.props.match.params.code,
            viewCompanyStock:{}
        }

    }

    componentDidMount(){
        CompaniesStocksService.getCompanyStock(this.code).then((res) => {
            this.setState({viewCompanyStock: res.data})
            console.log("viewCompanyStock : "+this.state.code);
        });

    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>View Company Stock Page</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label>Company Code :</label>
                            <div>{this.state.viewCompanyStock.companyCode}</div>
                        </div>
                        <div className='row'>
                            <label>Company Name :</label>
                            <div>{this.state.viewCompanyStock.companyName}</div>
                        </div>
                        <div className='row'>
                            <label>Company CEO :</label>
                            <div>{this.state.viewCompanyStock.companyCEO}</div>
                        </div>
                        <div className='row'>
                            <label>Company Turnover CR :</label>
                            <div>{this.state.viewCompanyStock.companyTurnover}</div>
                        </div>
                        <div className='row'>
                            <label>Company Website :</label>
                            <div>{this.state.viewCompanyStock.companyWebsite}</div>
                        </div>
                        <div className='row'>
                            <label>Company Stock Exchange :</label>
                            <div>{this.state.viewCompanyStock.companyStockExchange}</div>
                        </div>

                        <div className='row'>
                            <label>Company Stock Price :</label>
                            <div>{this.state.viewCompanyStock.companyStockPrice}</div>
                        </div>
                        

                        

                        
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ViewCompanyStocks;