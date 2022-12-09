import requests from "../../requests/request";

const breed ={
    state:{
        breeds:{},
        breed:[],
        sub_breed:[],
        sub_breed_list:[],
        error:''
    },
    reducers:{
        setBreeds(state,payload){
            return {...state,breeds:payload}
        },
        setBreed(state,payload){
            return {...state,breed:payload}
        },
        setSubBreed(state,payload){
            return {...state,sub_breed:payload}
        },
        setSubBreedList(state,payload){
            return {...state,sub_breed_list:payload}
        },
        setError(state,payload){
            return {...state,error:payload}
        }
    },
    effects:(dispatch)=>({
        async getBreeds(){
            this.setBreeds({})
            const {data} = await requests.get(`list/all`);
            if(data.status === "success"){
                this.setBreeds(data.message);
            }else{
                dispatch.alert.error({ msg: `Error while fetching api` });
            }
        },  
        async getBreed(filters){
            this.setBreed([]);
            const {data} = await requests.getList(`${filters.breed}/images`);
            if(data.status === "success"){
                this.setBreed(data.message);
            }else{
                dispatch.alert.error({ msg: `Error while fetching api` });
            }
        },  
        async getSubBreed(){
            this.setSubBreed([]);
            const {data} = await requests.getList(`hound/list`);
            if(data.status === "success"){
                this.setSubBreed(data.message);
            }else{
                dispatch.alert.error({ msg: `Error while fetching api` });
            }
        },  
        async getSubBreedList(filters){
            this.setSubBreedList([]);
            const {data} = await requests.getList(`${filters.breed}/${filters.sub_breed}/images`);
            if(data.status === "success"){
                this.setSubBreedList(data.message);
            }else{
                dispatch.alert.error({ msg: `Error while fetching api` });
            }
        },  
        resetMessages(){
            this.setBreed([]);
            // this.setSubBreed([]);
            this.setSubBreedList([]);
            this.setError('');
        }
    })
}

export default breed