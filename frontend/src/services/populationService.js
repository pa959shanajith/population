import ServiceBase from './serviceBase';


export default class PopulationService{
    getPopulation(data){
        return ServiceBase.get(process.env.REACT_APP_API_KEY + `country/getpopulation/${data.page}`)
    }
    Login(data){
        return ServiceBase.post(process.env.REACT_APP_API_KEY + "/user/login",data);
    }
    search(data){
        return ServiceBase.get(process.env.REACT_APP_API_KEY + `country/search/${data.key}/${data.page}`)
    }
    liveData(){
        return ServiceBase.get("https://world-population.p.rapidapi.com/population/Mexico");
    }
}