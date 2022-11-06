import React, { Component } from 'react';
import CompaniesStoksService from '../services/CompaniesStocksService'

class ShowCompaniesStoks extends Component {
    constructor(props){
        super(props)

        this.state = {
            companyStoks: []
        }

        this.registerCompany = this.registerCompany.bind(this);
        this.editCompanyStock = this.editCompanyStock.bind(this);
        this.deleteCompanyStock = this.deleteCompanyStock.bind(this);
    }

    editCompanyStock(code){
        this.props.history.push(`/updatecompanystocks/${code}`);
    }
    
    componentDidMount(){
        CompaniesStoksService.getCompaniesStocks().then((res) => {
            this.setState({companyStoks: res.data})
        });
    }

    registerCompany(){
        this.props.history.push('/addcompanystocks');
    }
    
    viewCompanyStocks(code){
        this.props.history.push(`/viewcompanystocks/${code}`)
    }

    deleteCompanyStock(code){
        CompaniesStoksService.deleteCompanyStockByCode(code).then((res)=>
        {   
            //step 1 calling again showstocks base url from REST API
            {/*this.props.history.push('/showstocks');*/}

            //step2 Since we have deleted the record. so just we are clearing the record from companyStoks array
            this.setState({companyStoks: this.state.companyStoks.filter(companystock => companystock !==code)});
        });
    }


    render() {
        return (
            <div>
                <h2 className='text-center'>Companies & Stocks</h2>
                <div className='text-left'>
                    <button className='btn btn-primary' onClick={this.registerCompany}>Register Company</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-boardered'>
                        <thead>
                            <tr>
                                <th>Company Code</th>
                                <th>Company Name</th>
                                <th>Company CEO</th>
                                <th>Company Turnover CR</th>
                                <th>Company Website</th>
                                <th>Stock Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.companyStoks.map(
                                    companyStok=>
                                    <tr key = {companyStok.companyCode}>
                                        <td>{companyStok.companyCode}</td>
                                        <td>{companyStok.companyName}</td>
                                        <td>{companyStok.companyCEO}</td>
                                        <td>{companyStok.companyTurnover}</td>
                                        <td>{companyStok.companyWebsite}</td>
                                        <td>{companyStok.stockPrice}</td>
                                        <td>
                                            <button onClick={ () => this.editCompanyStock(companyStok.companyCode)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCompanyStock(companyStok.companyCode)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewCompanyStocks(companyStok.companyCode)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ShowCompaniesStoks;