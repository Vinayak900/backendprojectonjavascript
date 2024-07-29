class ApiResponse{
    constructor(statuCode,data,message="Successfull",){
        this.message=message
        this.statuCode=statuCode
        this.data=data
        this.success=statuCode<400
    }
}