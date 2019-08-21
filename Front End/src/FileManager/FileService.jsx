import service from './Service';

export class FileService {
    uploadFileToServer(data){
        //returns Promise object
        return service.getRestClient().post('/api/uploadFile', data);
    }
    downloadFile(id){
        //returns Promise object
        return service.getRestClient().get('/api/downloadFile/'+id);
    }
}