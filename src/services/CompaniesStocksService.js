import axios from 'axios';

const SHOW_COMPANIES_STOCK_BASE_URL = 'http://localhost:8088/company/getall';
const REGISTER_COMPANIES_STOCK_BASE_URL = 'http://localhost:8088/company/register';
const GET_COMANY_STOCK_BY_CODE_URL = 'http://localhost:8088/company/info';
const UPDATE_COMPANY_STOCK_URL = 'http://localhost:8088/company/update';
const DELETE_COMPANY_STOCK_URL = 'http://localhost:8088/company/delete';

class CompaniesStoksService{

    getCompaniesStocks(){
        return axios.get(SHOW_COMPANIES_STOCK_BASE_URL);
    }

    registerCompanyStock(company){
        return axios.post(REGISTER_COMPANIES_STOCK_BASE_URL, company);
    }

    getCompanyStock(code){
        return axios.get(GET_COMANY_STOCK_BY_CODE_URL+ '/' + code);
    }

    updateCompanyStock(code, companystock){
        return axios.put(UPDATE_COMPANY_STOCK_URL+'/'+code, companystock)
    }

    deleteCompanyStockByCode(code){
        return axios.delete(DELETE_COMPANY_STOCK_URL+'/'+code);
    }
}
export default new CompaniesStoksService;
