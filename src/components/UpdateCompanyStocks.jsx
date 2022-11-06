import React, { Component } from 'react';
import CompaniesStocksService from '../services/CompaniesStocksService';

class UpdateCompanyStocks extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            code: this.props.match.params.code,
            companyCode: '',
            companyName: '',
            companyCEO:'',
            companyTurnover:'',
            companyWebsite:'',
            stockExchange:'',
            stockPrice:''            
        }

        this.changeCompanyCodeHandler = this.changeCompanyCodeHandler.bind(this);
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
        this.changeCompanyCEOHandler = this.changeCompanyCEOHandler.bind(this);
        this.changeCompanyTurnoverHandler = this.changeCompanyTurnoverHandler.bind(this);
        this.changeCompanyWebsiteHandler = this.changeCompanyWebsiteHandler.bind(this);
        this.changeStockExchangeHandler = this.changeStockExchangeHandler.bind(this);
        this.changeStockPriceHandler = this.changeStockPriceHandler.bind(this);
        this.updateCompany = this.updateCompany.bind(this);
        
    }

    componentDidMount(){
        CompaniesStocksService.getCompanyStock(this.state.code).then( (res) =>{ 
            let companyStock = res.data;
            this.setState({
                companyCode: companyStock.companyCode,
                companyName: companyStock.companyName,
                companyCEO: companyStock.companyCEO,
                companyTurnover: companyStock.companyTurnover,
                companyWebsite: companyStock.companyWebsite,              
                stockExchange: companyStock.stockExchange,
                stockPrice: companyStock.stockPrice
            });
        });
    }

    
    updateCompany = (r) => {
        r.preventDefault();
        let company = {companyCode: this.state.companyCode, companyName: this.state.companyName, companyCEO: this.state.companyCEO,
            companyTurnover: this.state.companyTurnover, companyWebsite: this.state.companyWebsite, stockExchange: this.state.stockExchange,
            stockPrice: this.state.stockPrice};
            console.log('Updated Company =>' +JSON.stringify(company));
            console.log('this.state.code ->' +this.state.code);
            console.log('stockPrice ->' +company.stockPrice);

            CompaniesStocksService.updateCompanyStock(this.state.code, company).then(res =>{
                this.props.history.push("/showstocks");
            });
    }
    cancel(){
        this.props.history.push('/showstocks');
    }

    changeCompanyCodeHandler = (event) => {
        this.setState({companyCode : event.target.value});
    }
    changeCompanyNameHandler = (event) => {
        this.setState({companyName : event.target.value});
    }
    changeCompanyCEOHandler = (event) => {
        this.setState({companyCEO : event.target.value});
    }
    changeCompanyTurnoverHandler = (event) => {
        this.setState({companyTurnover : event.target.value});
    }
    changeCompanyWebsiteHandler = (event) => {
        this.setState({companyWebsite : event.target.value});
    }
    changeStockExchangeHandler = (event) => {
        this.setState({stockExchange : event.target.value});
    }
    changeStockPriceHandler = (event) => {
        this.setState({stockPrice : event.target.value});
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3'></div>
                        <h3 className='text-center'>Update Company</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label> Company Code: </label>
                                    <input placeholder='Company Code' name='companyCode' className='form-control'
                                    value={this.state.companyCode} onChange={this.changeCompanyCodeHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label> Company Name: </label>
                                    <input placeholder='Company Name' name='companyName' className='form-control'
                                    value={this.state.companyName} onChange={this.changeCompanyNameHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label> Company CEO: </label>
                                    <input placeholder='Company CEO' name='companyCEO' className='form-control'
                                    value={this.state.companyCEO} onChange={this.changeCompanyCEOHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label> Company Turnover: </label>
                                    <input placeholder='Company Turnover' name='companyTurnover' className='form-control'
                                    value={this.state.companyTurnover} onChange={this.changeCompanyTurnoverHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label> Company Website: </label>
                                    <input placeholder='Company Website' name='companyWebsite' className='form-control'
                                    value={this.state.companyWebsite} onChange={this.changeCompanyWebsiteHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label> Stock Exchange: </label>
                                    <input placeholder='Stock Exchange' name='stockExchange' className='form-control'
                                    value={this.state.stockExchange} onChange={this.changeStockExchangeHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label> Stock Price: </label>
                                    <input placeholder=' Stock Price' name='stockPrice' className='form-control'
                                    value={this.state.stockPrice} onChange={this.changeStockPriceHandler}/>
                                </div>

                                <button className='btn btn-success' onClick={this.updateCompany}>save</button>
                                <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateCompanyStocks;